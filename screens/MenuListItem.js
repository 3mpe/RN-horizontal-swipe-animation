import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { TouchableButton, ViewContainer, Container, Title, Subtitle, IconContainer, Icon } from "./style";
import { Images, Colors } from "../../Themes";
import { toString } from "lodash";


export default class MenuListItem extends Component {
	render() {
		const { item } = this.props;

		return (
			<ViewContainer style={styles.container}>
				<TouchableButton onPress={this.props.onPress}>
					<View >
						<Image source={{ uri: toString(item.source) }}
							borderRadius={4}
							style={{ width: 75, height: 75, overflow: "hidden", borderRadius: 4 }}
							resizeMode="stretch"
							resizeMethod="resize" />
					</View>
					<Container column >
						<Title>{item.title} </Title>
						<Subtitle>{item.subtitle.substring(0, 100)}...</Subtitle>
					</Container>
				</TouchableButton>

				<TouchableOpacity onPress={this.props.onPressAddButton}>
					<IconContainer>
						<Icon
							source={Images.icon.png.other.Add_New_Button_gold}
							resizeMode="contain"
							resizeMethod="resize"
							style={{ width: 24, height: 24 }} />
					</IconContainer>
				</TouchableOpacity>

			</ViewContainer>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		paddingTop: 12,
		paddingBottom: 12,
		borderColor: Colors.borderColor
	}
});