import React from "react";
import { } from "react-native";

import { Area, Avatar, UserName, SeeProfileButton, SeeProfileButtonText, InfoArea } from "./styles";
import { MainIconColor } from "../../global/theme/index";

export default (props) => {
  const { avatar, name, stars, location, speciality } = props.data;
  return (
    <Area>
      <Avatar source={{ uri: avatar }} />
      <InfoArea>
        <UserName>
          {name}
        </UserName>
        <SeeProfileButton>
          <SeeProfileButtonText>
            Ver Perfil
          </SeeProfileButtonText>
        </SeeProfileButton>

      </InfoArea>
    </Area>
  );
};
