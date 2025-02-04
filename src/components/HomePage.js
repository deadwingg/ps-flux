import React from 'react';
import {Link} from "react-router-dom";

function Homepage(props) {
    return (
    <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Flux, and React router for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary">About</Link>
    </div>
    );
}

export default Homepage;