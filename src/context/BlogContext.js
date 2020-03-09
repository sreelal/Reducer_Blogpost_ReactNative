import createDataContext from './createDataContext'

const blogReducer = (state, action) => {

    switch (action.type) {
        case 'delete_post':
            return state.filter((blogPost) => {
                return blogPost.id !== action.payload
            }) 
        case 'add_blogpost':
            return [...state, {
                id: Math.floor(Math.random()*9999),
                title: action.payload.title,
                content: action.payload.content
            }]
        case 'edit_blogpost':
             return (
                 state.map((blogpost) => {
                    // if (blogpost.id === action.payload.id) {
                    //     return action.payload
                    // } else {
                    //     return blogpost
                    // }
                    return  (blogpost.id === action.payload.id) ? action.payload : blogpost
                 })
             )
        default:
            return state
    }
}

const addBlogPosts = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add_blogpost', payload: {title: title, content: content}})
        callback()
    }
}

const deletBlogPost = (dispatch) => {
    return(id) => {
        dispatch({type: 'delete_post', payload: id})
    }
}

const editBlogPost = (dispatch) => {
    return(id, title, content, callback) => {
        dispatch({type: 'edit_blogpost', payload: {id: id, title: title, content: content}})
        callback()
    }
}

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPosts, deletBlogPost, editBlogPost}, [])