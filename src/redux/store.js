import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import postsSlice from './slices/postsSlice';

const PERSIST_ACTION_TYPE = 'persist/PERSIST';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  posts: postsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST_ACTION_TYPE],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
