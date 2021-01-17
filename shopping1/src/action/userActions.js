import axios from 'axios'
import { USER_LOGIN_ACCESS, USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_SUCCESS,
    USER_REGISTER_ACCESS, USER_REGISTER_FAIL, USER_REGISTER_LOGOUT, USER_REGISTER_SUCCESS  
} from "../constants/userConstants"

export const login = (email, password) => async (dispatch) =>{
    try{
        dispatch({
            type: USER_LOGIN_ACCESS
        })
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('http://localhost:3300/osfow/user/login', {email, password, config })
        
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })

    }
    
}

export const logout =() => (dispatch) =>{
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGIN_LOGOUT})
}


export const register = (name, email, password) => async (dispatch) =>{
    try{
        dispatch({
            type: USER_REGISTER_ACCESS
        })
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('http://localhost:3300/osfow/user/register', {name, email, password, config })
        
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })

    }
    
}