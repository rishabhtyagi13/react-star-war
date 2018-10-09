import * as types from '../actions/actionTypes';

let initialState = {
  userdata:[],
  error:false
};

export default function getUserInfo(state=initialState, action) {
  console.log(action)
  switch(action.type) {
    case types.GET_USER_DATA:
      return {
        userdata:[],
        error: false
      };
    case types.GET_USER_DATA_SUCCESS:
      return {
        userdata: action.payload,
        error: false
      };
    case types.GET_USER_DATA_FAILURE:
      return {
        userdata: [],
        error: true
      };
    case types.LOGOUT_USER:
      return {
        userdata: [],
        error: false
      };
    default:
      return state;
  }
}
