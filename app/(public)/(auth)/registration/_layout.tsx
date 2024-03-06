import { useTranslation } from "react-i18next"
import { Stack } from "expo-router"
import { colors } from "@/utils/constants/colors"
import { BackButton } from "@/shared/components"
import { APP_FONTS } from "@/utils/constants/fonts"

export default function RegistrationLayout() {
  const { t } = useTranslation("headers")

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
        headerTitle: t("Реєстрація")
      }}
    />
  )
}
