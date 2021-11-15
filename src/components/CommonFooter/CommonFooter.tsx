import { Box, Pressable, useColorModeValue } from "native-base";
import React from "react";
import { Linking } from "react-native";

function CommonFooter(props: any) {
	const { name = "Sai Karthik Yamavaram" } = props;
	return (
		<Pressable onPress={()=>{
			Linking.openURL("")
		}} >
			<Box
				paddingY="4"
				justifyContent="center"
				alignItems="center"
				bg={useColorModeValue("warmGray.50", "#14141a")}
				flexDirection="row"
			>
				Built with ❤️ using Expo,{" "}
				<Box
					_text={{
						fontWeight: "bold",
					}}
				>
					{name}
				</Box>
			</Box>
		</Pressable>
	);
}

export default CommonFooter;
