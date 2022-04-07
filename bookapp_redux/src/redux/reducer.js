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
        user: action.payload,
        isLogin: true,
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
      default:
        return state
  }
};

export default BooksReducer;
