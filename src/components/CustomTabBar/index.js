import React, { useContext } from "react";
import {} from "react-native";

import { TabArea, TabItem, TabItemCenter, AvatarIcon } from "./styles";
import { MainIconColorOnColor, MainIconColor } from "../../global/theme";

import { UserContext } from "../../contexts/UserContext";
import FavoriteIcon from "../../assets/icons/tabbar/favorite.svg";
import HomeIcon from "../../assets/icons/tabbar/home.svg";
import ProfileIcon from "../../assets/icons/tabbar/profile.svg";
import AppointmentsIcon from "../../assets/icons/tabbar/appointments.svg";
import SearchIcon from "../../assets/icons/tabbar/search.svg";

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  const opacityQtd = 0.5;

  const { state: user } = useContext(UserContext);
  console.log("STATE :: ", user.avatar, user);

  return (
    <TabArea>
      <TabItem onPress={() => goTo("Home")}>
        <HomeIcon
          style={{ opacity: state.index === 0 ? 1 : opacityQtd }}
          width="24"
          height="24"
          fill={MainIconColorOnColor}
        />
      </TabItem>
      <TabItem onPress={() => goTo("Search")}>
        <SearchIcon
          style={{ opacity: state.index === 1 ? 1 : opacityQtd }}
          width="24"
          height="24"
          fill={MainIconColorOnColor}
        />
      </TabItem>
      <TabItemCenter onPress={() => goTo("Appointments")}>
        <AppointmentsIcon width="32" height="32" fill={MainIconColor} />
      </TabItemCenter>
      <TabItem onPress={() => goTo("Favorites")}>
        <FavoriteIcon
          style={{ opacity: state.index === 3 ? 1 : opacityQtd }}
          width="24"
          height="24"
          fill={MainIconColorOnColor}
        />
      </TabItem>
      <TabItem onPress={() => goTo("Profile")}>
        {user.avatar != "" && !user.avatar.includes(".svg") ? (
          <AvatarIcon source={{ uri: user.avatar }} />
        ) : (
          <ProfileIcon
            style={{ opacity: state.index === 4 ? 1 : opacityQtd }}
            width="24"
            height="24"
            fill={MainIconColorOnColor}
          />
        )}
      </TabItem>
    </TabArea>
  );
};
