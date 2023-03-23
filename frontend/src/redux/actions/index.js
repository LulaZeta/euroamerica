import axios from 'axios';
export const POST_TRAVEL = 'POST_TRAVEL';
export const POST_CLIENT = 'POST_CLIENT';
export const GET_ALL_TRAVELS = 'GET_ALL_TRAVELS';
export const DELETE_TRAVEL = 'DELETE_TRAVEL';
export const UPDATE_TRAVEL = 'UPDATE_TRAVEL';
export const GET_ALL_CLIENTS = 'GET_ALL_CLIENTS';

const postClient = (payload) => async (dispach) => {
  try {
    const data = await axios.post('/client/newclient', payload);
    dispach({ type: POST_CLIENT, payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
const getAllClients = () => async (dispatch) => {
  try {
    const response = await axios.get(`/clients`);
    return dispatch({
      type: GET_ALL_CLIENTS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err.response.data);
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

const updateTravel = (payload) => async (dispatch) => {
  console.log(payload);
  try {
    const response = await axios.put(`/travel/${payload.id}`, payload);
    return dispatch({
      type: UPDATE_TRAVEL,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  postTravel,
  postClient,
  getAllTravels,
  deleteTravel,
  updateTravel,
  getAllClients,
};
