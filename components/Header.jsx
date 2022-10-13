import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movie App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "darkblue",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
