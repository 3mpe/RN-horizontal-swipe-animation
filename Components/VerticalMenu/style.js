import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: ${props => props.row ? "row" : "column"}
    height: 52px;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
`;



export const ContainerItem = styled.TouchableOpacity`
    display: flex;
    flex-direction: ${props => props.row ? "row" : "column"};
    margin-left: 10px;
    margin-right: 10px;
    align-items: center;
`;





export const Text = styled.Text`
    font-family: "Roboto-Bold";
    font-weight: 600;
    font-size: 24px;
    color: ${(props) => props.selected ? "blue" : "yellow"}
`;


