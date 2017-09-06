import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <h3>Profile</h3>
                <div className="profile-img">
                    <i className="fa fa-5x fa-user"/>
                </div>
                <div className="profile-name">/u/user</div>
                <div className="user-info">
                    <h5>Information</h5>
                    <div className="profile-info">
                        <div className="flex">
                            <div className="label">Name:</div>
                            <div><input id="name" type="text" /></div>
                        </div>
                        <div className="flex">
                            <div className="label">Contact:</div>
                            <div><input id="contact" type="text" /></div>
                        </div>
                        <div className="flex">
                            <div className="label">Place:</div>
                            <div><input id="place" type="text" /></div>
                        </div>
                        <div className="flex">
                            <button className="btn-update"><i className=" fa fa-pencil-square-o"/>Update</button>
                        </div>
                    </div>
                </div>
                <div></div>
                <div className="polls-info">
                    <h5>Polls</h5>
                    <div className="polls-list">
                        <div className="poll">
                            Who is your Favorite?
                        </div>
                        <div className="poll">
                            Who is your Favorite?
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Profile;