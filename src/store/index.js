import { createStore } from 'vuex'
import * as modules from './modules'

import packageJson from '@/../package.json'
import { dispatchActionForAllModules } from '@/utils'

const plugins = []

export const store = createStore({
  modules,
  state: {
    // isMobile: false,
    // windowHeight: 450,
    // windowWidth: 450,
    version: packageJson.version,
  },
  mutations: {},
  actions: {},
  plugins,
  strict: process.env.NODE_ENV !== 'production',
})

dispatchActionForAllModules('init')
