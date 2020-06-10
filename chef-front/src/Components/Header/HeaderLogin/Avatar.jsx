import React from 'react'
import './Avatar.scss';
import { connect } from 'react-redux';


const Avatar = (props) => {

    const AvatarImg = `http://localhost:8000/images/users/${props.user?.imagen}`;

    return (
        
        <div className="Avatar">


            <img className="AvatarImg" src={AvatarImg} alt="daniel_vazquez"/>

      
             
        </div>
    )
}

const mapStateToProps = (state) => ({user: state.user})
export default connect(mapStateToProps)(Avatar);


