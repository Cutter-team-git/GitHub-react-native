import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/homeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>GitHub-fullStack-react-native</Text>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
