import { Tabs } from "expo-router"

import Colors from "@/utils/constants/colors"
import { VectorExpoIcons } from "@/shared/ui"
import { LanguageButton } from "@/shared/components"

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["light"].tint
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Головна",
          lazy: true,
          headerShadowVisible: false,
          headerRightContainerStyle: { paddingRight: 10 },
          headerRight: () => <LanguageButton />,
          tabBarIcon: ({ color }) => (
            <VectorExpoIcons type="Octicons" name="home" color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Аккаунт",
          headerShadowVisible: false,
          lazy: true,
          href: "/account",
          tabBarIcon: ({ color }) => (
            <VectorExpoIcons type="Feather" name="user" color={color} />
          )
        }}
      />
    </Tabs>
  )
}
