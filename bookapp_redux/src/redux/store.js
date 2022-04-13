import { createStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import reduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import BooksReducer from './reducer'

const reducers = {
  appData: BooksReducer
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['appData'],
}

const configPersist = persistReducer(persistConfig, combineReducers(reducers))

// const AllReducers = combineReducers(Reducers);

export const store = createStore(configPersist, applyMiddleware(ReduxThunk, reduxLogger));
export const Persistor = persistStore(store) 