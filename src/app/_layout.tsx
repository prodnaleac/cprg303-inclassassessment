// root layout, stack navigator so i can go from the sign up form to the confirmation screen later

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* sign up form is the first screen that displays */}
      <Stack.Screen name="index" options={{ title: "Sign Up" }} />
      {/* confirmation screen after the form is submitted */}
      <Stack.Screen name="confirmation" options={{ title: "Success" }} />
    </Stack>
  );
}
