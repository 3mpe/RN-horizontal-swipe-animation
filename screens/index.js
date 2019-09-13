import React, { Component } from "react";
import { View, Dimensions, PanResponder, Animated } from "react-native";

import { VerticalMenu } from "./../Components";
import MenuList from "./MenuList";

import { ScrollView } from "react-native-gesture-handler";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const MIN_SWIPE_X = -1 * SCREEN_WIDTH / 3;
const MAX_SWIPE_X = SCREEN_WIDTH / 3;


const menu_list = [
	{
		source: "http://lorempixel.com/500/500",
		title: "Margarita",
		subtitle: "Margarita, genellikle tekila ve limon suyunun karıştırılmasıyla ortaya çıkan meyveli içki türüdür.İçerisinde ayrıca buz ve cam bir bardağın kenarında meyve dilimi olacak şekilde servis edilir.",
		productId: 260,
		name: "Margarita",
		isActive: true,
		price: 45,
		coin: 3,
		priority: 1,
		isFavorite: false
	}
];

const product_list = [
	{
		text: "DRINKS",
		source: "http://carteladmin.azurewebsites.net/cdn/cartel20190730132104302.png",
		selected: false,
		productGroupId: 67,
		productGroupDetailId: 137,
		languageCode: en - US,
		cafeId: 107,
		coffeeName: "Cartel Deneme",
		isCafeActive: true,
		name: "DRINKS",
		code: "DRINKS CODE",
		description: "İçecek, içerek tüketilen ve alkollü ve alkolsüz olmak üzere ikiye ayrılan sıvı gıdaların tümü.",
		isActive: true,
		priority: 1,
		isLegal: true,
		createdBy: 1

	}
]

class MenuPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Pan: new Animated.Value(0),
			PanX: new Animated.Value(0),
			PanY: new Animated.Value(0),
			currentIndex: 0,
			verticalScrollX: 1,
		};

		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetPanResponder: () => false,
			onPanResponderTerminationRequest: (evt, gestureState) => true,
			onPanResponderGrant: this.onPanResponderGrant,
			onPanResponderMove: this.handleResponderMove,
			onPanResponderRelease: this.onPanResponderRelease,
			onMoveShouldSetPanResponderCapture: (_, gestureState) => {
				const { dx, dy } = gestureState
				return (dx > 2 || dx < -2)
			},
		});
	}






	onPanResponderGrant = (evt, gestureState) => {
		const x = gestureState.dx;
		const y = gestureState.dx;

		if (x > 10 || x < -10) { this.state.Pan.setValue(x); }
		if (y > 10 || y < -10) {
			this.state.PanX.setValue(x);
			this.state.PanY.setValue(0);
		}

	}

	handleResponderMove = async (evt, gestureState) => {
		const x = gestureState.dx;
		const y = gestureState.dx;


		if (x > 10 || x < -10) { this.state.Pan.setValue(x); }

		if (y > 10 || y < -10) {
			this.state.PanX.setValue(x);
			this.state.PanY.setValue(0);
		}
	}


	onPanResponderRelease = async () => {
		this._swipeDirection = null;
		const valueX = this.state.Pan.__getValue();
		const productLength = product_list.length - 1;

		// on click
		if (valueX === 0) {
			console.log(" click ")
		}
		// left to right
		else if (valueX > MAX_SWIPE_X) {
			await this.setState((prevState) => {
				return {
					...prevState,
					currentIndex: prevState.currentIndex === 0 ? productLength : prevState.currentIndex - 1,
					verticalScrollX: prevState.currentIndex === 0 ? (SCREEN_WIDTH) : prevState.verticalScrollX - 130,
				}
			});
			this.getMenus(this.state.currentIndex);
		}
		// right to left
		else if (valueX < MIN_SWIPE_X) {
			await this.setState((prevState) => {
				return {
					...prevState,
					currentIndex: prevState.currentIndex >= productLength ? 0 : prevState.currentIndex + 1,
					verticalScrollX: prevState.currentIndex >= productLength ? 0 : prevState.verticalScrollX + 130,
				}
			});
			this.getMenus(this.state.currentIndex);

		}
		else {

		}
		this.state.PanX.setValue(0);
		this.state.PanY.setValue(0);
		setTimeout(() => {
			this._verticalScroll.scrollTo({ x: this.state.verticalScrollX });
		}, 300);
	}

	getMenus = (index) => {
		// backend get method vertical and menu list 
	}

	handleSelectItem = (index) => {
		this.getMenus(index);
	}


	render() {
		return (
			<View style={{ flex: 1 }} >

				<View>
					<VerticalMenu
						style={{ width: SCREEN_WIDTH, height: 62 }}
						customRef={(ref) => { this._verticalScroll = ref; }}
						data={product_list}
						selectedItem={this.handleSelectItem} />
				</View>

				<ScrollView enabled={false}
					style={{ flex: 1 }}
					contentContainerStyle={{ flexGrow: 1 }}
					{...this.panResponder.panHandlers}>

					<Animated.View
						ref="_menuListContainerView" style={{
							flex: 1,
							transform: [
								{
									translateX: this.state.PanX.interpolate({
										inputRange: [MIN_SWIPE_X, MAX_SWIPE_X],
										outputRange: [MIN_SWIPE_X, MAX_SWIPE_X],
										extrapolate: "clamp"
									})
								},
								{
									translateY: this.state.PanY
								}
							]
						}} >

						{
							<MenuList
								data={menu_list}
								style={{ flex: 1, }}
								onPressItem={(item, index, separators) => {
									
								}}
								onPressAddButton={(item) => {
								
								}}
							/>
						}
					</Animated.View>
				</ScrollView>
			</View>
		);
	}
}




export default MenuPage;