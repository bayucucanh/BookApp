import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import reduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import reducer from "./reducer";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const configPersist = persistReducer(persistConfig, reducer)

const store = createStore(configPersist, applyMiddleware(ReduxThunk));
export const persiststor = persistStore(store)

export default store