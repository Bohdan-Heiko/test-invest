import * as Localization from "expo-localization"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { setLanguage } from "@/store/slices/i18n.slice"

import { DEFAULT_LANGUAGE } from "../constants/language"

import en from "./translations/en-US.json"
import uk from "./translations/uk-UA.json"

export type TAppLanguages = "en-US" | "uk-UA"

export const resources: Record<TAppLanguages, any> = {
  "en-US": en,
  "uk-UA": uk
}

const init = async (store: any) => {
  const { userLanguage } = store.getState().i18n
  const deviceLocale = Localization.getLocales()[0]

  const deviceLanguage = deviceLocale.languageTag
  const hasAppDeviceLanguage = Object.keys(resources).includes(deviceLanguage ?? "")

  const language =
    userLanguage || (hasAppDeviceLanguage ? deviceLanguage : DEFAULT_LANGUAGE)

  if (language) {
    store.dispatch(setLanguage(language))
  }

  return await i18n.use(initReactI18next).init({
    lng: language,
    react: { useSuspense: false },
    compatibilityJSON: "v3",
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false
    },
    initImmediate: false
  })
}

export default init
