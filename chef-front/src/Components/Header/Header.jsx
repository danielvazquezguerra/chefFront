import React from 'react'
import './Header.scss';
// import HeaderLogin from './HeaderLogin/HeaderLogin';
import HeaderGuest from './HeaderGuest/HeaderGuest';



export default function HeaderMain() {

    return (

        <div className="HeaderMain">

            {/* <HeaderLogin /> */}
            <HeaderGuest />

        </div>
    )
}
