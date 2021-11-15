import React, { useEffect, useMemo, useRef, useState } from "react";
import GroupItem from "../../components/GroupItem/GroupItem";
import { FlatList } from "react-native-gesture-handler";
import { Box, useColorModeValue } from "native-base";
import BottomSheet from "@gorhom/bottom-sheet";
import EmptyChat from "../../components/EmptyChat/EmptyChat";
import NewGroupModal from "../../components/NewGroupModal/NewGroupModal";
import { fetchGroupsList } from "./../../services/groups";
import { useNavigation } from "@react-navigation/core";
import NAVIGATION from "./../../constants/navigation";
import CommonFooter from "../../components/CommonFooter/CommonFooter";
import AppHeaderIos from "./../../components/AppHeader/AppHeader.Ios";
import BorderBottom from "../../components/BorderBottom/BorderBottom";

const ChatListScreenIOS = (props: any) => {
	const bottomSheetRef = useRef<BottomSheet>(null);
	const navigation = useNavigation();

	const [data, setData] = useState([]);
	const snapPoints = useMemo(() => ["90%"], []);

	const fetchChats = () => {
		fetchGroupsList()
			.then((response) => {
				setData(response?.data?.groups || []);
			})
			.catch((error) => {
				console.log("error", error);
			});
	};
	useEffect(() => {
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
	const ListHeader = () => <AppHeaderIos onPress={newGroupPress} />;

	const ListFooter = () => <CommonFooter />;
	const ListEmpty = () => <EmptyChat />;
	const ItemSeparator = () => <BorderBottom />;

	return (
		<>
			<FlatList
				style={{
					backgroundColor: useColorModeValue(
						"warmGray.50",
						"#030304"
					),
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
				data={data}
				renderItem={renderItem}
			/>
			<NewGroupModal
				bottomSheetRef={bottomSheetRef}
				snapPoints={snapPoints}
				renderItem={renderItem}
				onClose={fetchChats}
			/>
		</>
	);
};

export default ChatListScreenIOS;
