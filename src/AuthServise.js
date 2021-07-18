import React, { useState, useEffect } from "react"
import firebase from "./config/firebase"

const AuthContext = React.createContext()

// probider => コンテキストで渡したい値を指定するもの
// childrenは自動的に与えられる
const AuthProbider = ({ children }) => {
    const [user, setUser] = useState(null)
    // todo:認証済みのユーザーを取得して、userに格納する

    // レンダリングの後に実行する
    // なぜ？：レンダリング後にDOMが操作できるようになるため
    // レンダリング中はDOM生成をしているため、操作ができない
    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser)
    }, [])
    // []をつけることで初回のレンダリングだけで実行する


    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProbider
}