import React from 'react'
import './Header.scss';
import Avatar from './Avatar';



export default function Header() {

    return (

        <section className="HeaderMain d-flex container-fluid m-0 p-0 align-items-center justify-content-between">

            <div className="LogoHeader justify-content-center align-items-center">
                    
                    <img className="LogoImg" src="/images/chilihot-logo.png" alt="chilihot-logo"/>

            </div>

            <div className="input-group">
            <input type="text" className="form-control" placeholder="Are you Hungry?" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
            </div>

            <div className="AvatarHeader d-flex align-items-center justify-content-end">
           
                <p className="UserNameHeader">Daniel Vazquez</p>
                <Avatar />
    
            </div>
    
</section>
    )
}
