import { Pressable } from "react-native"
import { AllRoutes, router } from "expo-router"

import { VectorExpoIcons } from "@/shared/ui"

export const BackButton = ({ size = 25, href }: { size?: number; href?: AllRoutes }) => {
  return (
    <Pressable
      onPress={() => (href ? router.replace(href as never) : router.back())}
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
