import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, Item, Input, Button } from "native-base";
import { COLORS, FONTS } from "../../constants/theme";
import { color } from "react-native-reanimated";

export const Container = styled(View)`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: ${COLORS.background};
`;

export const Wrapper = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-family: ${FONTS.bold};
  color: ${COLORS.primary};
  font-size: ${hp("8%")}px;
  text-align: right;
`;
export const ExempleText = styled(Text)`
  font-family: ${FONTS.bold};
  color: ${COLORS.error};
  font-size: ${hp("2.25%")}px;
  text-align: right;
`;

export const Result = styled(Text)`
  font-family: ${FONTS.bold};
  color: ${COLORS.primary};
  font-size: ${hp("3.25%")}px;
  text-align: right;
`;

export const ContainerInput = styled(Item)`
  width: ${wp("60%")}px;
  border-color: ${({ isFocused }) => (isFocused ? COLORS.primary : COLORS.grey)};
`;
export const InputBox = styled(Input)`
  color: ${COLORS.primary};
  font-family: ${FONTS.bold};
`;

export const ConvertButton = styled(Button)`
  margin-top: ${wp("3.25%")}px;
  width: ${wp("70%")}px;
  justify-content: center;
  background: ${(props) => (props.disabled ? COLORS.grey : COLORS.primary)};
`;
export const ButtonText = styled(Text)`
  color: ${COLORS.black};
  font-family: ${FONTS.bold};
  font-size: ${hp("3.35%")}px;
`;
