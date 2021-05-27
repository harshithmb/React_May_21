import React from "react";
import "./TopBar.css";
import style from "./TopBarCSS.module.css"

export const TopBar = (props) => {
    // props.name = "Hello"
    return <div>
        <h1 className="userName">{props.name}</h1>
        <h2 className={style.userName}>{props.name}</h2>
    </div>
}

export const SubNavBar = () => {
    return <h2>SubNavBar</h2>
}

// export default TopBar;