// Confirmation screen

import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function ConfirmationScreen() {
  // grabbing the first name passed from the sign up form
  const { firstName } = useLocalSearchParams<{ firstName: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Success!</Text>
      <Text style={styles.message}>Account created for {firstName}!</Text>
    </View>
  );
}

// centered so the success message stands out
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#16a34a",
    marginBottom: 12,
  },
  message: { fontSize: 18, textAlign: "center" },
});
