import React, {useContext}  from 'react'
import {View, Text, StyleSheet} from 'react-native'
import BlogPostform from '../components/BlogPostForm'
import {Context} from '../context/BlogContext'

const EditScreen = ({navigation}) => {

    const {state, editBlogPost} = useContext(Context)
    const id =  navigation.getParam('id')
    const blogPost = state.find((blogPost) => {
        return blogPost.id === id
    })
    return (
        <BlogPostform initialValues = {{title: blogPost.title, content: blogPost.content}} onSubmit = {(title, content) => {
            editBlogPost(id, title, content, () => {
                navigation.pop()
            })
        }}/>
    )
}

const styles = StyleSheet.create({})

export default EditScreen