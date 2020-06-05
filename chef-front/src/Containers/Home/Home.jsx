import './Home.scss';

import React from 'react'

export default function Home() {

    return (

        <section className="HomeWrapper container-fluid">

            <img className="HomeBackground" src="/images/fire.jpg" alt=""/>

            <div className="LeftMain">

                <img className="HomeLogo" src="/images/chilihot-logo-full.png" alt=""/>

            </div>

            <div className="RightMain">

            <h3 className="AreYouHungry">ARE YOU HUNGRY?</h3>

            </div>

            

        </section>
    )
}
