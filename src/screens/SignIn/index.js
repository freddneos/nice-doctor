import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from "../../services/firebaseService"

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
import EmailIcon from "../../assets/icons/email-outline.svg";
import LockIcon from "../../assets/icons/lock.svg";
import api from "../../services/accountService";

export default () => {
  const [user, loading, error] = useAuthState(firebase.auth());
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState("fredd@fredd.com.io");
  const [passwordField, setPasswordField] = useState("fredd123");



  const handleSignIn = async () => {
    console.log("Handle Sign In button click");
    if (emailField !== "" && passwordField !== "") {
      await firebase.auth().signInWithEmailAndPassword(emailField, passwordField);
      if (user) {
        let token = await user.getIdToken()
        await AsyncStorage.setItem("apitoken", token);
        userDispatch({
          type: "setAvatar",
          payload: {
            avatar: user.photoURL || "",
          },
        });
        navigation.reset({
          routes: [{ name: "MainTab" }],
        });
      } else {
        alert("Erro no login", error);
      }
    } else {
      alert("Preencha os campos.");
    }
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
        {!loading && (
          <>
            <CustomButton onPress={handleSignIn} >
              <CustomButtonText>Login</CustomButtonText>
            </CustomButton >
            <SignMessageButton onPress={handleMessageButtonClick}>
              <SignMessageButtonText>
                Ainda não tem uma conta ?
        </SignMessageButtonText>
              <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
          </>
        )}
      </InputArea>
    </Container>
  );
};
