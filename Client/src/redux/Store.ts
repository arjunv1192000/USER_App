import { configureStore,combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { userSlice } from './reducer/userSlice';


const persistConfig = {
    key: 'root',
    storage,
  };
  
  const rootReducer = combineReducers({
    user: userSlice.reducer,
    
  
  
    
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = configureStore({
    reducer: persistedReducer,
  });
  
  export default store;