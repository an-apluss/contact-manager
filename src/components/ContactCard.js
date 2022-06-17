import React from "react";
import UserImage from "../assets/images/user.jpg"

const ContactCard = ({contact, clickHandler}) => {
    const {id,  name, email } = contact;

    return (
        <div className="item">
            <img  className="ui avatar image" src={UserImage} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i 
                className="trash alternate outline icon" 
                style={{ color:'red', marginTop:'7px', cursor:'pointer' }}
                onClick={() => clickHandler(id)}
            ></i>
        </div>
    )
}

export default ContactCard;