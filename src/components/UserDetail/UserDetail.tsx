import AnimatedLottieView from "lottie-react-native";
import { Avatar, Box, HStack, Pressable, VStack } from "native-base";
import React, { useRef, useState } from "react";

interface userDetailsProps {
	name: String;
	imageURI: String;
	phone: String;
	email: String;
}

const UserDetail = (props: userDetailsProps) => {
	const { name, phone, email, imageURI } = props;

	return (
		<HStack
			space={2}
			paddingX="4"
			paddingY="4"
			background="red"
			borderBottomColor="black"
			width="full"
			alignItems="center"
		>
			<Box style={{ position: "relative" }}>
				<Avatar
					alignSelf="center"
					bg="amber.500"
					size="lg"
					// @ts-ignore
					source={{
						uri: imageURI,
					}}
				>
					{name.slice(0, 2).toUpperCase()}
				</Avatar>
			</Box>
			<VStack>
				<Box
					width="full"
					_text={{
						fontSize: "md",
						fontWeight: "bold",
						letterSpacing: "md",
						textTransform: "capitalize",
						noOfLines: 1,
						ellipsizeMode: "tail",
					}}
				>
					{name}
				</Box>
				<Box
					width="full"
					_text={{
						fontSize: "xs",
						fontWeight: "thin",
						letterSpacing: "md",
						textTransform: "capitalize",
						noOfLines: 1,
						ellipsizeMode: "tail",
                        color:"#d6d6e0"
					}}
				>
					{phone}
				</Box>
				<Box
					width="full"
					_text={{
						fontSize: "xs",
						fontWeight: "thin",
						letterSpacing: "md",
						textTransform: "capitalize",
						noOfLines: 1,
						ellipsizeMode: "tail",
                        color:"#d6d6e0"
					}}
				>
					{email}
				</Box>
			</VStack>
		</HStack>
	);
};

export default UserDetail;
