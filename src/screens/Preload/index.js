import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect } from "react";
import { Container, LoadingIcon } from "./styles";

import Logo from "../../assets/doctor_hearth_beat.svg";
import { useNavigation } from "@react-navigation/native";
import { MainIconColor } from "../../global/theme";

export default () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        //validate token
      } else {
        navigation.navigate("SignIn");
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <Logo width="60%" height="60%" />
      <LoadingIcon size="large" color={MainIconColor} />
    </Container>
  );
};
