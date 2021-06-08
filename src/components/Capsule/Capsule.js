import React from 'react';

const Capsule = ({ filterIndex, id, onFilterClick, title, slug }) => {
    return (<div className={filterIndex === id ? "capsule capsule-highlight" : "capsule"} onClick={() => onFilterClick(id, slug)} key={id}>{title}</div>);
}

export default Capsule;

