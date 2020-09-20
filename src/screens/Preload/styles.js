import React from "react";
import styled from "styled-components/native";
import { MainIconColor, MainbackgroundColor } from "../../global/theme";

export const Container = styled.SafeAreaView`
  background-color: ${MainbackgroundColor};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator``;
