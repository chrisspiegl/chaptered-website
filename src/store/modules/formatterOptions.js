import merge from 'deepmerge'

function getSavedState(key) {
  const optionsDefault = {
    sortMarkers: 'timecode.in',
    sortMarkersOrder: 'asc',
    timeTemplate: 'HoursOptionalAndLeadingZeroOnAll',
    includeMilliseconds: 'false',
    sectionMarkers: 'type',
    sectionMarkersOrder: 'asc',
    lineTemplate: '{timeIn} : {type} : {title}',
  }
  const value = JSON.parse(window.localStorage.getItem(key)) || {}
  return merge(optionsDefault, value)
}

function saveState(key, state) {
  if (state) {
    return window.localStorage.setItem(key, JSON.stringify(state))
  }

  return window.localStorage.removeItem(key)
}

export const namespaced = true

export const state = {
  formatterOptions: getSavedState('chapteredFormatterOptions'),
}

export const actions = {
  init({ commit, state }) {
    commit('SET_FORMATTER_OPTIONS', state.formatterOptions)
  },
}

export const mutations = {
  SET_FORMATTER_OPTIONS(state, newValue) {
    state.formatterOptions = newValue
    saveState('chapteredFormatterOptions', state.formatterOptions)
  },
}
