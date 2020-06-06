import React from 'react'
import './HeaderGuest.scss';




export default function HeaderGuest() {

    return (

        <section className="HeaderMain d-flex container-fluid m-0 p-0 align-items-center justify-content-between">

            <div className="LogoHeader justify-content-center align-items-center">
                    
                    <img className="LogoImg" src="/images/chilihot-logo.png" alt="chilihot-logo"/>

            </div>

            <div className="input-group">
            <input type="text" className="form-control" placeholder="Are you Hungry?" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">

                <a href="/#"><i class="fas fa-search"></i></a>

            </div>
            </div>

            <div className="AvatarHeader d-flex align-items-center justify-content-end">
           
                <a className="ButtonHeader" href="/#">LOGIN</a>
                <a className="ButtonHeader" href="/#">REGISTER</a>
    
            </div>
    
</section>
    )
}
