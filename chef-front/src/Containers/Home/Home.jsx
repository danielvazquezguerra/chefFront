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

            <h3 className="AreYouHungry">ARE YOU HUNGRY ?</h3>

            <p className="ReviewText">When it comes to proper Italian comfort food, a plate of pillowy gnocchi is hard to beat. 
                Using humble ingredients, these fluffy potato dumplings are quick to cook, hearty and versatile – 
                delicious with rich, creamy sauces, tomato-based ragus or a simple herb butter, whatever you fancy..
                
                </p>

            </div>

            

        </section>
    )
}

