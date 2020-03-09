import React, {useReducer} from 'react'

export default (reducer, actions, initalState) => {

    const Context = React.createContext()
    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initalState)
        const boundActions = {}

        ///actions = {addBlogPosts: (dispatch) => return () => { ....}}
        for (key in actions) {
            boundActions[key] = actions[key](dispatch)
        }
        return (<Context.Provider value = {{state, ...boundActions}}>
            {children}
        </Context.Provider>)
    }

    return {Context, Provider}
}