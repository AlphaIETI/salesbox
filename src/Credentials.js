import React from 'react';

export class Credentials extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
   <div>
          <h1> {this.props.email}</h1>
          <h1> {this.props.password}</h1>
   </div>
        );
    }

}