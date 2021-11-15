const CONTACTS = [
	{
		id: 1,
		name: "Leanne Graham",
		email: "Sincere@april.biz",
		phone: "1-770-736-8031 x56442",

		imageUrl:
			"https://i.picsum.photos/id/186/200/300.jpg?hmac=OcvCqU_4x7ik3BASnw4WmwKaS-Sv167Nmf5CJoTrIUs",
	},
	{
		id: 2,
		name: "Ervin Howell",
		email: "Shanna@melissa.tv",
		phone: "010-692-6593 x09125",
		imageUrl:
			"https://i.picsum.photos/id/504/200/300.jpg?hmac=mycti8qYrnGcag5zUhsVOq7hQwb__R-Zf--aBJAH_ec",
	},
	{
		id: 3,
		name: "Clementine Bauch",
		email: "Nathan@yesenia.net",
		phone: "1-463-123-4447",
		imageUrl:
			"https://i.picsum.photos/id/38/200/300.jpg?hmac=-3xmMd1qccZR3fLPMvwj8D3GgMIIDCKTpXJspTKuZW0",
	},
	{
		id: 4,
		name: "Patricia Lebsack",
		email: "Julianne.OConner@kory.org",
		phone: "493-170-9623 x156",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},
	{
		id: 5,
		name: "Chelsey Dietrich",
		email: "Lucio_Hettinger@annie.ca",
		phone: "(254)954-1289",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},
	{
		id: 6,
		name: "Mrs. Dennis Schulist",
		email: "Karley_Dach@jasper.info",
		phone: "1-477-935-8478 x6430",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},
	{
		id: 7,
		name: "Kurtis Weissnat",
		email: "Telly.Hoeger@billy.biz",
		phone: "210.067.6132",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},

	{
		id: 8,
		name: "Nicholas Runolfsdottir V",
		email: "Sherwood@rosamond.me",
		phone: "586.493.6943 x140",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},
	{
		id: 9,
		name: "Glenna Reichert",
		email: "Chaim_McDermott@dana.io",
		phone: "(775)976-6794 x41206",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},
	{
		id: 10,
		name: "Clementina DuBuque",
		email: "Rey.Padberg@karina.biz",
		phone: "024-648-3804",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},
	{
		id: 11,
		name: "Patricia Lebsack",
		email: "Julianne.OConner@kory.org",
		phone: "493-170-9623 x156",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},
	{
		id: 12,
		name: "Chelsey Dietrich",
		email: "Lucio_Hettinger@annie.ca",
		phone: "(254)954-1289",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},
	{
		id: 13,
		name: "Mrs. Dennis Schulist",
		email: "Karley_Dach@jasper.info",
		phone: "1-477-935-8478 x6430",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},
	{
		id: 14,
		name: "Kurtis Weissnat",
		email: "Telly.Hoeger@billy.biz",
		phone: "210.067.6132",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},

	{
		id: 15,
		name: "Nicholas Runolfsdottir V",
		email: "Sherwood@rosamond.me",
		phone: "586.493.6943 x140",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},
	{
		id: 16,
		name: "Glenna Reichert",
		email: "Chaim_McDermott@dana.io",
		phone: "(775)976-6794 x41206",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},
	{
		id: 17,
		name: "Clementina DuBuque",
		email: "Rey.Padberg@karina.biz",
		phone: "024-648-3804",
		imageUrl:
			"https://i.picsum.photos/id/961/200/300.jpg?hmac=rshb15adr3WtZi83bW54uoTd2m0FuSCNwtfD74RJY0k",
	},
];
export default CONTACTS;
