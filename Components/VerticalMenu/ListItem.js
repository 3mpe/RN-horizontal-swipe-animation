import PropTypes from "prop-types";
import React, { Component } from "react";
import { Image } from "react-native";
import { Text, ContainerItem } from "./style";
import { toString } from "lodash";


class ListItem extends Component {
	render() {
		const { index, text, source, selectedItem, selected } = this.props;
		return (
			<ContainerItem
				style={{
					flexGrow: 1,
					justifyContent: "center",
					alignItems: "center",
					borderBottomWidth: selected ? 1 : 0,
					borderColor: selected ? 'blue' : "yellow",
					paddingBottom: 4
				}} 
				row onPress={() => { selectedItem(index); }}>
				<Image source={{ uri: toString(source) }} style={{
					width: 26,
					height: 26,
					tintColor: selected ? 'blue' : "yellow"
				}} resizeMode="contain" />
				<Text selected={selected}> {text} </Text>
			</ContainerItem>
		);
	}
}

ListItem.prototypes = {
	index: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	source: PropTypes.object.isRequired,
	selectedItem: PropTypes.func.isRequired,
	selected: PropTypes.bool.isRequired,
};

export default ListItem;