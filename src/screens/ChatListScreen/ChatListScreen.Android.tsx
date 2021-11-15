import React, { useEffect, useMemo, useRef, useState } from "react";
import GroupItem from "../../components/GroupItem/GroupItem";
import { FlatList } from "react-native-gesture-handler";
import { Button, Icon, useColorModeValue } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";
import EmptyChat from "../../components/EmptyChat/EmptyChat";
import NewGroupModal from "../../components/NewGroupModal/NewGroupModal";
import { fetchGroupsList } from "./../../services/groups";
import { useNavigation } from "@react-navigation/core";
import NAVIGATION from "./../../constants/navigation";
import CommonFooter from "../../components/CommonFooter/CommonFooter";
import { MaterialIcons } from "@expo/vector-icons";
import AppHeaderAndroid from "./../../components/AppHeader/AppHeader.Android";
import BorderBottom from "../../components/BorderBottom/BorderBottom";
import Loading from "../../components/Loading/Loading";

const ChatListScreenAndroid = (props: any) => {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const navigation = useNavigation();

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const snapPoints = useMemo(() => ["90%"], []);

	const fetchChats = () => {
		fetchGroupsList()
			.then((response) => {
				setData(response?.data?.groups?.reverse() || []);
			})
			.catch((error) => {
				console.log("error", error);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	useEffect(() => {
		setLoading(true);
		fetchChats();
	}, []);

	const newGroupPress = () => {
		bottomSheetRef.current?.expand();
	};

	const GroupPress = (groupItem: any) => {
		// @ts-ignore
		navigation.navigate(NAVIGATION.CHAT_DETAILS_SCREEN, {
			groupItem,
		});
	};

	const renderItem = (item: any) => {
		return (
			<GroupItem
				name={item.item.name}
				decription={item?.item?.description}
				imageURI={item?.item?.imageUrl}
				onPress={() => GroupPress(item?.item)}
			/>
		);
	};
	const ListHeader = () => <AppHeaderAndroid />;

	const ListFooter = () => <CommonFooter />;
	const ListEmpty = () => <EmptyChat />;
	const ItemSeparator = () => <BorderBottom />;

	return (
		<>
			{loading ? (

				<Loading />
			) : (
				<>
					<FlatList
						style={{
							backgroundColor: useColorModeValue(
								"warmGray.50",
								"#030304"
							),
							flex: 1,
						}}
						keyExtractor={(_, index) => index.toString()}
						contentContainerStyle={{
							flexGrow: 1,
							backgroundColor: useColorModeValue(
								"warmGray.50",
								"coolGray.800"
							),
						}}
						ListEmptyComponent={ListEmpty}
						ListHeaderComponent={ListHeader}
						ListFooterComponent={ListFooter}
						ItemSeparatorComponent={ItemSeparator}
						// data={[]}
						data={data}
						renderItem={renderItem}
					/>
					<Button
						bg="#323252"
						width="32"
						size="12"
						borderRadius="12"
						style={{
							position: "absolute",
							bottom: 32,
							right: 20,
						}}
						startIcon={
							<Icon as={MaterialIcons} name="group" size="sm" />
						}
						onPress={newGroupPress}
					>
						Create Group
					</Button>
					<NewGroupModal
						bottomSheetRef={bottomSheetRef}
						snapPoints={snapPoints}
						renderItem={renderItem}
						onClose={fetchChats}
					/>
				</>
			)}
		</>
	);
};

export default ChatListScreenAndroid;
