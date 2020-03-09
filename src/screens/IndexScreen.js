import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
    const {state, deletBlogPost} = useContext(Context)
    return (
        <View>
            <FlatList 
                data = {state}
                keyExtractor = {(blogPost) => blogPost.title}
                renderItem = {({item}) => {
                    return <TouchableOpacity onPress = {()=> {
                        navigation.navigate('Show', {id: item.id})
                    }}>
                        <View style = {styles.rowStyle}>
                            <Text style = {styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress = {() => {
                                deletBlogPost(item.id)
                                }}>
                                <Feather style = {styles.iconStyle} name = "trash"/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                 }
                }
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {

        headerRight: () => {
            return (
                <TouchableOpacity onPress = {() => {
                    navigation.navigate('Create')
                }}>
                    <Feather name = "plus"  style = {styles.navigationIconStyle} />
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({

    rowStyle : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 24
    },
    navigationIconStyle: {
        fontSize: 30,
        paddingRight: 10
    }
})

export default IndexScreen