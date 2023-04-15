import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import AuthProvider, { useAuth } from "./pages/AuthContext";

import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import BiletAra from "./pages/BiletAra/biletAra";
import SeferSec from "./pages/SeferSec/seferSec";
import SeferDetay from "./pages/SeferDetay/seferDetay";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [user] = useAuth();

  if (!user) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#0D1B2A" },
        headerTintColor: "#E0E1DD",
        headerTitleStyle: {
          fontWeight: "400",
        },
      }}
    >
      <Stack.Screen name="Bilet Ara" component={BiletAra} />
      <Stack.Screen name="Sefer Sec" component={SeferSec} />
      <Stack.Screen name="Sefer Detay" component={SeferDetay} />
    </Stack.Navigator>
  );
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primaryColor: "#0D1B2A",
    backgroundColor: "#1B263B",
    secondColor: "#415A77",
    threeColor: "#778DA9",
    textColor: "#E0E1DD",
    background: "#415A77",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
