import React from 'react'
import './HeaderGuestDark.scss';




export default function HeaderGuest() {

    return (

        <section className="HeaderMain d-flex container-fluid m-0 p-0 align-items-center justify-content-between">

            <div className="LogoHeader justify-content-center align-items-center">
                    
                    {/* <img className="LogoImg" src="/images/chilihot-logo.png" alt="chilihot-logo"/> */}
                    <svg className="LogoImg" viewBox="0 0 539.23 183.06"><g id="ec205107-332b-4cd6-87df-4602ebeaf7e0" data-name="Capa 3"><path  d="M306.11,115.74V77.41h8.12V62H280.46V77.41h8.12v38.33h-8.81v15.55h35.16V115.74Z"/><path d="M251.42,62H233.6v69.33h43V115.34H251.42Z"/><path d="M216.54,115.74V77.41h8.12V62H190.89V77.41H199v38.33H190.2v15.55h35.16V115.74Z"/><path d="M181.46,62H163.34V87.12h-21.4V62H123.83v69.33h18.11V103.46h21.4v27.83h18.12Z"/><path d="M45,96.62c.1,23.58,17.93,35.46,35.55,35.36,14.76,0,30.31-7.72,32.88-27.33H96c-1.88,7.42-7.92,11.19-15.45,11.19-10.49-.1-17.23-9-17.23-19.22,0-11.48,6.83-19.31,17.23-19.31,7.43,0,12.68,3.17,15.16,10.2h17.43C110.43,69,94.88,61.17,80.52,61.17,62.9,61.17,45.07,73.06,45,96.62Z"/><path class="e654ad09-0329-497b-9747-0be20bd0e16c" d="M468.26,77.81v53.48h17.53V77.81h16.93V62H451.23V77.81Z"/><path class="e654ad09-0329-497b-9747-0be20bd0e16c" d="M451.33,96.72c0-47.93-71.1-47.93-71.1,0S451.33,144.75,451.33,96.72Z"/><path d="M376.79,62H358.67V87.12h-21.4V62H319.16v69.33h18.11V103.46h21.4v27.83h18.12Z"/><path d="M448.94,48.27c0-12.62-18.72-12.62-18.72,0S448.94,60.91,448.94,48.27Z"/></g></svg>
                    

            </div>

            <div className="input-group">
            <input type="text" className="form-control" placeholder="Are you Hungry?" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">

                <a href="/#"><i class="fas fa-search"></i></a>

            </div>
            </div>

            <div className="AvatarHeader d-flex align-items-center justify-content-end">
           
                <a className="ButtonHeader" href="/#">LOGIN</a>
                <a className="ButtonHeader" href="/register">REGISTER</a>
    
            </div>
    
</section>
    )
}
