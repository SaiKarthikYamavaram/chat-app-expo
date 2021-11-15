import axios from "axios";
import React from "react";
import { Platform } from "react-native";
import CONTACTS from "../../dummyData/contacts";
import ChatListScreenAndroid from "./ChatListScreen.Android";
import ChatListScreenIOS from "./ChatListScreen.Ios";

const ChatListScreen = (porps: any) => {
	React.useEffect(() => {
		axios
			.post(
				"http://fc2b-2409-4070-2209-2b7d-2dc7-a155-d299-fed5.ngrok.io/add/group",
				{
					users: CONTACTS,
					name: "name as",
					description: "group descriptoin as jhgjhg",
					imageUrl:
						"https://www.shutterstock.com/image-vector/check-back-soon-hand-lettering-inscription-1379832464",
				}
			)
			.then((response) => {
				console.log("reponse");
			});
	});

	if (Platform.OS === "ios") return <ChatListScreenIOS {...porps} />;
	else return <ChatListScreenAndroid {...porps} />;
};

export default ChatListScreen;
