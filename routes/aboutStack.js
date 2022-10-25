import {createStackNavigator} from "react-navigation-stack";
import About from "../screens/about";
/*
* npm install @react-navigation/native-stack
* npm install react-native-gesture-handler
* npm install react-navigation-drawer
* */
const screenNav = {
    Home: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
            // override for headerStyle
            // headerStyle: {
            //     backgroundColor: '#a5a5a5'
            // }
        }
    },
}
const AboutStack = createStackNavigator(screenNav /*pass object into this fun => register for stack navigator*/, {
    // default style header for any navigation
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#ff0202',
        }
    }
})

export default AboutStack;


