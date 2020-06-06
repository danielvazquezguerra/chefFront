import React from 'react';
import './Register.scss';
import FormRegister from '../FormRegister/FormRegister';
// import FormLogin from '../Login//FormLogin';

export default function Register() {

    return (

        <div className="RegisterWrapper">

            <div className="RegisterBackground" />

            <div className="LeftMainRegister">

                <img className="LogoMainLeft" src="/images/chilihot-logo-register.png" alt=""/>

            </div>
            
            <div className="RightMainRegister">

                <FormRegister />
                {/* <FormLogin /> */}
                
                <div className="RegisterHelp">

                    <ul>

                        <li><a href="/#">INFO</a></li>
                        <li><a href="/#">HELP</a></li>
                        <li><a href="/#">PRIVACITY</a></li>
                        <li><a href="/#">PRESS</a></li>

                    </ul>

                </div>

            </div>

        </div>
    )
}