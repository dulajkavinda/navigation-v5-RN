import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";

import ContactsList from "../screens/ContactsList";
import ContactDetails from "../screens/ContactDetails";

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
  <ContactsStack.Navigator>
    <ContactsStack.Screen
      name="ContactsList"
      component={ContactsList}
      options={{ headerTitle: "Contacts" }}
    />
    <ContactsStack.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={{ headerTitle: "Contact Details" }}
    />
  </ContactsStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ContactsStackScreen />
  </NavigationContainer>
);
