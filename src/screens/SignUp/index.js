import React, { useContext, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../contexts/UserContext";

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
import api from "../../services/accountService";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();
  const [nameField, setNameField] = useState("fredd");
  const [emailField, setEmailField] = useState("teste@drmarkey.com.br");
  const [passwordField, setPasswordField] = useState("12345678");
  const [passwordcheckField, setPasswordcheckField] = useState("12345678");

  const handleSignUp = async () => {
    if (passwordcheckField !== passwordField) {
      alert("Senha e confirmação não conferem.");
      return false;
    }

    if (emailField !== "" && passwordField !== "" && nameField !== "") {
      let response = await api.signUp(nameField, emailField, passwordField);
      if (response.token) {
        await AsyncStorage.setItem("token", response.token);
        userDispatch({
          type: "setAvatar",
          payload: {
            avatar: response.picture_url,
          },
        });

        navigation.reset({
          routes: [{ name: "MainTab" }],
        });
      } else {
        alert("Erro no cadastro", response.error);
      }
    } else {
      alert("Preencha os campos.");
    }
  };

  const handleMessageButtonClick = () => {
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
          password
        />
        <IconInput
          IconSvg={LockIcon}
          placeholder="Confirme a sua Senha"
          value={passwordcheckField}
          onChangeText={(t) => setPasswordcheckField(t)}
          password
        />

        <CustomButton onPress={handleSignUp}>
          <CustomButtonText>Cadastrar</CustomButtonText>
        </CustomButton>
        <SignMessageButton onPress={handleMessageButtonClick}>
          <SignMessageButtonText>Já possui conta ?</SignMessageButtonText>
          <SignMessageButtonTextBold>Entrar</SignMessageButtonTextBold>
        </SignMessageButton>
      </InputArea>
    </Container>
  );
};
