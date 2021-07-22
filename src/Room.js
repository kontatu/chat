import React from "react";
import firebase from "./config";

import { Link } from "react-router-dom";

const Room = () => {
    return (
        <>
            <h1>Room</h1>
            <button onClick={firebase.auth().signOut()} />

            <Link to="/login">login</Link>
            <Link to="/signup">Sign Up</Link>
        </>

    )
}

export default Room