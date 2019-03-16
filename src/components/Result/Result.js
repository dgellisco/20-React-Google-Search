import React from "react";
import "./Result.css";

const Result = (props) => (
    <div>
        <h3>Book Title</h3>
        <h4>Book Detail</h4>
        <h5>Written By xyz</h5>
        <button>View</button>
        <button>Save</button>
        <img src="https://via.placeholder.com/250" alt="bookimg"></img>
        <p>Book blurb</p>
    </div>
);

export default Result;