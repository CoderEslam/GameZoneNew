import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from "../styles/global";
import {useState} from "react";

export default function Home({navigation}) {

    const pressHandler = (item) => {
        navigation.navigate('ReviewDetails', item)
        // navigation.push('ReviewDetails');
    }

    const [review, setReview] = useState([
            {title: 'eslam', rate: 2, body: 'lorem', key: 1},
            {title: 'alaa', rate: 5, body: 'lorem', key: 2},
            {title: 'ghazy', rate: 3, body: 'lorem', key: 3}
        ]
    )

    return (
        <View style={globalStyle.container}>
            <FlatList data={review} renderItem={({item}) => (
                <TouchableOpacity onPress={() => {
                    pressHandler(item)
                }}>
                    <Text style={globalStyle.titleText}>{item.title}</Text>
                </TouchableOpacity>
            )}/>
            <Button title={'go to review details'} onPress={ pressHandler}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1
    },
    titleText: {
        fontFamily: 'fasthand',
        fontSize: 32
    }
})