import {Button, StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {globalStyle} from "../styles/global";

export default function ReviewDetails({navigation}) {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>{navigation.getParam('title')}</Text>
            <Text style={globalStyle.titleText}>{navigation.getParam('body')}</Text>
            <Text style={globalStyle.titleText}>{navigation.getParam('rate')}</Text>
            <Button title={'back to home '} onPress={pressHandler}/>

        </View>
    )
}
