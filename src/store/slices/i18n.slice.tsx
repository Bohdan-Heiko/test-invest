import { TLanguage } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: { userLanguage: TLanguage | null; isOpen: boolean } = {
  userLanguage: { label: "Uk", value: "uk_UA" },
  isOpen: false
}

export const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<TLanguage>) => {
      state.userLanguage = payload
    },
    setIsOpenLanguageDropDown: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { setLanguage, setIsOpenLanguageDropDown } = i18nSlice.actions

export default i18nSlice
