import React from "react";
import Routes from "./src/routes";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_500Medium,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";
export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_500Medium,
    RobotoMono_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return <Routes />;
}
