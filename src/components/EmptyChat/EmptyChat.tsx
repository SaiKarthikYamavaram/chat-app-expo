import React from "react";
import { Box } from "native-base";
import AnimatedLottieView from "lottie-react-native";

const EmptyChat = () => {
	return (
		<Box flex="1" justifyContent="center" alignItems="center">
			<AnimatedLottieView
				source={require("../../../assets/lottie/empty-chat.json")}
				autoPlay
				style={{ width: "90%" }}
			/>
			<Box
				marginTop="8"
				_text={{
					fontSize: "2xl",
					paddingX: "6",
					textAlign: "center",
					fontWeight:"bold"
				}}
			>
				This space is Empty.
			</Box>
			<Box
				marginTop="2"
				_text={{
					fontSize: "lg",
					paddingX: "6",
					textAlign: "center",
					fontWeight: "hairline",
				}}
			>
				Create a group and start your Journey
			</Box>
		</Box>
	);
};

export default EmptyChat;
