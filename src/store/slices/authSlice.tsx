import { LoginResponse } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  isAuthenticated: false,
  token: ""
  // role: ""
}

const name = "bober_auth"

export const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<LoginResponse>) => {
      state.isAuthenticated = true
      state.token = payload.token
    },
    logoutUser: () => {
      return { ...initialState }
    }
  }
})

export const { loginUser, logoutUser } = authSlice.actions

export default authSlice
