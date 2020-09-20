import React from "react";
import styled from "styled-components/native";
import {
  MainIconColor,
  MainbackgroundColor,
  MainColor,
} from "../../global/theme";

export const Container = styled.SafeAreaView`
  background-color: ${MainbackgroundColor};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator``;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: ${MainColor};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
  color: ${MainColor};
  font-size: 16px;
`;

export const SignMessageButtonTextBold = styled.Text`
  color: ${MainColor};
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
`;
