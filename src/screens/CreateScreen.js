import React, {useState, useContext} from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import {Context} from '../context/BlogContext'
import BlogPostform from '../components/BlogPostForm'

const CreateScreen = ({navigation}) => {
    const  {addBlogPosts} = useContext(Context)
    return <BlogPostform onSubmit = {(title, content) => {
        addBlogPosts(title, content, () => {
            navigation.navigate('Index')
        })
    }}/>
}

const styles = StyleSheet.create({
})

export default CreateScreen