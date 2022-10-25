import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import About from "./screens/about";
import {useFonts} from "expo-font";
import {useCallback} from "react";
import Home from "./screens/home";
import RootDrawerNavigator from "./routes/drawer";
import HomeStack from "./routes/homeStack";
import AboutStack from "./routes/aboutStack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


/*
* npm install @react-navigation/native
* npm install react-native-screens react-native-safe-area-context
* npm install @react-navigation/drawer
* npm install react-native-gesture-handler react-native-reanimated
* */
export default function App() {

    const Drawer = createDrawerNavigator()
    const Tab = createBottomTabNavigator();

    {/* to load custom fonts*/
    }

    const [fontsLoaded] = useFonts({
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
        'fasthand': require('./assets/fonts/Fasthand-Regular.ttf')
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            return (
                <View>
                    <Text>wait to load</Text>
                </View>
            )
        }
    }, [fontsLoaded]);
    if (!fontsLoaded) {
        return null;
    }
    return (
        <NavigationContainer>
            <Tab.Navigator>

                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="About" component={About}/>
            </Tab.Navigator>
        </NavigationContainer>
        // <RootDrawerNavigator/>
    );
}
