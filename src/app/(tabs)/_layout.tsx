import React from "react";
import { Link, Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { Pressable } from "react-native";

export default function Layout() {
  function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
  }) {
    return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.background,
        tabBarInactiveTintColor: "gainsboro",
        tabBarStyle: {
          backgroundColor: Colors.light.tint,
        },
      }}
    >
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="cutlery" color={color} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors.light.text}
                    // color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          headerShown: true,
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />

      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
}
