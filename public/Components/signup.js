import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div className="signup-form">
                <h3>Sign up</h3>
                <div className="form">
                    <div className="flex">
                        <div className="label">First Name:</div>
                        <div><input id="name" type="text" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">Last Name:</div>
                        <div><input id="name2" type="text" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">E-mail ID:</div>
                        <div><input id="email" type="text" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">Password:</div>
                        <div><input id="pass-signup" type="password" /></div>
                    </div>
                    <div className="flex">
                        <div className="label">Confirm Password:</div>
                        <div><input id="pass-confirm" type="password" /></div>
                    </div>
                    <div className="flex">
                        <button className="btn-signup"><i className=" fa fa-2x fa-arrow-circle-right"/></button>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Signup;