import axios from 'axios'
import { USER_LOGIN_ACCESS, USER_LOGIN_SUCCESS } from "../constants/userConstants"

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
        const {data} = await axios.post('/osfow/user/login', {email, password, config })
        
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error){

    }
    
}