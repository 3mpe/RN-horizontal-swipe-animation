import PropTypes from "prop-types";
import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import List from "./List";



class VerticalMenu extends Component {

	constructor(props) {
		super(props);
		
	}

	render() {
		const { data, selectedItem, style, customRef } = this.props;
		return (
			<ScrollView
				ref={(_ref) => customRef(_ref)}
				scrollEnabled
				horizontal
				showsHorizontalScrollIndicator={false}
				style={[style, {}]}
				contentContainerStyle={{}}>
				<List data={data} selectedItem={selectedItem} />
			</ScrollView>
		);
	}
}

// this.refs._scrollView.scrollTo({ x: 0 })

VerticalMenu.prototypes = {
	style: PropTypes.object,
	customRef: PropTypes.any,
	selectedItem: PropTypes.func.isRequired,
	data: PropTypes.arrayOf(
		{
			text: PropTypes.string.isRequired,
			source: PropTypes.any.isRequired,
			selected: PropTypes.bool.isRequired,
		}
	).isRequired
};

export default VerticalMenu;