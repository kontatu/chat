import firebase from "firebase/app"

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCKpfNc0Cb4z6lREsfmEKC2UrrT-TP6Fik",
    authDomain: "chat-app-1ea84.firebaseapp.com",
    projectId: "chat-app-1ea84",
    storageBucket: "chat-app-1ea84.appspot.com",
    messagingSenderId: "332733841765",
    appId: "1:332733841765:web:3d6589c47221536a5ee18c"
}

firebase.initializeApp(firebaseConfig)

export default firebase