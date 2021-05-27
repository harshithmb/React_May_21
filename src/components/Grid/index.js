import React, { Component, useState } from 'react';// imrc

//React.Component -> properties -> method(Render)
// React Hooks
const PlacesGrid = () => {// React Hooks 16.8
    const [gridName, setGridName] = useState("PlacesGrid")
    return (<div>
        <h1>{gridName}</h1>
        <button
            onClick={() => setGridName("New Name")}
        >Click PlacesGrid</button>
    </div>);
}

class Grid extends Component {// ccc 16.3
    constructor(props) {
        super(props);
        this.state = {
            age: 123
        }
        this.updateAge = this.updateAge.bind(this)
    }

    updateAge() {
        this.setState({ age: 100 })
    }

    // updateAge = () => {// no need to bind 
    //     this.setState({ age: 100 })
    // }

    updateName = () => {
        return null
    }

    render() {
        return (<div>
            <h2>Age : {this.state.age}</h2>
            <button onClick={this.updateAge}>Click Age</button>
        </div>);
    }
}

export default Grid;