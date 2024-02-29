import { colors } from "@/utils/constants/colors"
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
          fontFamily: "Inter500"
        },
        headerLeft: () => <></>,
        headerTitle: ""
      }}
    />
  )
}
