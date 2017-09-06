import React, { Component } from 'react'
import Navbar from './navbar';
import Home from './home';

class App extends Component {
    render () {
        return (
            <div>
                <Navbar />
                {this.props.children}
            </div>
        )
    }
}

module.exports = App;