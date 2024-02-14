import { useMemo } from "react"

import { bindActionCreators } from "@reduxjs/toolkit"
import { loginUser, logoutUser, resetAuth } from "@/store/slices/authSlice"
import { useAppDispatch } from "@/store"

const rootActions = {
  loginUser,
  logoutUser,
  resetAuth
}

const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions
