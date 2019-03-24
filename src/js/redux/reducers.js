import { REQUEST_APPS,  RECEIVE_APPS } from './actions';

function apps( state = {isFetching: false, list: [], country: "", user: "", dateFrom: "", dateTo:""}, action) {
  console.log(action.type);
  switch (action.type) {
    case REQUEST_APPS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        apps: action.apps
      });
    default:
      return state
  }
}

export default apps
