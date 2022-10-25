import {Button, Text, View} from 'react-native';
import {globalStyle} from "../styles/global";

export default function About({navigation}) {
    const pressHandler = (item) => {
        navigation.navigate('ReviewDetails', item)
        // navigation.push('ReviewDetails');
    }
    return (
        <View style={globalStyle.container}>
            <Text style={globalStyle.titleText}>About Screen</Text>
            <Button title={'go to review details'} onPress={pressHandler}/>
        </View>
    )
}
