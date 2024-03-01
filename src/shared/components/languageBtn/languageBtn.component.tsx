import { Pressable, View } from "react-native"

import useActions from "@/hooks/useActions"
import { Title } from "@/shared/ui"
import { useAppSelector } from "@/store"
import { colors } from "@/utils/constants/colors"

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
        <Title style={{ fontSize: 16, color: colors.white }}>{userLanguage?.label}</Title>
      </View>
    </Pressable>
  )
}
