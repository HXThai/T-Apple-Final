import * as actions from '../Action/signInAction';

const initialUserState = {
  isErrorUser: false,
  responseUser: null,
  loadingUser: false,
  isSignIn:false,
  msgUser: null,
};

const signInReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actions.ACTION_SIGN_IN:
      return {
        ...state,
        isErrorUser: false,
        responseUser: null,
        loadingUser: true,
        isSignIn:true,
        msgUser: null,
      };

    case actions.ACTION_SIGN_IN_SUCCESS:
      return {
        ...state,
        isErrorUser: false,
        responseUser: action.payload,
        loadingUser: false,
        isSignIn:true,
        msgUser: null,
      };

    case actions.ACTION_SIGN_IN_FAILD:
      return {
        ...state,
        isErrorUser: true,
        responseUser: null,
        loadingUser: false,
        isSignIn:true,
        msgUser: action.payload,
      };
      case actions.ACTION_SAVE_SESSION_SIGNIN:
        return {
          ...state,
          isErrorUser: true,
          responseUser: null,
          loadingUser: false,
          isSignIn:true,
          msgUser: action.payload,
        };
    default:
      return state;
  }
};

export default signInReducer;
