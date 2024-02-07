import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import Colors from "@/constants/colors";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["light"].tint,
      }}
    >
       <Tabs.Screen
        name="main"
        options={{
          title: "Головна",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Логін",
          tabBarIcon: ({ color }) => <TabBarIcon name="pagelines" color={color} />,
        }}
      />
      <Tabs.Screen
        name="registration"
        options={{
          title: "Реєстрація",
          tabBarIcon: ({ color }) => <TabBarIcon name="rebel" color={color} />,
        }}
      />
    </Tabs>
  );
}
