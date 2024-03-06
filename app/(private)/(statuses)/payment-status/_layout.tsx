import { colors } from "@/utils/constants/colors"
import { APP_FONTS } from "@/utils/constants/fonts"
import { Stack } from "expo-router"

export default function PaymentStatusLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.white
        },
        headerShadowVisible: false,
        headerTintColor: colors.mine_shaft,
        gestureEnabled: false,
        headerTitleStyle: {
          fontFamily: APP_FONTS["Inter500"]
        },
        headerLeft: () => <></>,
        headerTitle: ""
      }}
    />
  )
}
