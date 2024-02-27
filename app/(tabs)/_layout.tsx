import { Tabs } from "expo-router"

import Colors from "@/utils/constants/colors"
import { VectorExpoIcons } from "@/shared/ui"

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
          headerRightContainerStyle: { paddingHorizontal: 20 },
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
          href: "/signin",
          tabBarIcon: ({ color }) => (
            <VectorExpoIcons type="Feather" name="user" color={color} />
          )
        }}
      />
    </Tabs>
  )
}
