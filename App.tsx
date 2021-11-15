import React from "react";
import { extendTheme, NativeBaseProvider, StatusBar } from "native-base";
import RootNavigator from "./src/navigation";
import { LogBox } from "react-native";

// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: "dark",
};

// extend the theme
const customTheme = extendTheme({ config });

export default function App() {
	LogBox.ignoreAllLogs();

	return (
		<NativeBaseProvider theme={customTheme}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent={true}
			/>
			<RootNavigator />
		</NativeBaseProvider>
	);
}
