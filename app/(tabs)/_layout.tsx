import React from "react";
import { FontAwesome, Feather, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import Colors from "@/constants/colors";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function FeatherBarIcon(props: {
  name: React.ComponentProps<typeof Feather>["name"];
  color: string;
}) {
  return <Feather size={28} style={{ marginBottom: -3 }} {...props} />;
}

function OcticonsBarIcon(props: {
  name: React.ComponentProps<typeof Octicons>["name"];
  color: string;
}) {
  return <Octicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Головна",
          tabBarIcon: ({ color }) => <OcticonsBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Аккаунт",
          tabBarIcon: ({ color }) => <FeatherBarIcon name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "Логін",
          href: null,
          tabBarIcon: ({ color }) => <TabBarIcon name="pagelines" color={color} />,
        }}
      />
      <Tabs.Screen
        name="registration"
        options={{
          title: "Реєстрація",
          href: null,
          tabBarIcon: ({ color }) => <TabBarIcon name="rebel" color={color} />,
        }}
      />
    </Tabs>
  );
}
