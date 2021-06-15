import React, { Component } from "react";
import { connect } from "react-redux";


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div style={{ marginTop: "50px" }}>
            <h1>Contact</h1>
            <h1>{this.props.count}</h1>
        </div>);
    }
}

const mapStateToProps = (store) => ({
    count: store
})

export default connect(mapStateToProps, null)(Contact);



// const Contact = () => {
//     return (<div style={{ marginTop: "50px" }}>
//         <h1>Contact</h1>
//     </div>);
// }

// export default Contact;