import axios from 'axios';
import store from '../store';
import { API_URL } from '../../api-config';


export const getProducts = () => {
    return  axios.get(API_URL + '/skateboards/all')
    .then(res => store.dispatch({
        type:'GET_ALL_PRODUCTS',
    payload: res.data
    }))

}

export const getProductById = (_id) => {
    return  axios.get(API_URL + '/skateboards/' + _id)
    .then(res => store.dispatch({
        type:'GET_BY_ID',
    payload: res.data
    }))

}


export const clearCart = () => {    
    store.dispatch({
        type: 'CLEAR_CART',
        payload: []
    });
}

export const addCart = (product) => {
    store.dispatch({
        type: 'ADD_CART',
        payload: product
    })
}


export const login = async(user) => {
    const res = await axios.post(API_URL + '/users/login', user);
    localStorage.setItem('authToken', res.data.token); //guardamos el token en localstorage
    store.dispatch({ //this.userService.setUser(res.user)
        type: 'LOGIN',
        payload: res.data.user
    });
}
    export const logout = async() => {
        localStorage.removeItem('authToken');
        store.dispatch({
            type: 'LOGOUT'
        })
        const res = await axios.get(API_URL + '/users/logout', {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        })
        return res;
    }
  