import { isRejectedWithValue, Middleware } from "@reduxjs/toolkit"

import { logoutUser } from "../slices/authSlice"

/* eslint-disable */
export const unauthenticatedMiddleware: Middleware<Record<string, unknown>, any> =
  ({ dispatch }) =>
  (next) =>
  (action: any) => {
    if (isRejectedWithValue(action) && action.payload.status === 401) {            
      dispatch(logoutUser())
    }
    return next(action)
  }
