import axios from 'axios'
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LOGIN_ACCESS, USER_LOGIN_FAIL, USER_LOGIN_LOGOUT, USER_LOGIN_SUCCESS,
    USER_REGISTER_ACCESS, USER_REGISTER_FAIL, USER_REGISTER_LOGOUT, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_REQUEST  
} from "../constants/userConstants"
import {useDispatch, useSelector} from 'react-redux'
export const login = (email, password) => async (dispatch) =>{
    try{
        console.log(email, password)
        dispatch({
            type: USER_LOGIN_ACCESS
        })
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const {data} = await axios.post('http://localhost:3300/osfow/auth/login', {email, password, config })
        
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
        console.log(name, email, password)
        dispatch({
            type: USER_REGISTER_ACCESS
        })

        const {data} = await axios.post('http://localhost:3300/osfow/auth/register', {name, email, password })
        
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
export const getUserDetails = () => async (dispatch, getState) =>{
    try{
        dispatch({
            
            type: USER_DETAILS_REQUEST,
        })

        const { userLogin: {userInfo}} = getState()
      
        const config = {
            headers:{
                'Content-Type': 'application/json',
                authorization: userInfo.token
            }
        }
        const {data} = await axios.get(`http://localhost:3300/osfow/users/${userInfo.data.id}`,
        config )
        
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })
    

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error){
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })

    }
    
}
export const updateUserProfile = (id) => async (dispatch, getState) =>{
    try{
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST,
        })

        const { userLogin: {userInfo}} = getState()
        const config = {
            headers:{
                'Content-Type': 'application/json',
                authorization: userInfo.token
            }
        }
        const {data} = await axios.put(`http://localhost:3300/osfow/users/${userInfo.id}`,
        config )
        
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })
    

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error){
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })

    }
    
}