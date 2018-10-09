import * as types from '../actions/actionTypes';


export function logoutUserAction() {
  return {type: types.LOGOUT_USER};
}