import { VectorExpoIcons } from "@/shared/ui"
import { router } from "expo-router"
import { Pressable } from "react-native"

export const BackButton = ({ size = 25 }: { size?: number }) => {
  return (
    <Pressable
      onPress={router.back}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.6 : 1
        }
      ]}
    >
      <VectorExpoIcons type={"AntDesign"} name={"arrowleft"} size={size} />
    </Pressable>
  )
}
