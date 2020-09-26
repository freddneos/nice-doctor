import react from "react";
import styled from "styled-components/native";
import { MainbackgroundColor, MainColor, MainIconColor, MainInputColor } from "../../global/theme";

export const Area = styled.TouchableOpacity`
  background-color:#e6e6e8;
  margin-bottom: 20px;
  border-radius:20px;
  padding:15px;
  flex-direction:row;
`;
export const Avatar = styled.Image`
  height:88px;
  width:88px;
  border-radius:20px;
`;
export const InfoArea = styled.View`
  margin-left:20px;
  justify-content:space-between;
`;
export const UserName = styled.Text`
  font-size:17px;
  font-weight:bold;
`;
export const SeeProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid ${MainColor};
  border-radius:10px;
  justify-content:center;
  align-items:center;
`;
export const SeeProfileButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;
