import { Box } from "native-base";
import React from "react";

const BorderBottom = ({ height = "0.25", width = "95%" }) => (
	<Box width="full" height="1" alignItems="center">
		<Box width={width} opacity="0.5" height={height} bg="#cccccc" />
	</Box>
);

export default BorderBottom;
