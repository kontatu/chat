import React from "react";

import { Link } from "react-router-dom";

const Room = () => {
    return (
        <>
            <h1>Room</h1>
            <Link to="/login">login</Link>
            <Link to="/signup">Sign Up</Link>
        </>

    )
}

export default Room