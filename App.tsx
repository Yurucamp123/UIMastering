import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import PaymentScreen from "./src/screens/PaymentScreen";
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = () =>
    Font.loadAsync({
      IBM_Plex_Sans_Regular: require("./src/assets/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Regular.ttf"),
      IBM_Plex_Sans_Semibold: require("./src/assets/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-SemiBold.ttf"),
    });

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.warn(error)}
      />
    );
  }
  return (
    <SafeAreaProvider>
      <PaymentScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
