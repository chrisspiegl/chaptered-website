import * as nightwind from 'nightwind/helper'

function getSavedState(key) {
  return window.localStorage.getItem(key)
}

function saveState(key, state) {
  if (state) {
    return window.localStorage.setItem(key, state)
  }

  return window.localStorage.removeItem(key)
}

export const namespaced = true

export const state = {
  darkMode: getSavedState('darkMode'),
}

export const actions = {
  init({ commit, state }) {
    nightwind.addNightTransitions()
    let currentState = state.darkMode
    if (!['light', 'dark'].includes(currentState)) {
      currentState = nightwind.checkNightMode() ? 'dark' : 'light'
    }

    commit('SET_DARK_MODE', currentState)
  },
}

export const mutations = {
  SET_DARK_MODE(state, newValue) {
    if (['light', 'dark'].includes(newValue)) {
      state.darkMode = newValue
    } else {
      state.darkMode = (newValue) ? 'dark' : 'light'
    }

    if (state.darkMode === 'dark' && !document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark')
    } else if (state.darkMode === 'light') {
      document.documentElement.classList.remove('dark')
    }

    saveState('darkMode', state.darkMode)
  },
}
