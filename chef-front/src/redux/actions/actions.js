import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config';



export const login = async(user) => {
    const res = await axios.post('http://localhost:8000/api/users/login', user);
    localStorage.setItem('authToken', res.data.token); 
    store.dispatch({ 
        type: 'LOGIN',
        payload: res.data.user
    });
}
    export const logout = async() => {
        localStorage.removeItem('authToken');
        store.dispatch({
            type: 'LOGOUT'
        })
        const res = await axios.get(API_URL + 'api/users/logout', {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        })
        return res;
    }
  