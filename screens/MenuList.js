import React, { Component } from "react";
import { FlatList, View } from "react-native";

import MenuListItem from "./MenuListItem";
import { Images, Colors } from "../../Themes";
import { toString } from "lodash";


const data = [
	{
		source: Images.icon.png.map_pin,
		title: "Cafe Americano",
		subtitle: "Americano is a type of coffee drink prepared by blabala Americano is a "
	}
];

export default class MenuList extends Component {

	_keyExtractor = (item, index) => toString(index);

	render() {
		return (
			this.props.data.map((item, index) => {
				return (
					<MenuListItem
						key={index}
						item={item}
						index={index}
						onPress={() => {
							this.props.onPressItem(item, index);
						}}
						onPressAddButton={() => { this.props.onPressAddButton(item, index); }}
					/>
				)
			})
		);
	}
}
