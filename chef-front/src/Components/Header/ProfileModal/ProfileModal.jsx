import React from 'react';
import './ProfileModal.scss';
import { logout } from '../../../redux/actions/actions';
import { Link } from 'react-router-dom';


const ProfileModal = (props) => {

    return (

        <div>

            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="ModalProfile modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">QUE NECESITAS?</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="ModalBody modal-body">
                    <a href="/#">FOTO DE PERFIL</a>
                    <Link  to="/login" onClick={logout}>LOGOUT</Link>
                </div>
                <div className="modal-footer">
                </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default ProfileModal;
