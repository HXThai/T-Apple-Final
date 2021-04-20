const ACTION_SIGN_IN = '[SIGNIN] ACTION_SIGN_IN';
const getUser = (params) => {
  return {
    type: ACTION_SIGN_IN,
    payload: params,
  };
};

const ACTION_SIGN_IN_SUCCESS = '[SIGNIN] ACTION_SIGN_IN_SUCCESS';
const getUserSuccess = (response) => {
  return {
    type: ACTION_SIGN_IN_SUCCESS,
    payload: response,
  };
};

const ACTION_SIGN_IN_FAILD = '[SIGNIN] ACTION_SIGN_IN_FAILD';
const getUserFaild = (response) => {
  return {
    type: ACTION_SIGN_IN_FAILD,
    payload: response,
  };
};

const ACTION_SAVE_SESSION_SIGNIN = '[SIGNIN] ACTION_SAVE_SIGNIN';
const saveSessionSignIn = (response) =>{
  return {
    type: ACTION_SIGN_IN_FAILD,
    payload: response,
  };
}

export {
  ACTION_SIGN_IN,
  getUser,
  ACTION_SIGN_IN_SUCCESS,
  getUserSuccess,
  ACTION_SIGN_IN_FAILD,
  getUserFaild,
  ACTION_SAVE_SESSION_SIGNIN,
  saveSessionSignIn
};
