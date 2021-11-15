import React, { useEffect, useState } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import OfflineScreen from "../screens/OfflineScreen/OfflineScreen";
import NAVIGATION from "./../constants/navigation";
import NetInfo from "@react-native-community/netinfo";
import ChatListScreen from "./../screens/ChatListScreen/ChatListScreen";
import ChatDetailsScreen from "./../screens/ChatDetailsScreen/ChatDetailsScreen";

const RootStack = createStackNavigator();

const MyTheme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		background: "#030304",
	},
};

const RootNavigator = () => {
	const [isConnectedToInternet, setIsConnectedToInternet] = useState(true);

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener((state) => {
			if (state.type === "none" || state.type === "unknown")
				setIsConnectedToInternet(false);
			else setIsConnectedToInternet(true);
			// console.log("offline connection change")
		});

		return () => unsubscribe();
	}, []);
	return (
		<NavigationContainer>
			<RootStack.Navigator
				screenOptions={{
					headerShown: false,
					...TransitionPresets.SlideFromRightIOS,
				}}
			>
				{isConnectedToInternet ? (
					<RootStack.Group
						screenOptions={{
							...TransitionPresets.FadeFromBottomAndroid,
						}}
					>
						<RootStack.Screen
							name={NAVIGATION.CHAT_LIST_SCREEN}
							component={ChatListScreen}
						/>
						<RootStack.Screen
							name={NAVIGATION.CHAT_DETAILS_SCREEN}
							component={ChatDetailsScreen}
						/>
					</RootStack.Group>
				) : (
					<RootStack.Screen
						name={NAVIGATION.OFFLINE_SCREEN}
						component={OfflineScreen}
					/>
				)}
			</RootStack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigator;
