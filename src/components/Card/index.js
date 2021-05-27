import React from 'react';
import "./Card.css";

const Card = (props) => {
    const styles = { fontSize: "30px" }

    return (<div key={props.index} className="card">
        <img src={props.imageUrl} width="100" />
        <h5 style={{
            fontSize: "30px",
            borderBottom: "1px solid"
        }}>{props.title}</h5>
    </div>);
}

export default Card;

//HTML font-size