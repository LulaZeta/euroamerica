import axios from 'axios';
export const POST_TRAVEL = 'POST_TRAVEL';
export const POST_CLIENT = 'POST_CLIENT';
export const GET_ALL_TRAVELS = 'GET_ALL_TRAVELS';
export const DELETE_TRAVEL = 'DELETE_TRAVEL';

const postClient = (payload) => async (dispach) => {
  try {
    const data = await axios.post('/client/newclient', payload);
    dispach({ type: POST_CLIENT, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

const getAllTravels = () => async (dispatch) => {
  try {
    const response = await axios.get(`/travels`);
    return dispatch({
      type: GET_ALL_TRAVELS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err.response.data);
  }
};

const postTravel = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('/travel/', payload);
    dispatch({
      type: POST_TRAVEL,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTravel = (id) => async (dispatch) => {
  try {
    const response = await axios.delete('/travel/' + id);
    return dispatch({
      type: DELETE_TRAVEL,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export { postTravel, postClient, getAllTravels, deleteTravel };
