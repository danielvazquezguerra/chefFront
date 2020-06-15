import React, {useEffect} from 'react';
import './ProfileModal.scss';
import { logout } from '../../../redux/actions/actions';
import { Link } from 'react-router-dom';
import { addProfilePhoto } from '../../../redux/actions/actions';



const ProfileModal = (props) => {

   

useEffect(() => {
   
   },[]);
 const handle = event => {
     event.preventDefault();
    const formData = new FormData();
            formData.set('img', event.target.imagen.files[0]);
            addProfilePhoto(formData) 
}

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

                    <form action="" onSubmit={handle}>

                        <p>FOTO DE PERFIL</p>

                        <input type="file" name="imagen"/>

                        <input className="SubmitButton" type="submit" value="ADD PHOTO"/>

                    </form>
                    
                    <Link className="Logout"  to="/login" onClick={logout}>LOGOUT</Link>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default ProfileModal;
