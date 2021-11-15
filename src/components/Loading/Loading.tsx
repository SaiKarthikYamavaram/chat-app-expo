import React from "react";
import {
	Spinner,
	HStack,
	Heading,
	Center,
	useColorModeValue,
} from "native-base";

const Loading = () => {
	return (
		<Center
			flex={1}
			px="3"
			bg={useColorModeValue("warmGray.50", "#030304")}
		>
			<HStack space={2} alignItems="center">
				<Spinner accessibilityLabel="Loading posts" color="#323252"  size="lg" />
				<Heading color="#323252" fontSize="2xl">
					Loading
				</Heading>
			</HStack>
		</Center>
	);
};

export default Loading;
