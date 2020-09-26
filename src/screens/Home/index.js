import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
//import usePermissions from "expo-permissions-hooks";
import { useNavigation } from "@react-navigation/native"
import { Container, Scroller, HeaderArea, HeaderTitle, SeachButton, LocationArea, LocationFinder, LocationInput, Loader } from "./styles";
import { Text } from "react-native";
import { MainColor } from "../../global/theme";
import SearchIcon from "../../assets/icons/search.svg";
import MyLocationIcon from "../../assets/icons/my-location.svg";


export default () => {
  const navigation = useNavigation();
  const [locationtext, setLocationText] = useState();
  const [loading, setLoading] = useState(true);
  const [locationCoords, setLocationCoords] = useState();

  const handleLocationPermitted = async () => {
    let { coords } = await Location.getCurrentPositionAsync({ enableHighAccuracy: true })
    let reverseLocation = await Location.reverseGeocodeAsync({ longitude: coords.longitude, latitude: coords.latitude })
    setLocationText(`${reverseLocation[0].region} , ${reverseLocation[0].street}`);
    setLocationCoords(coords)
    setLoading(false);
  }

  const checkLocation = async () => {
    setLoading(true);
    let getPerm = await Location.getPermissionsAsync()
    if (getPerm.granted) {
      let requestPerm = await Location.requestPermissionsAsync()
      if (requestPerm.granted) {
        await handleLocationPermitted()
      } else {
        setLocationText();
      }
    } else {
      await handleLocationPermitted()
    }
  }
  useEffect(() => {
    checkLocation()
  }, [])
  const handleLocationFinder = async () => {
    checkLocation()
  }
  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre seu médico
          </HeaderTitle>
          <SeachButton onPress={() => navigation.navigate("Search")}>
            <SearchIcon width="28" height="28" fill={MainColor} />
          </SeachButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde você está ?"
            placeholderTextColor={MainColor}
            value={locationtext}
            onChangeText={(t) => setLocationText(t)}
          />
          <LocationFinder onPress={handleLocationFinder}>
            {!loading ? (
              <MyLocationIcon width="26" height="26" fill={MainColor} />
            ) : (
                <Loader color={MainColor} />
              )}
          </LocationFinder>
        </LocationArea>

      </Scroller>
    </Container>
  );
};
