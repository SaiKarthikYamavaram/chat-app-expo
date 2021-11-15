import {
	AddIcon,
	Box,
	HStack,
	Pressable,
	useColorModeValue,
} from "native-base";
import React from "react";
import { StatusBar } from "react-native";
import BorderBottom from "../BorderBottom/BorderBottom";

interface AppheaderAndroidProps {
	title?: string;
}

const AppHeaderAndroid = (props: AppheaderAndroidProps) => {
	const { title = "Chat" } = props;

	const statusBarHeight = StatusBar.currentHeight;
	return (
		<>
			<HStack
				width="full"
				justifyContent="space-between"
				height="24"
				alignItems="center"
				paddingX="4"
				paddingTop={statusBarHeight}
				bg={useColorModeValue("warmGray.50", "#14141a")}
			>
				<Box
					_text={{
						fontSize: "2xl",
						fontWeight: "bold",
						letterSpacing: "xl",
					}}
				>
					{title}
				</Box>
			</HStack>
			<BorderBottom height="0.71" width="full" />
		</>
	);
};

export default AppHeaderAndroid;
