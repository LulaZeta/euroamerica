import { POST_TRAVEL, GET_ALL_TRAVELS } from '../actions';

const initialState = {
  allTravels: [],
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
    default:
      return state;
  }
}
