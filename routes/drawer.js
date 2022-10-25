import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import {createDrawerNavigator} from "@react-navigation/drawer";

const screens = {
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack
    }
}

const RootDrawerNavigator = createDrawerNavigator()


export default RootDrawerNavigator;




