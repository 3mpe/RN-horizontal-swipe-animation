import React, { Component } from "react";
import ListItem from "./ListItem";
import { Container } from "./style";

export default class List extends Component {

	renderListItem = () =>
		this.props
			.data
			.map((item, index) =>
				<ListItem text={item.text} source={item.source} key={index} selectedItem={this.props.selectedItem} index={index} selected={item.selected} />)

	render() {
		return (
			<Container row style={{ padding: 0 }}>
				{this.renderListItem()}
			</Container>
		);
	}
}
