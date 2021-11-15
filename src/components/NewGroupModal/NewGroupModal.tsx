import BottomSheet from "@gorhom/bottom-sheet";
import {
	Avatar,
	Box,
	Button,
	HStack,
	Input,
	useColorModeValue,
	VStack,
	Image,
	FlatList,
} from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { Platform, Alert, ToastAndroid } from "react-native";
import User from "../User/User";
import CONTACTS from "./../../dummyData/contacts";
import * as ImagePicker from "expo-image-picker";
import { createNewGroup } from "../../services/groups";
import validURL from "./../../services/url";

function NewGroupModal(props: any) {
	const { onClose } = props;
	const [userList, setUserList] = React.useState<Number[]>([]);
	const [loading, setLoading] = React.useState<boolean>(false);
	const [groupName, setGroupName] = React.useState<string>("");
	const [groupDecription, setGroupDecription] = React.useState<string>("");
	const [groupImage, setGroupImage] = React.useState<string>("");
	const [image, setImage] = useState(null);
	const avatarref = React.useRef(null);
	const handleSheetChanges = useCallback((index: number) => {
		console.log("handleSheetChanges", index);
		if (index == -1) onClose();
	}, []);

	const onUserPress = (index: Number) => {
		const includes = userList?.includes(index);

		if (includes) {
			const newUsers = userList?.filter((item) => item !== index);
			setUserList(newUsers);
		} else {
			const newUsers = [...userList, index];
			setUserList(newUsers);
		}
	};

	// @ts-ignore
	const renderItem = ({ item, index }) => {
		return (
			<User
				name={item.name}
				imageURI={item.imageUrl}
				selected={userList.includes(index) || false}
				onPress={() => {
					onUserPress(index);
				}}
			/>
		);
	};

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		// console.log(result);

		if (!result.cancelled) {
			// @ts-ignore
			setImage(result.uri);
		}
	};

	const clearGroupData = () => {
		setGroupName("");
		setImage(null);
		setGroupDecription("");
		setUserList([]);
		setGroupImage("");
	};

	const onCreateGroupPress = () => {
		let alertString = "";

		if (groupName === "") {
			alertString += "Name, ";
		}
		if (groupDecription == "") {
			alertString += "Decription, ";
		}
		if (userList.length === 0) {
			alertString += "User ";
		}
		let userDetails: any = [];
		userList.forEach((element) => {
			// @ts-ignore
			userDetails.push(CONTACTS[element]);
		});
		alertString += "shouldn't be empty";
		if (
			groupName === "" ||
			groupDecription == "" ||
			userDetails.length === 0
		) {
			Alert.alert("Error", alertString);
			return;
		}

		setLoading(true);

		createNewGroup(
			groupName,
			groupDecription,
			validURL(groupImage)
				? groupImage
				: "https://i.picsum.photos/id/38/200/300.jpg?hmac=-3xmMd1qccZR3fLPMvwj8D3GgMIIDCKTpXJspTKuZW0",
			userDetails
		)
			.then((response) => {
				if (response.data.success) {
					if (Platform.OS === "ios") {
						Alert.alert(
							"Successful",
							"Group created successfully!"
						);
					} else {
						ToastAndroid.show(
							"Group created successfully!",
							ToastAndroid.SHORT
						);
						clearGroupData();
					}
				} else {
					if (Platform.OS === "ios") {
						Alert.alert("Successful", "Group creation Failed!");
					} else {
						ToastAndroid.show(
							"Group created Failed!",
							ToastAndroid.SHORT
						);
					}
				}
			})
			.catch((error) => {
				if (Platform.OS === "ios") {
					Alert.alert("Successful", "Group creation Failed!");
				} else {
					ToastAndroid.show(
						"Group created Failed!",
						ToastAndroid.SHORT
					);
				}
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		(async () => {
			if (Platform.OS !== "web") {
				const { status } =
					await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== "granted") {
					alert(
						"Sorry, we need camera roll permissions to make this work!"
					);
				}
			}
		})();
	}, []);

	const handleNameChange = (text: any) => {
		setGroupName(text);
	};

	const handleDesciptionChange = (text: any) => {
		setGroupDecription(text);
	};
	const handleImageURlChange = (text: any) => {
		// if (avatarref.current?.source?.uri) avatarref.current.source.uri = text;
		setGroupImage(text);
		// console.log(text,avatarref.current);
	};

	return (
		<BottomSheet
			ref={props.bottomSheetRef}
			index={-1}
			snapPoints={props.snapPoints}
			enablePanDownToClose={true}
			enableContentPanningGesture={false}
			animateOnMount={true}
			onChange={handleSheetChanges}
			handleStyle={{
				backgroundColor: "#252531",
				borderTopRightRadius: 10,
				borderTopLeftRadius: 10,
			}}
			handleIndicatorStyle={{
				backgroundColor: "#e1e1e9",
			}}
		>
			<Box flex="1" bg="#0b0b0f" padding="4">
				<Box
					_text={{
						fontSize: "2xl",
						fontWeight: "bold",
					}}
				>
					Create a New Group
				</Box>
				<HStack>
					<Box width="20" justifyContent="center" alignItems="center">
						<Avatar
							ref={avatarref}
							alignSelf="center"
							bg="amber.500"
							size="lg"
							onTouchStart={() => {
								pickImage();
							}}
							// @ts-ignore
							source={{
								uri: "someimge",
							}}
						>
							{groupName?.slice(0, 2)}
						</Avatar>
						{/* 
						<Image
						size={60}
						resizeMode={"cover"}
						borderRadius={30}
						alt="Alternate Text"
						source={{
							uri: groupImage,
						}}
						fallbackSource={{
							uri: "https://www.w3schools.com/css/img_lights.jpg",
						}}
					/> */}
					</Box>
					<VStack flex="1">
						<Input
							variant="underlined"
							value={groupName}
							onChangeText={handleNameChange}
							placeholder="Group Name"
						/>
						<Input
							value={groupDecription}
							variant="underlined"
							onChangeText={handleDesciptionChange}
							placeholder="Group Description"
						/>
					</VStack>
				</HStack>
				<Input
					value={groupImage}
					variant="underlined"
					onChangeText={handleImageURlChange}
					placeholder="Group Picture url (Optional)"
				/>
				<Box
					marginY="4"
					_text={{
						fontSize: "lg",
						fontWeight: "hairline",
					}}
				>
					Add Participants
				</Box>
				<FlatList
					numColumns={3}
					style={{
						backgroundColor: useColorModeValue(
							"warmGray.50",
							"coolGray.800"
						),
					}}
					extraData={userList}
					keyExtractor={(_, index) => index.toString()}
					contentContainerStyle={{
						flexGrow: 1,
						backgroundColor: useColorModeValue(
							"warmGray.50",
							"coolGray.800"
						),
					}}
					data={CONTACTS}
					renderItem={renderItem}
				/>
				<Button
					isLoading={loading}
					onPress={onCreateGroupPress}
					bg="#323252"
					w="full"
				>
					Create Group
				</Button>
			</Box>
		</BottomSheet>
	);
}

export default NewGroupModal;
