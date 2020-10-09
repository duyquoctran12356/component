import React from 'react';
import logo, { Component } from './logo.svg';


class Hello extends React.Component {
    render() {
        return <h2>Helllo, {this.props.name} </h2>;
    }
}



export default Hello;