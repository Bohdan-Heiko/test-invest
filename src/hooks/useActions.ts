import { useMemo } from "react"

import { useAppDispatch } from "@/store"
import { loginUser, logoutUser } from "@/store/slices/authSlice"
import { clearUserData, setUserData } from "@/store/slices/usersSlice"
import { bindActionCreators } from "@reduxjs/toolkit"
import { setLanguage, setIsOpenLanguageDropDown } from "@/store/slices/i18n.slice"

const rootActions = {
  loginUser,
  logoutUser,
  setUserData,
  clearUserData,
  setLanguage,
  setIsOpenLanguageDropDown
}

const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useActions
