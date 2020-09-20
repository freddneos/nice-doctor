import react from "react";
import styled from "styled-components/native";
import { MainIconColor } from "../../global/theme";

export const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #e6e6f1;
  flex-direction: row;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
  border-radius: 30px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${MainIconColor};
  margin-left: 10px;
`;
