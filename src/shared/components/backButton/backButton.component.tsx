import { Pressable } from "react-native"
import { router } from "expo-router"

import { VectorExpoIcons } from "@/shared/ui"

export const BackButton = ({ size = 25 }: { size?: number }) => {
  return (
    <Pressable
      onPress={router.back}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.6 : 1,
          marginRight: 10
        }
      ]}
    >
      <VectorExpoIcons type={"AntDesign"} name={"arrowleft"} size={size} />
    </Pressable>
  )
}
