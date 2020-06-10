import React from 'react'
import './HeaderLogin.scss';
import Avatar from './Avatar';
import { connect } from 'react-redux';


const HeaderLogin =( props ) => {

    return (

        <section className="HeaderMain d-flex container-fluid m-0 p-0 align-items-center justify-content-between">

            <div className="LogoHeader justify-content-center align-items-center">
                    
                    <img className="LogoImg" src="/images/chilihot-logo.png" alt="chilihot-logo"/>

            </div>

            <div className="input-group">
            <input type="text" className="form-control" placeholder="Are you Hungry?" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div className="input-group-append">

                <a href="/#"><i className="fas fa-search"></i></a>

            </div>
            </div>

            <div className="AvatarHeader d-flex align-items-center justify-content-end">
           
            <p className="UserNameHeader">{(props.user.name).toUpperCase()}</p>

                <Avatar />
    
            </div>
    
</section>
    )
}

const mapStateToProps = (state) => ({user: state.user})
export default connect(mapStateToProps)(HeaderLogin);


