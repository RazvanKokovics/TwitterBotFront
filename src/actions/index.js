import {
  GET_CONFIG_REQUEST,
  GET_CONFIG_SUCCESS,
  GET_CONFIG_FAILURE,
  UPDATE_CONFIG_REQUEST,
  UPDATE_CONFIG_SUCCESS,
  UPDATE_CONFIG_FAILURE,
} from '../constants/actionTypes.js';

export const getConfig = () => ({
  type: GET_CONFIG_REQUEST,
});

export const getConfigSuccess = config => ({
  type: GET_CONFIG_SUCCESS,
  config,
});

export const getConfigFailure = error => ({
  type: GET_CONFIG_FAILURE,
  error,
});

export const updateConfig = () => ({
  type: UPDATE_CONFIG_REQUEST,
});

export const updateConfigSuccess = () => ({
  type: UPDATE_CONFIG_SUCCESS,
});

export const updateConfigFailure = error => ({
  type: UPDATE_CONFIG_FAILURE,
  error,
});
