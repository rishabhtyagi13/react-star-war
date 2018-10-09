import * as types from '../actions/actionTypes';


export function getUserDataTypes() {
  return {type: types.GET_USER_DATA};
}

export function getUserDataSuccess(userdata) {
  return {
    type: types.GET_USER_DATA_SUCCESS,
    payload: userdata
  };
}

export function getUserDataFailure(error) {
  return {
    type: types.GET_USER_DATA_FAILURE,
    payload: error
  };
}

export function getUserData(url) {
  return function (dispatch) {
    dispatch(getUserDataTypes());
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
          }
        })
      .then((findresponse) => {
          console.log("findresponse",findresponse)
          dispatch(getUserDataSuccess(findresponse));
      })
      .catch((error) => {
        dispatch(getUserDataFailure(error));
        return error;
    });
  };
}



