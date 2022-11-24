import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedcontactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedcontactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
