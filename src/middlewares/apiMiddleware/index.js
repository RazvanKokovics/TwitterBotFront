import {
  UPDATE_CONFIG_REQUEST,
  GET_CONFIG_REQUEST,
} from '../../constants/actionTypes.js';
import { query } from '../../middlewares/query';
import { CONFIG_URL } from '../../middlewares/apiMiddleware/config';
import {
  getConfigSuccess,
  getConfigFailure,
  updateConfigSuccess,
  updateConfigFailure,
} from '../../actions';

const apiMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case UPDATE_CONFIG_REQUEST: {
      query('put', CONFIG_URL, action.data).then(
        (response) => {
          next(updateConfigSuccess(response.data));
        },
        (error) => {
          next(updateConfigFailure(error.toString()));
        },
      );
      break;
    }

    case GET_CONFIG_REQUEST: {
      query('get', CONFIG_URL).then(
        (response) => {
          next(getConfigSuccess(response.data));
        },
        (error) => {
          next(getConfigFailure(error.toString()));
        },
      );
      break;
    }

    default:
      next(action);
  }
};

export default apiMiddleware;