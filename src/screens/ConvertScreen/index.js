import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import {
  Container,
  ExempleText,
  ContainerInput,
  InputBox,
  Title,
  Wrapper,
  ButtonText,
  ConvertButton,
  Result,
} from "./styles";

export default function ConvertScreen() {
  const [bin, setBin] = useState("");
  const [difNumber, setDifNumber] = useState(false);
  const [convertNumber, setConvertNumber] = useState("");

  const [isFocused, setIsFocused] = useState(false);

  function handleFocusInput() {
    setIsFocused(true);
  }

  function handleBlurInput() {
    setIsFocused(false);
  }

  function CheckHaveDifNumber(value) {
    const arrayNumber = value.split("");
    for (let i = 0; i < arrayNumber.length; i++) {
      arrayNumber[i] === "1" || arrayNumber[i] === "0"
        ? setDifNumber(false)
        : setDifNumber(true);
    }
  }

  function ConvertBinToDecimal(value) {
    let dec = 0;
    const arrayBinNumber = value.split("").reverse();

    for (let i = 0; i < arrayBinNumber.length; i++) {
      dec += arrayBinNumber[i] * Math.pow(2, i);
    }

    setConvertNumber(dec);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <StatusBar translucent barStyle="light-content" />
        <Title>Bin2Dec</Title>
        <Wrapper>
          <ContainerInput isFocused={isFocused}>
            <InputBox
              onChangeText={(value) => {
                setBin(value);
                CheckHaveDifNumber(value);
              }}
              maxLength={8}
              keyboardType="number-pad"
              onBlur={handleBlurInput}
              onFocus={handleFocusInput}
            />
          </ContainerInput>
          {difNumber && <ExempleText>Digite apenas números 1 ou 0</ExempleText>}
          <ConvertButton
            disabled={bin.length < 1}
            onPress={() => ConvertBinToDecimal(bin)}
          >
            <ButtonText>Converter</ButtonText>
          </ConvertButton>
        </Wrapper>
        <Result>Result: {convertNumber}</Result>
      </Container>
    </TouchableWithoutFeedback>
  );
}
