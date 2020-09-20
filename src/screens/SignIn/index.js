import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "./styles";
import IconInput from "../../components/IconInput";

import Logo from "../../assets/doctor_hearth_beat.svg";
import EmailIcon from "../../assets/icons/email-outline";
import LockIcon from "../../assets/icons/lock";

import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export default () => {
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState("fredd@neosdev.com.br");
  const [passwordField, setPasswordField] = useState("");

  const handleSignIn = () => {
    console.log("Handle Sign In button click");
  };

  const handleMessageButtonClick = () => {
    console.log("Handle Message Button Click");
    navigation.reset({
      routes: [{ name: "SignUp" }],
    });
  };

  return (
    <Container>
      <Logo width="60%" height="25%" />
      <InputArea>
        <IconInput
          IconSvg={EmailIcon}
          placeholder="Digite seu Email"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />
        <IconInput
          IconSvg={LockIcon}
          placeholder="Digite sua Senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password
        />

        <CustomButton onPress={handleSignIn}>
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
        <SignMessageButton onPress={handleMessageButtonClick}>
          <SignMessageButtonText>
            Ainda não tem uma conta ?
          </SignMessageButtonText>
          <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>
      </InputArea>
    </Container>
  );
};
