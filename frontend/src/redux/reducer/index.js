import {
  POST_TRAVEL,
  GET_ALL_TRAVELS,
  POST_CLIENT,
  DELETE_TRAVEL,
  UPDATE_TRAVEL,
  GET_ALL_CLIENTS,
} from '../actions';

const initialState = {
  allTravels: [],
  newTravel: {},
  newClient: {},
  travel: {},
  allClients: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_TRAVELS:
      return {
        ...state,
        allTravels: action.payload,
      };
    case POST_TRAVEL:
      return {
        ...state,
      };
    case POST_CLIENT:
      return {
        ...state,
      };
    case GET_ALL_CLIENTS:
      return {
        ...state,
        allClients: action.payload,
      };
    case DELETE_TRAVEL:
      return {
        ...state,
        travel: action.payload,
      };

    case UPDATE_TRAVEL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
