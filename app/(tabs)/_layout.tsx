import React from "react"
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
          href: null,
          tabBarIcon: ({ color }) => <VectorExpoIcons type="Octicons" name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Аккаунт",
          href: null,
          tabBarIcon: ({ color }) => <VectorExpoIcons type="Feather" name="user" color={color} />
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Оплата",
          href: null,
          tabBarIcon: ({ color }) => (
            <VectorExpoIcons type="Feather" name="activity" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "Логін",
          href: null,
          tabBarIcon: ({ color }) => (
            <VectorExpoIcons type="FontAwesome" name="pagelines" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="(registration)/recover-password"
        options={{
          title: "Востановление пароля",
          href: null,
          tabBarIcon: ({ color }) => (
            <VectorExpoIcons type="FontAwesome" name="pagelines" color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="registration"
        options={{
          title: "Реєстрація",
          // href: null,
          tabBarIcon: ({ color }) => (
            <VectorExpoIcons type="FontAwesome" name="rebel" color={color} />
          )
        }}
      />
    </Tabs>
  )
}
