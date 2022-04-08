import { REGISTER } from "redux-persist";
import { GET_DATA, GET_DETAIL, LOADING, LOGIN, REFRESH, REGISTER_SUCCESS } from "./types";

const initialState = {
  user: [],
  books: [],
  bookDetail: [],
  isLogin: false,
  userRegister: false,
  isLoading: false,
  isRefresh: false
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        isLoading: false,
      };
    case REGISTER:
      return {
        ...state,
        // form: [...state.form, action.payload],
        userRegister: true,
      };
    case GET_DATA:
      return {
        ...state,
        books: action.payload,
        isLoading: false
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        userRegister: action.payload,
      }
    case GET_DETAIL:
      return {
        ...state,
        bookDetail: action.payload,
        isLoading: false
      }
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    case REFRESH:
      return {
        ...state,
        isRefresh: action.payload,
      }
      default:
        return state
  }
};

export default BooksReducer;
