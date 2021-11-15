import React, { useRef, useState } from "react";
import {
	Avatar,
	Box,
	HStack,
	Pressable,
	VStack,
	useColorModeValue,
} from "native-base";
import BorderBottom from "../BorderBottom/BorderBottom";

interface groupItemProps {
	imageURI: String;
	name: String;
	decription: String;
	onPress: () => void;
}

const GroupItem = (props: groupItemProps) => {
	const { imageURI, name, decription, onPress } = props;
	return (
		<Box width="full" bg={useColorModeValue("#4d4b55", "#030304")}>
			<Pressable
				onPress={onPress}
				android_ripple={{ color: "#cccccc", borderless: true }}
				android_disableSound={false}
			>
				<HStack
					width="full"
					space={4}
					paddingX="4"
					paddingY="4"
					alignItems="center"
				>
					<Box justifyContent="center">
						<Avatar
							alignSelf="center"
							bg="amber.500"
							size="lg"
							_text={{
								fontWeight: "bold",
								textTransform: "uppercase",
								color: "#ffffff",
							}}
							// @ts-ignore
							source={{
								uri: imageURI,
							}}
						>
							{name.slice(0, 2)}
						</Avatar>
					</Box>
					<VStack justifyContent="space-around" flex={1}>
						<Box
							_text={{
								fontSize: "md",
								fontWeight: "bold",
								letterSpacing: "lg",
								textTransform: "capitalize",
								noOfLines: 1,
								color: "#ffffff",
								ellipsizeMode: "tail",
							}}
						>
							{name}
						</Box>
						<Box
							_text={{
								fontSize: "sm",
								fontWeight: "medium",
								// color: "#9198AE",
								color: "#b6bdcb",

								letterSpacing: "lg",
								textTransform: "capitalize",
								noOfLines: 1,
								ellipsizeMode: "tail",
							}}
						>
							{decription}
						</Box>
					</VStack>
				</HStack>
			</Pressable>
		</Box>
	);
};

export default GroupItem;
