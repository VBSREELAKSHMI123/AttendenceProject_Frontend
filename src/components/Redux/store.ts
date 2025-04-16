import {configureStore} from '@reduxjs/toolkit';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import LoginReducer from './LoginSlice/login';

const configureLoginPersist = {
    key:"login",
    storage
}

const persistLoginReducer = persistReducer(configureLoginPersist,LoginReducer)

export const store = configureStore({
    reducer:{
        loginState:persistLoginReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export const persist = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
