import React from "react";
import {} from "react-native";

import { InputArea, Input } from "./styles";
import { MainIconColor } from "../../global/theme/index";

export default ({ IconSvg, placeholder, password, value, onChangeText }) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill={MainIconColor} />
      <Input
        placeholder={placeholder}
        placeholderTextColor={MainIconColor}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};
