import * as types from '../actions/actionTypes';

let initialState = {
  planetdata:[],
  error:false
};

export default function getUserInfo(state=initialState, action) {
  console.log(action)
  switch(action.type) {
    case types.GET_PLANET_DATA:
      return {
        planetdata:[],
        error: false
      };
    case types.GET_PLANET_DATA_SUCCESS:
      return {
        planetdata: action.payload,
        error: false
      };
    case types.GET_PLANET_DATA_FAILURE:
      return {
        planetdata: [],
        error: true
      };
    default:
      return state;
  }
}
