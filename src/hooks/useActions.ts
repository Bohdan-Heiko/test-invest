import { useMemo } from "react"

import { useAppDispatch } from "@/store"
import { loginUser, logoutUser } from "@/store/slices/authSlice"
import { bindActionCreators } from "@reduxjs/toolkit"

const rootActions = {
  loginUser,
  logoutUser
}

const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions
