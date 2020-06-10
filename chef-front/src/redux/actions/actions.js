import axios from 'axios';
import store from '../store';




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

    export const addProfilePhoto = async(formData) => {
        try {
            await axios.post(`http://localhost:8000/api/users/userimg`, formData, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('authToken')
                }
            });
            store.dispatch({
                type: 'USER_PHOTO'
            })
        } catch (error) {
            console.error(error)
        }
     
    }

    export const likes = async(id,recipe) => {
        try {
            const res = await axios.post(`http://localhost:8000/api/posts/like/${id}`,recipe,{
                headers: {

                    Authorization:'Bearer ' + localStorage.getItem('authToken')
                }
            })
            store.dispatch({
                type: 'LIKES',
                posts: res.data
            })
        } catch (error) {
            console.error(error)
        }

        getPostAll()
    }

   
    export const getPostAll = async() => {
        try {
            const res = await axios.get('http://localhost:8000/api/posts/all',{
                headers: {
                    Authorization:'Bearer ' + localStorage.getItem('authToken')
                }
            })
            store.dispatch({
                type: 'GET_ALL_POSTS',
                payload: res.data
            })
        } catch (error) {
            console.error(error)
        }

        
    }
    export const dislikes = async(id,post) => {
        try {
            const res = await axios.post(`http://localhost:8000/api/posts/dislike/${id}`,post,{
                headers: {
                    Authorization:'Bearer ' + localStorage.getItem('authToken')
                }
            })
            store.dispatch({
                type: 'DISLIKES',
                posts: res.data
            })
        } catch (error) {
            console.error(error)
        }
        getPostAll()
        
    }