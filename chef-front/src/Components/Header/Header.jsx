import React from 'react'
import './Header.scss';
import HeaderLogin from './HeaderLogin/HeaderLogin';
import HeaderGuest from './HeaderGuest/HeaderGuest';
import { connect } from 'react-redux';


const HeaderMain = (props) =>{

    return (

        <div className="HeaderMain">

        { props.user ?
            
            <HeaderLogin />

            :

            <HeaderGuest />  


    }
        </div>
    )
}

const mapStateToProps = (state) => ({user: state.user})
export default connect(mapStateToProps)(HeaderMain);

