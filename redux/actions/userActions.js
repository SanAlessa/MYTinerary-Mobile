import { ToastAndroid } from "react-native"
import axios from 'axios'

const userActions = {
  signUp: (newUser)=>{
    return async (dispatch) => {
      try {
        const response = await axios.post('https://alessandro-mytinerary.herokuapp.com/api/signup', newUser)
        if(!response.data.success){
          return response.data
        }
        dispatch({type: 'LOG_USER', payload: response.data})
        ToastAndroid.show('Account created successfully', ToastAndroid.SHORT)
      }catch(error){
        // console.log(error)
        ToastAndroid.show('Oops something went wrong, try again later', ToastAndroid.SHORT)
      }
    }
  },

  logIn:(user) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('https://alessandro-mytinerary.herokuapp.com/api/login', user)
        if(!response.data.success){
          return response.data
        }
        dispatch({type: 'LOG_USER', payload: response.data})
        ToastAndroid.show('Welcome! '+ response.data.response.name, ToastAndroid.SHORT, ToastAndroid.TOP)
      }catch(error){
        ToastAndroid.show('Oops something went wrong, try again later', ToastAndroid.SHORT, ToastAndroid.TOP)
      }
    }
  },

  logFromLS: (token) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('http://localhost:4000/api/login/ls', {token}, { // Se agrega el token, porque no se puede poner un .post sin cuerpo (donde esta el token)!
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch({type: 'LOG_USER', payload: {response: {...response.data.response}}})
      }catch(error){
        if(err.response.status === 401) {
          toast.error("You are not allowed to access this page")
          localStorage.clear()
          return true
        }
      }
    }
  },

  logOut: () => {
    return(dispatch) => {
      dispatch({type: 'LOG_OUT'})
      ToastAndroid.show('See you later, alligator!', ToastAndroid.TOP, ToastAndroid.SHORT)
    }
  }
}

export default userActions