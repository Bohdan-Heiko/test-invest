import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { persistReducer, persistStore } from "redux-persist"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import { unauthenticatedMiddleware } from "./middlewares/unauthenticated"
import { mainApi } from "./services/mainApi"
import authSlice from "./slices/authSlice"
import i18nSlice from "./slices/i18n.slice"
import usersDataSlice from "./slices/usersSlice"

const persistConfig = {
  key: "bober-invest",
  storage: AsyncStorage,
  whitelist: [authSlice.name, usersDataSlice.name, i18nSlice.name]
}

const reducers = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer,
  [authSlice.name]: authSlice.reducer,
  [i18nSlice.name]: i18nSlice.reducer,
  [usersDataSlice.name]: usersDataSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      // }
    }).concat(unauthenticatedMiddleware, mainApi.middleware)
})

setupListeners(store.dispatch)

export default store
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
