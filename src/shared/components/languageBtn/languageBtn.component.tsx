import { Pressable, View } from "react-native"

import useActions from "@/hooks/useActions"
import { Title } from "@/shared/ui"
import { useAppSelector } from "@/store"
import { colors } from "@/utils/constants/colors"
import { DEFAULT_LANGUAGE, LANGUAGE_LABELS } from "@/utils/constants/language"

export const LanguageButton = () => {
  const { setIsOpenLanguageDropDown } = useActions()
  const { userLanguage } = useAppSelector((state) => state.i18n)
  return (
    <Pressable
      onPress={() => setIsOpenLanguageDropDown()}
      style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
    >
      <View
        style={{
          backgroundColor: colors.blue,
          borderRadius: 15,
          paddingHorizontal: 8,
          paddingVertical: 4
        }}
      >
        <Title style={{ fontSize: 16, color: colors.white }}>
          {LANGUAGE_LABELS[userLanguage ?? DEFAULT_LANGUAGE]}
        </Title>
      </View>
    </Pressable>
  )
}
