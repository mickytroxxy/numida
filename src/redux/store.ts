import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import ConfirmDialog from './slices/ConfirmDialog';
import fetchingState from './slices/fetchingState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import modalState from './slices/modalState';

const rootReducer = combineReducers({
  ConfirmDialog,fetchingState,modalState
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);