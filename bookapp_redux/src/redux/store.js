import { createStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import reduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import BooksReducer from './reducer'

const Reducers = {
  appData: BooksReducer
}

persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const AllReducers = combineReducers(Reducers);

export const store = createStore(AllReducers, applyMiddleware(ReduxThunk, reduxLogger));

export default store