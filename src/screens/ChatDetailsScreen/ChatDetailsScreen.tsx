import React, { useState } from "react";
import {
	Box,
	FlatList,
	Icon,
	Image,
	useColorModeValue,
	HStack,
	Pressable,
} from "native-base";
import { useNavigation, useRoute } from "@react-navigation/core";
import Animated, {
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import UserDetail from "./../../components/UserDetail/UserDetail";
import BorderBottom from "../../components/BorderBottom/BorderBottom";
import CommonFooter from "../../components/CommonFooter/CommonFooter";

const AnimatedImage = Animated.createAnimatedComponent(Image);

const ChatDetailsScreen = () => {
	const navigation = useNavigation();
	const route = useRoute();

	// @ts-ignore
	const { groupItem } = route.params;
	const animatedHeight = useSharedValue(1);
	const heightStyle = useAnimatedStyle(() => {
		return {
			height: withTiming(animatedHeight.value * 200),
		};
	}, []);
	const [isAccending, setisAccending] = useState<boolean>(false);
	const [users, setUsers] = useState(groupItem?.users || []);

	const toggleSort = () => {
		console.log("toggle sort");
		const newUSer = groupItem?.users;
		if (isAccending) {
			// @ts-ignore
			newUSer.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				} else if (a.name > b.name) {
					return 1;
				}
				return 0;
			});
		} else {
			// @ts-ignore
			newUSer.sort((a, b) => {
				if (a.name < b.name) {
					return 1;
				} else if (a.name > b.name) {
					return -1;
				}
				return 0;
			});
		}
		// console.log(newUSer, "newuser");
		setUsers(newUSer);
		setisAccending(!isAccending);
	};
	// @ts-ignore
	const renderItem = ({ item, index }) => {
		return (
			<UserDetail
				name={item.name}
				email={item.email}
				phone={item.phone}
				imageURI={item.imageUrl}
			/>
		);
	};
	const navigateBack = () => {
		if (navigation.canGoBack()) {
			navigation.goBack();
		}
	};
	const ItemSeparator = () => <BorderBottom />;
	const ListFooter = () => <CommonFooter />;

	return (
		<Box
			flex="1"
			bg={useColorModeValue("warmGray.50", "#030304")}
			_text={{}}
		>
			<AnimatedImage
				width="full"
				resizeMode="cover"
				source={{ uri: groupItem?.imageUrl }}
				alt="Image"
				style={[
					{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						zIndex: 10,
					},
					heightStyle,
				]}
			/>

			<Icon
				onPress={navigateBack}
				as={Ionicons}
				name="arrow-back"
				size="md"
				color="coolGray.800"
				_dark={{
					color: "warmGray.50",
				}}
				style={{
					position: "absolute",
					top: 50,
					left: 20,
					zIndex: 999,
				}}
			/>

			<FlatList
				style={{
					backgroundColor: useColorModeValue(
						"warmGray.50",
						"coolGray.800"
					),
				}}
				ItemSeparatorComponent={ItemSeparator}
				ListHeaderComponent={() => (
					<Box paddingX="4">
						<Box style={{ marginTop: 210 }} />
						<Box
							_text={{
								fontSize: "4xl",
								fontWeight: "bold",
							}}
						>
							{groupItem?.name}
						</Box>

						<Box
							_text={{
								fontSize: "lg",
								fontWeight: "light",
								numberOfLines: 5,
								ellipsizeMode: "tail",
							}}
						>
							Description
						</Box>
						<Box
							paddingX="4"
							paddingY="3"
							_text={{
								fontSize: "sm",
								fontWeight: "light",
								color: "#d6d6e0",
							}}
						>
							{groupItem?.description}
						</Box>
						<HStack
							justifyContent="space-between"
							alignItems="center"
						>
							<Box
								_text={{
									fontSize: "md",
								}}
							>
								Members
							</Box>
							<Pressable
								w="1/6"
								alignItems="center"
								justifyContent="space-evenly"
								bg="#14141a"
								paddingY="2"
								borderRadius="5"
								onPress={toggleSort}
							>
								{isAccending ? (
									<Icon
										as={FontAwesome}
										name="sort-alpha-asc"
										size="xs"
										color="coolGray.800"
										_dark={{
											color: "warmGray.50",
										}}
										hitSlop={{
											left: 20,
											right: 20,
											top: 20,
											bottom: 20,
										}}
									/>
								) : (
									<Icon
										as={FontAwesome}
										name="sort-alpha-desc"
										size="xs"
										color="coolGray.800"
										_dark={{
											color: "warmGray.50",
										}}
										hitSlop={{
											left: 20,
											right: 20,
											top: 20,
											bottom: 20,
										}}
									/>
								)}
							</Pressable>
						</HStack>
					</Box>
				)}
				keyExtractor={(_, index) => index.toString()}
				contentContainerStyle={{
					flexGrow: 1,
					backgroundColor: useColorModeValue(
						"warmGray.50",
						"coolGray.800"
					),
				}}
				ListFooterComponent={ListFooter}
				data={users}
				renderItem={renderItem}
			/>
		</Box>
	);
};

export default ChatDetailsScreen;
