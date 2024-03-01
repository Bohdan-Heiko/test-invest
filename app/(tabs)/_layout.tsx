import { Tabs } from "expo-router"

import Colors, { colors } from "@/utils/constants/colors"
import { Title, VectorExpoIcons } from "@/shared/ui"
import { Pressable, Text, View } from "react-native"

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
          headerRight: () => (
            <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}>
              <View
                style={{
                  backgroundColor: colors.blue,
                  borderRadius: 15,
                  paddingHorizontal: 8,
                  paddingVertical: 4
                }}
              >
                <Title style={{ fontSize: 16, color: colors.white }}>Ua</Title>
              </View>
            </Pressable>
          ),
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
