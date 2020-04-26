import React from "react";
import { SafeAreaView, Button } from "react-native";

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        title="Sing Up"
        onPress={() => {
          navigation.push("SignUp");
        }}
      />
    </SafeAreaView>
  );
};
