import React from 'react';
import PageNotFoundImg from "../../images/PageNotFound.png";

const PageNotFound = () => {
    return (<div className="m-4 d-flex justify-content-center">
        <img src={PageNotFoundImg} alt="404 Page" style={{ width: "50vw" }} />
    </div>);
}

export default PageNotFound;