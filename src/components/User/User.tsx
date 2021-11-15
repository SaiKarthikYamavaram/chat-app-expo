import AnimatedLottieView from "lottie-react-native";
import { Avatar, Box, HStack, Pressable, VStack, Image } from "native-base";
import React, { useRef, useState } from "react";

interface userProps {
	name: String;
	imageURI: String;
	onPress: () => void;
	selected: boolean;
}

const User = (props: userProps) => {
	const { name, imageURI, onPress, selected } = props;
	const animatedRef = useRef(null);

	const pressHandler = () => {
		onPress();
	};
	React.useEffect(() => {
		if (selected) {
			// @ts-ignore
			animatedRef.current?.play();
		} else {
			// @ts-ignore
			animatedRef.current?.reset();
		}
		return () => {
			// @ts-ignore
			animatedRef.current?.reset();
		};
	}, [selected]);
	return (
		<Pressable
			width="1/3"
			onPress={pressHandler}
			android_ripple={{ color: "#cccccc", borderless: false }}
			android_disableSound={false}
			justifyContent="center"
			alignItems="center"
		>
			<VStack
				space={2}
				paddingX="4"
				paddingTop="4"
				background="red"
				borderBottomColor="black"
				width="full"
				alignItems="center"
			>
				<Box style={{ position: "relative" }}>
					<Avatar
						alignSelf="center"
						bg="amber.500"
						size="sm"
						// @ts-ignore
						source={{
							uri: imageURI,
						}}
					>
						{name.slice(0, 2).toUpperCase()}
					</Avatar>
				</Box>
				<Box
					width="full"
					_text={{
						fontSize: "md",
						fontWeight: "hairline",
						letterSpacing: "md",
						textTransform: "capitalize",
						noOfLines: 1,
						// ellipsizeMode: "tail",
					}}
				>
					{name}
				</Box>
				<AnimatedLottieView
					ref={animatedRef}
					loop={false}
					autoPlay={false}
					source={require("../../../assets/lottie/checked.json")}
					style={{
						width: 32,
						height: 32,
						position: "absolute",
						top: 0,
						right: 0,
					}}
					duration={500}
				/>
			</VStack>
		</Pressable>
	);
};

export default User;
