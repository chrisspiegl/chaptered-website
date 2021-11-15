// Inspired by:
// - https://markus.oberlehner.net/blog/vuex-data-model-and-feature-module-strategy-data-model-module/
// - https://markus.oberlehner.net/blog/vuex-data-model-and-feature-module-strategy-feature-modules/

import { asArray } from '@/utils'

export default function makeDataModel({
  maxCacheAge = 60_000, // 1 Minute.
  service,
}) {
  return {
    namespaced: true,
    actions: {
      async FETCH_ITEMS({ commit, state }, { key, query, useCache = true }) {
        if (!key) {
          throw new Error('Missing `key` attribute.');
        }

        const queryId = `ITEMS_${JSON.stringify(query)}`;
        // Cleanup the cache.
        commit('CLEANUP');

        // By saving the `queryId` with the given `key` in the usage table, we can later
        // determine which queries are still active and can not be pruned from cache.
        // state.cache.usage[key] = queryId;
        commit('ADD_CACHE_KEY', { key, queryId })

        const cacheHit = useCache && state.cache.queries[queryId];
        if (cacheHit) {
          console.log('From cache:', queryId);
        }

        if (!cacheHit) {
          const response = await service.list(query);
          commit('ADD_QUERY', {
            response,
            id: queryId,
            query,
          });
        }

        return queryId;
      },
      async FETCH_ITEM({ commit, state }, { key, query, useCache = true }) {
        if (!key) {
          throw new Error('Missing `key` attribute.');
        }

        const queryId = `ITEM_${JSON.stringify(query)}`;
        // Cleanup the cache.
        commit('CLEANUP');

        // state.cache.usage[key] = queryId;
        commit('ADD_CACHE_KEY', { key, queryId })
        const cacheHit = useCache && state.byId[queryId];
        if (cacheHit) {
          console.log('From cache:', queryId);
        }

        if (!cacheHit) {
          const response = await service.find(query);
          commit('ADD_QUERY', {
            response,
            id: queryId,
            query,
          });
        }

        return queryId;
      },
    },
    mutations: {
      ADD_QUERY(state, { response, id, query }) {
        const queryDetails = {
          createdAt: Date.now(),
          id,
          response: {
            ...response,
            data: Array.isArray(response.data)
              ? response.data.map((x) => `${x.id}`)
              : `${response.data.id}`,
          },
          query,
        };
        // Vue.set(state.cache.queries, id, queryDetails);
        state.cache.queries[id] = queryDetails;
        for (const item of asArray(response.data)) {
          state.byId[item.id] = item
          // Vue.set(state.byId, item.id, item)
          ;
        }
      },
      CLEANUP(state) {
        const queriyIdsInUse = Object.values(state.cache.usage);
        const unusedQueries = Object.values(state.cache.queries).filter(
          (x) => !queriyIdsInUse.includes(x.id),
        );
        const expiredQueries = unusedQueries.filter(
          (x) => x.createdAt < Date.now() - maxCacheAge,
        );
        // Delete quries from cache if they are expired.
        for (const queryDetail of expiredQueries) {
          delete state.cache.queries[queryDetail.id];
        }

        const itemIdsInUse = Object.values(state.cache.queries).reduce(
          (previous, queryDetail) => [
            ...previous,
            ...asArray(queryDetail.response.data),
          ],
          [],
        );
        const expiredItems = Object.keys(state.byId).filter(
          (x) => !itemIdsInUse.includes(x),
        );
        // Delete items which are not referenced anymore in the cache.
        for (const id of expiredItems) {
          delete state.byId[id];
        }
      },
      ADD_CACHE_KEY(state, { key, queryId }) {
        state.cache.usage[key] = queryId;
      },
    },
    getters: {
      items: (state) => (queryId) => {
        if (!state.cache.queries[queryId]) {
          return [];
        }

        return state.cache.queries[queryId].response.data.map(
          (id) => state.byId[id],
        );
      },
      item: (state) => (id) => state.byId[id] || null,
      response: (state) => (queryId) => {
        if (!state.cache.queries[queryId]) {
          return null;
        }

        const response = state.cache.queries[queryId].response;
        const data = response.data;
        return {
          ...response,
          data: Array.isArray(data)
            ? data.map((id) => state.byId[id])
            : state.byId[data.id],
        };
      },
    },
    state: {
      cache: {
        usage: {},
        queries: {},
      },
      byId: {},
    },
  };
}
