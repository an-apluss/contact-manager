import React from "react";
import { Link, useLocation } from 'react-router-dom';
import UserImage from "../assets/images/user.jpg"

const ContactDetail = () => {
    const location = useLocation();
    const { name, email } = location.state.contact;

    return (
        <div className="main mt-70">
            <div className="ui card centered">
                <div className="image">
                    <img src={UserImage} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
                <div className="extra content">
                    <Link to='/'>
                        <button className="ui button blue">Back to contact list</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail;