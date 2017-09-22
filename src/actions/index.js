import axios from 'axios';
axios.defaults.withCredentials = true;
import jwtDecode from 'jwt-decode';

const ROOT_URL = 'http://localhost:8080';

// export const USER_REGISTERED = 'USER_REGISTERED';
// export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
// export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
// export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
// export const GET_USERS = 'GET_USERS';
// export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FETCH_PROTECTED_DATA_REQUEST = 'FETCH_PROTECTED_DATA_REQUEST';
export const RECEIVE_PROTECTED_DATA = 'RECEIVE_PROTECTED_DATA';

// export const authError = (error) => {
//   return {
//     type: AUTHENTICATION_ERROR,
//     payload: error,
//   };
// };

// export const register = (username, password, confirmPassword, history) => {
//   return (dispatch) => {
//     if (password !== confirmPassword) {
//       dispatch(authError('Passwords do not match'));
//       return;
//     }
//     axios.post(`${ROOT_URL}/users`, { username, password })
//       .then(() => {
//         dispatch({
//           type: USER_REGISTERED,
//         });
//         history.push('/signin');
//       })
//       .catch(() => {
//         dispatch(authError('Failed to register user'));
//       });
//   };
// };

// export const login = (username, password, history) => {
//   return (dispatch) => {
//     axios.post(`${ROOT_URL}/login`, { username, password })
//       .then(() => {
//         dispatch({
//           type: USER_AUTHENTICATED,
//         });
//         history.push('/users');
//       })
//       .catch(() => {
//         dispatch(authError('Incorrect email/password combo'));
//       });
//   };
// };

export const loginUserSuccess = (token) -> {
  localStorage.setItem('token', token);
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

export const loginUserFailure =

export const logout = () => {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/logout`)
      .then(() => {
        dispatch({
          type: USER_UNAUTHENTICATED,
        });
      })
      .catch(() => {
        dispatch(authError('Failed to log you out'));
      });
  };
};

export const getUsers = () => {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/restricted/users`)
      .then((response)=> {
        dispatch({
          type: GET_USERS,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(authError('Failed to fetch users'));
      });
  };
};

export const checkIfAuthenticated = () => {
  return {
    type: CHECK_IF_AUTHENTICATED
  };
};
