import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import About from "./screens/about";
import {useFonts} from "expo-font";
import {useCallback} from "react";
import Home from "./screens/home";
import ReviewDetails from "./screens/reviewDetails";
import Navigator from './routes/homeStack'


/*
* npm install @react-navigation/native
* npm install react-native-screens react-native-safe-area-context
* npm install @react-navigation/drawer
* npm install react-native-gesture-handler react-native-reanimated
* */
export default function App() {

    const Drawer = createDrawerNavigator();

    {/* to load custom fonts*/
    }
    const [fontsLoaded] = useFonts({
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
        'fasthand': require('./assets/fonts/Fasthand-Regular.ttf')
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {

        }
    }, [fontsLoaded]);
    if (!fontsLoaded) {
        return null;
    }
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="About" component={About}/>
                <Drawer.Screen name="Review" component={ReviewDetails}/>
            </Drawer.Navigator>
        </NavigationContainer>


        // <HomeStack/>

        // <View style={styles.container}>
        //     <Text>djkbvkjdbvkj</Text>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
