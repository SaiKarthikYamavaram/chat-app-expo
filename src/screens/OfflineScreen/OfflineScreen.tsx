import AnimatedLottieView from "lottie-react-native";
import { Box, Center, VStack } from "native-base";
import React from "react";
const OfflineScreen = () => {
	return (
		<Center flex={1} bg="#030304">
			<VStack space="4">
				<AnimatedLottieView
					autoPlay
					style={{ width: "90%" }}
					source={require("../../../assets/lottie/no-internet-connection-empty-state.json")}
				/>
				<Box>
					Oops Internet seems to be offline. Try after connecting back
				</Box>
			</VStack>
		</Center>
	);
};

export default OfflineScreen;
