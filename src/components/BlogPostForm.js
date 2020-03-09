import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'

const BlogPostform = ({initialValues, onSubmit}) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
    return (
        <View>
            <Text style = {styles.label}>Enter Title</Text>
            <TextInput value = {title} style = {styles.input} onChangeText = {(text) => {
                setTitle(text)
            }}/>
            <Text style = {styles.label}>Enter Content</Text>
            <TextInput value = {content} style = {styles.input} onChangeText = {(text) => {
                setContent(text)
            }}/>
            <Button title = "Save Blogpost" onPress = { () => {
                onSubmit(title, content)
            }}/>
        </View>
    )
}

BlogPostform.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        margin: 5,
        paddingRight: 5,
        fontSize: 18,
        height: 40
    },
    label: {
        fontSize: 20,
        marginLeft: 5
    }
})

export default BlogPostform