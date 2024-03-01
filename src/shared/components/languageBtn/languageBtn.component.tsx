import { colors } from "@/utils/constants/colors"
import { Title } from "@/shared/ui"
import { Pressable, View } from "react-native"
import useActions from "@/hooks/useActions"

export const LanguageButton = () => {
  const { setIsOpenLanguageDropDown } = useActions()
  return (
    <Pressable
      onPress={() => setIsOpenLanguageDropDown()}
      style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
    >
      <View
        style={{
          // position: "relative",
          backgroundColor: colors.blue,
          borderRadius: 15,
          paddingHorizontal: 8,
          paddingVertical: 4
        }}
      >
        <Title style={{ fontSize: 16, color: colors.white }}>Ua</Title>
      </View>
    </Pressable>
  )
}
