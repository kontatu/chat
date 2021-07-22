import React, { useContext } from 'react'
import { Route, Redirect, } from 'react-router-dom'
import { AuthContext } from './AuthServise'

// 　　                                         ここの...restは残りpropsを配列にする
const LoggedInRoute = ({ component: Component, ...rest }) => {
    // Reaxt.createContextの戻り値は.providerのvalueの中身が返される
    const user = useContext(AuthContext)
    return (
        <Route
            // この...restは配列を展開してpropsにしてくれる
            {...rest}
            component={props =>
                user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={'/login'} />
                )
            }
        />
    )
}

export default LoggedInRoute