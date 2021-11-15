import { mapState, mapGetters, mapActions } from 'vuex'

/**
 * Auth Helpers
 */
// export const authComputed = {
//   ...mapState('auth', {
//     userCurrent: (state) => state.userCurrent,
//   }),
//   ...mapGetters('auth', [
//     'loggedIn',
//     'activated',
//   ]),
// }

// export const authMethods = mapActions('auth', [
//   // 'login',
//   'logout',
//   'validate',
//   'invalidate',
//   'emailLoginSend',
//   'verifyEmailToken',
// ])

/**
 * User Setting Helpers
 */
export const userSettingsComputed = {
  ...mapState('userSettings', {
    userSettings: (state) => state.userSettings,
  }),
  ...mapGetters('userSettings', [
    'getUserSettingValueByKey',
    'getUserSettingByKey',
  ]),
}

export const userSettingsMethods = mapActions('userSettings', [
  'updateUserSettingByKey',
])
