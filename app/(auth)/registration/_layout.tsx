import { Stack } from "expo-router"
import Colors, { colors } from "@/utils/constants/colors"
import { BackButton } from "@/shared/components"
import { APP_FONTS } from "@/utils/constants/fonts"

export default function RegistrationLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.white
        },
        headerTintColor: colors.mine_shaft,
        gestureEnabled: false,
        headerTitleStyle: {
          fontFamily: APP_FONTS["Inter500"]
        },
        headerLeft: () => <BackButton />,
        headerTitle: "Реєстрація"
      }}
    />
  )
}
