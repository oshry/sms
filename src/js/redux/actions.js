
export const REQUEST_APPS = 'REQUEST_APPS'
export const RECEIVE_APPS = 'RECEIVE_APPS'
const axios = require('axios');

function requestApps() {
  console.log('requestApps');
  return {
    type: REQUEST_APPS
  }
}

function receiveApps(json) {
  console.log('receiveApps');
  return {
    type: RECEIVE_APPS,
    apps: json
  }
}

function fetchApps() {
  return dispatch => {
    let user = document.getElementById("user");
    let country = document.getElementById("country");
    let dateFrom = document.getElementById("dateFrom");
    let dateTo = document.getElementById("dateTo");

    if(user){
      user = document.getElementById("user").value;
    }
    if(country){
      country = document.getElementById("country").value;
    }
    if(dateFrom){
      dateFrom = document.getElementById("dateFrom").value;
    }else{
      dateFrom = '2016-01-01';
    }
    if(dateTo){
      dateTo = document.getElementById("dateTo").value;
    }else{
      dateTo = '2222-01-01';
    }

    dispatch(requestApps())
    return axios.get(`http://localhost:8070/api/v1/filter`, {
      params: {
        from: dateFrom,
        to: dateTo,
        cnt: country,
        uid: user
      }
    })
        .then(response => {
         return response.data
        })
        .then(json =>
        {

          dispatch(receiveApps(json))
        })
        .catch(function (error) {
          console.log('errorrrrrrrr');
        })
  }
}

function shouldFetchApps(state) {
  const apps = state.list
  if (apps.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchAppsSearch() {
  return (dispatch, getState) => {
      return dispatch(fetchApps())
  }
}

export function fetchAppsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchApps(getState())) {
      return dispatch(fetchApps())
    }
  }
}
