import { Middleware, isRejectedWithValue } from "@reduxjs/toolkit"
import { logoutUser } from "../slices/authSlice"

export const unauthenticatedMiddleware: Middleware<{}, any> =
  ({ dispatch }) =>
  (next) =>
  (action: any) => {
    if (
      isRejectedWithValue(action) &&
      action.payload.status === 401
    ) {
      dispatch(logoutUser())
    }
    return next(action)
  }
