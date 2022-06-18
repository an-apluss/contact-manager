import React from "react";
import { Link } from 'react-router-dom';
import UserImage from "../assets/images/user.jpg"

const ContactCard = ({contact, clickHandler}) => {
    const { id,  name, email } = contact;

    return (
        <div className="item">
            <img  className="ui avatar image" src={UserImage} alt="user" />
            <div className="content">
                <Link to={`/contact/${id}`} state={{ contact }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i 
                className="trash alternate outline icon right floated" 
                style={{ color:'red', marginTop:'7px', cursor:'pointer' }}
                onClick={() => clickHandler(id)}
            ></i>
        </div>
    )
}

export default ContactCard;