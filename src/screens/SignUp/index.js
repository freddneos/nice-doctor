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
import AccountIcon from "../../assets/icons/account";

import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

export default () => {
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [nameField, setNameField] = useState("");
  const [passwordConfirmationField, setPasswordConfirmationField] = useState("");


  const handleSignUp = () => {
    console.log("Handle Sign In button click");
  };

  const handleMessageButtonClick = () => {
    console.log("Handle Message Button Click");
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <Container>
      <Logo width="60%" height="25%" />
      <InputArea>
        <IconInput
          IconSvg={AccountIcon}
          placeholder="Digite Nome"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />

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
        />
        <IconInput
          IconSvg={LockIcon}
          placeholder="Confirme a sua Senha"
          value={passwordConfirmationField}
          onChangeText={(t) => setPasswordConfirmationField(t)}
          password
        />

        <CustomButton onPress={handleSignUp}>
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
        <SignMessageButton onPress={handleMessageButtonClick}>
          <SignMessageButtonText>Já possui conta ?</SignMessageButtonText>
          <SignMessageButtonTextBold>Entrar</SignMessageButtonTextBold>
        </SignMessageButton>
      </InputArea>
    </Container>
  );
};
