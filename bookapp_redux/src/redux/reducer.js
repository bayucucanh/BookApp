const initialState = {
  user: [],
  books: [],
  bookDetail: [],
  isLogin: false,
  isLoading: false,
  userRegister: false,
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
        user: action.payload,
        isLoading: false,
      };
    case 'REGISTER':
      return {
        ...state,
        // form: [...state.form, action.payload],
        userRegister: true,
      };
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
        isLoading: false
      }
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        userRegister: action.payload,
      }
    case 'GET_DETAIL':
      return {
        ...state,
        bookDetail: action.payload,
        isLoading: false
      }
      default:
        return state
  }
};

export default BooksReducer;
