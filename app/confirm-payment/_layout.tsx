import { BackButton } from "@/shared/components"
import { colors } from "@/utils/constants/colors"
import { Stack } from "expo-router"

export default function ConfirmPaymentLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
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
