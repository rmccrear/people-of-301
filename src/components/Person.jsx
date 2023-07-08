// import React
import React from 'react';
import "./Person.css";

// create component
class Person extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.imgURL} />
                <p>hi nice to meet you.</p>
            </div>
        );
    }
}

// export component
export default Person;