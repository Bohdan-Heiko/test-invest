// import { TAppLanguages } from "@/util/i18n";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type TAppLanguages = "en_US" | "uk_UA"

const initialState: { userLanguage: TAppLanguages | null; isOpen: boolean } = {
  userLanguage: null,
  isOpen: false
}

export const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<TAppLanguages>) => {
      state.userLanguage = payload
    },
    setIsOpenLanguageDropDown: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export const { setLanguage, setIsOpenLanguageDropDown } = i18nSlice.actions

export default i18nSlice
