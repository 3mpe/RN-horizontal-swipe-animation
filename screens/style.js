import styled from "styled-components/native";


export const ViewContainer = styled.View`
   flex: ${(props) => props.flex || 1};
    align-items: flex-start;
    justify-content: center;
    flex-direction: ${props => props.column ? "column" : "row"};
    padding-left: 4px;
    padding-right: 4px;
`;

export const TouchableButton = styled.TouchableOpacity`
    flex: ${(props) => props.flex || 1};
    align-items: flex-start;
    justify-content: center;
    flex-direction: ${props => props.column ? "column" : "row"};
    padding-left: 4px;
    padding-right: 4px;
`;

export const Container = styled.View`
    flex: ${(props) => props.flex || 1};
    align-items: flex-start;
    justify-content: center;
    flex-direction: ${props => props.column ? "column" : "row"};
    padding-left: 4px;
    padding-right: 4px;
`;

export const Title = styled.Text`
    font-family: "Roboto-Bold";
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 6px;
`;

export const Subtitle = styled.Text`
    font-family: "Roboto-Regular";
    font-size: 12px;
    color: #000;
`;

export const Image = styled.Image`
    height: 60px;
    width: 60px;
`;

export const IconContainer = styled.View`
    justify-content: center;;
    align-items: center;
    height: 100%;
`;

export const Icon = styled.Image`
    height: 12px;
    width: 12px;
    border-radius: 4px;
    margin-right: 4px;
    margin-top: 4px;
`;
export const ButtonImage = styled.TouchableOpacity``;


