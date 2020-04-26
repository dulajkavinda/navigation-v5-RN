import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ContactsList from "../screens/ContactsList";
import ContactDetails from "../screens/ContactDetails";

import ActionsList from "../screens/ActionsList";
import ActionDetails from "../screens/ActionDetails";

import Settings from "../screens/Settings";

import { Ionicons } from "@expo/vector-icons";

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
  <ContactsStack.Navigator mode="card" headerMode="screen">
    <ContactsStack.Screen
      name="ContactsList"
      component={ContactsList}
      options={{ headerTitle: "Contacts" }}
    />
    <ContactsStack.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={({ route }) => {
        return {
          headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
        };
      }}
    />
  </ContactsStack.Navigator>
);

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
  <ActionsStack.Navigator>
    <ActionsStack.Screen name="ActionsList" component={ActionsList} />
    <ActionsStack.Screen name="ActionDetails" component={ActionDetails} />
  </ActionsStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Contacts") {
          iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
        } else if (route.name === "Actions") {
          iconName = focused ? "ios-list-box" : "ios-list";
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "white",
      inactiveTintColor: "black",
      activeBackgroundColor: "tomato",
    }}
  >
    <AppTabs.Screen name="Contacts" component={ContactsStackScreen} />
    <AppTabs.Screen name="Actions" component={ActionsStackScreen} />
  </AppTabs.Navigator>
);

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator drawerType="back">
    <AppDrawer.Screen
      name="Tabs"
      component={AppTabsScreen}
      options={{ drawerLabel: "Home" }}
    />
    <AppDrawer.Screen name="Settings" component={Settings} />
  </AppDrawer.Navigator>
);

export default () => (
  <NavigationContainer>
    <AppDrawerScreen />
  </NavigationContainer>
);
