import React from "react";
import { SafeAreaView, Button } from "react-native";

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        title="Toggle Me"
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </SafeAreaView>
  );
};
