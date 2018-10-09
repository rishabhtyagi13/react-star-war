import * as types from '../actions/actionTypes';


export function getPlanetDataTypes() {
  return {type: types.GET_PLANET_DATA};
}

export function getPlanetSuccess(planetdata) {
  return {
    type: types.GET_PLANET_DATA_SUCCESS,
    payload: planetdata
  };
}

export function getPlanetFailure(error) {
  return {
    type: types.GET_PLANET_DATA_FAILURE,
    payload: error
  };
}

export function getPlanetData(url) {
  return function (dispatch) {
    dispatch(getPlanetDataTypes());
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
          dispatch(getPlanetSuccess(findresponse));
      })
      .catch((error) => {
        dispatch(getPlanetFailure(error));
        return error;
    });
  };
}



