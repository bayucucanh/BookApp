const initialState = {
  user: [],
  books: [],
  bookDetail: [],
  isLogin: false,
  isLoading: false,
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
        form: [...state.form, action.payload],
      };
    default:
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.payload,
        isLoading: false
      }
  }
};

export default BooksReducer;
