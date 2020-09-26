import styled from 'styled-components/native';
import { MainColor, MainbackgroundColor, MainInputColor, } from "../../global/theme";

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:${MainbackgroundColor};
`;

export const Scroller = styled.ScrollView`
    flex:1;
    padding:20px;
`;
export const HeaderArea = styled.View`
    padding-top:30px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
export const HeaderTitle = styled.Text`
    font-size:26px;
    font-weight:bold;
    color: ${MainColor};
`
export const SeachButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`

export const LocationArea = styled.View`
    background-color:${MainInputColor};
    height:60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    margin-top: 30px;

`;

export const LocationInput = styled.TextInput`
    flex:1;
    font-size:16px;
    color: ${MainColor};
`

export const LocationFinder = styled.TouchableOpacity`
    width:24px;
    height:24px;
`
export const ListArea = styled.View`   
    margin: 20px 0;
`;

export const Loader = styled.ActivityIndicator``;

