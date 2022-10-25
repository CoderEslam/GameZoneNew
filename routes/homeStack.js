import {createStackNavigator} from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import {createAppContainer} from "react-navigation";

/*
* npm install @react-navigation/native-stack
* npm install react-native-gesture-detector
* npm install react-native-gesture-handler
* npm install react-navigation-drawer
* npm install --save-dev @babel/plugin-proposal-export-namespace-from
* */
const screenNav = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    },
}
const HomeStack = createStackNavigator(screenNav /*pass object into this fun => register for stack navigator*/)

export default createAppContainer(HomeStack);


