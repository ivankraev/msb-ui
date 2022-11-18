import store from '@msp/redux/store'

import { actions } from '@msp/features/user/userSlice'
import { userApiSlice } from '../api/userApiSlice'

const testState = {
  user: {
    userInfo: {
      name: 'Test name',
      sub: 'test',
      email: 'test@email',
      zoneinfo: 'test',
    },
    token: 'testToken',
  },
}

describe('UserSlice test', () => {
  it('Test Login action', () => {
    store.dispatch(actions.login(testState.user.token))
    expect(store.getState().user.token).toEqual(testState.user.token)
  })
  it('Test update user action', () => {
    store.dispatch(actions.setUserInfo(testState.user.userInfo))
    expect(store.getState().user?.userInfo?.name).toEqual(testState.user.userInfo.name)
  })
  it('Test storage to clean when logout request started', () => {
    store.dispatch(userApiSlice.endpoints.logout.initiate())
    expect(store.getState().user?.userInfo).toEqual(null)
    expect(store.getState().user?.token).toEqual(null)
  })
})
