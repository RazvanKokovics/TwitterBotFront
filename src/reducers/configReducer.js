import {
  GET_CONFIG_SUCCESS,
  GET_CONFIG_FAILURE,
  UPDATE_CONFIG_SUCCESS,
  UPDATE_CONFIG_FAILURE,
} from '../constants/actionTypes.js';

const initialConfigState = {
  data: null,
  error: null,
};

export const configReducer = (state = initialConfigState, action) => {
  switch (action.type) {
    case GET_CONFIG_SUCCESS:
      return {
        ...state,
        data: action.data,
      };

    case GET_CONFIG_FAILURE:
      return {
        ...state,
        data: null,
        error: action.data,
      };

    case UPDATE_CONFIG_SUCCESS:
      return {
        ...state,
        data: action.data,
      };

    case UPDATE_CONFIG_FAILURE:
      return {
        ...state,
        data: null,
        error: action.data,
      };

    default:
      return state;
  }
};
