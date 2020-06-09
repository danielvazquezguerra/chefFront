import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config';



export const login = async(user) => {
    const res = await axios.post('http://localhost:8000/api/users/login', user);
    localStorage.setItem('authToken', res.data.user.token);
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
        const res = await axios.get('http://localhost:8000/api/users/logout', {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        })
        return res;
    }

    export const getPostAll = () => {
        return  axios.get(API_URL + 'http://localhost:8000/api/posts/all')
        .then(res => store.dispatch({
            type:'GET_ALL_POSTS',
        payload: res.data
        }))

    }