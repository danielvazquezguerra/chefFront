import React from 'react'
import './HeaderLogin.scss';
import Avatar from './Avatar';
import { connect } from 'react-redux';
import ProfileModal from '../ProfileModal/ProfileModal';


const HeaderLogin =( props ) => {

    return (

        <section className="HeaderMain d-flex container-fluid m-0 p-0 align-items-center justify-content-between">

            <div className="LogoHeader justify-content-center align-items-center">
                    
                    <a href="/#"><img className="LogoImg" src="/images/chilihot-logo.png" alt="chilihot-logo"/></a>

            </div>

            <div className="input-group">
            <input type="text" className="form-control" placeholder="Are you Hungry?" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">

                <a href="/#"><i className="fas fa-search"></i></a>

            </div>
            </div>

            <div className="AvatarHeader d-flex align-items-center justify-content-end">

            <a href="/allpost"><p className="HeaderButtons">RECIPES</p></a>
           
            <button className="UserNameHeader" data-toggle="modal" data-target="#staticBackdrop">{(props.user.name).toUpperCase()}</button>

                <ProfileModal />

                <Avatar />
    
            </div>
    
</section>
    )
}

const mapStateToProps = (state) => ({user: state.user})
export default connect(mapStateToProps)(HeaderLogin);


