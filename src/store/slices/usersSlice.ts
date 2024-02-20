import { UserDataResponse } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import authSlice from "./authSlice"

const initialState = {} as UserDataResponse

const name = "user_data"

export const usersDataSlice = createSlice({
  name,
  initialState,
  reducers: {
    setUserData: (
      state: UserDataResponse,
      { payload }: PayloadAction<UserDataResponse>
    ) => {
      return (state = payload)
    },
    clearUserData: () => {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authSlice.actions.logoutUser, () => {
      return initialState
    })
  }
})

export const { setUserData, clearUserData } = usersDataSlice.actions

export default usersDataSlice
