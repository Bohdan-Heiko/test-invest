import { BackButton } from "@/shared/components"
import { colors } from "@/utils/constants/colors"
import { APP_FONTS } from "@/utils/constants/fonts"
import { Stack } from "expo-router"

export default function ReportLayout() {
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
          fontFamily: APP_FONTS["Inter500"],
          fontSize: 18
        },
        headerLeft: () => <BackButton />,
        headerTitle: "Повернутись назад"
      }}
    />
  )
}
