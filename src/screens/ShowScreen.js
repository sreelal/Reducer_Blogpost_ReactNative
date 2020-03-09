import React, {useContext} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import {EvilIcons} from '@expo/vector-icons'

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context)
    const blogpost = state.find((blogpost) => {
        return blogpost.id === navigation.getParam('id')
    })
    return (
        <View>
            <Text>{blogpost.title}</Text>
            <Text>{blogpost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => {
            return (
                <TouchableOpacity onPress = {() => {
                    navigation.navigate('Edit', {id: navigation.getParam('id')})
                }}>
                    <EvilIcons name = "pencil" size = {35}/>
                </TouchableOpacity>
            )
        }
    }
}
const styles = StyleSheet.create({})

export default ShowScreen