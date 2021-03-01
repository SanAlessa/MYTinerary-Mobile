import { ToastAndroid } from "react-native"
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage"

const userActions = {
  signUp: (newUser)=>{
    return async (dispatch) => {
      try {
        const response = await axios.post('https://alessandro-mytinerary.herokuapp.com/api/signup', newUser)
        if(!response.data.success){
          return response.data
        }
        dispatch({type: 'LOG_USER', payload: response.data})
        ToastAndroid.showWithGravity('Account created successfully', ToastAndroid.SHORT, ToastAndroid.TOP)
      }catch(error){
        // console.log(error)
        ToastAndroid.showWithGravity('Oops something went wrong, try again later', ToastAndroid.SHORT, ToastAndroid.TOP)
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
        ToastAndroid.showWithGravity('Welcome! '+ response.data.response.name, ToastAndroid.SHORT, ToastAndroid.TOP)
      }catch(error){
        ToastAndroid.showWithGravity('Oops something went wrong, try again later', ToastAndroid.SHORT, ToastAndroid.TOP)
      }
    }
  },

  logFromLS: (token) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('https://alessandro-mytinerary.herokuapp.com/api/login/ls', {token}, { // Se agrega el token, porque no se puede poner un .post sin cuerpo (donde esta el token)!
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch({type: 'LOG_USER', payload: {response: {...response.data.response}}})
      }catch(error){
        if(err.response.status === 401) {
          toast.error("You are not allowed to access this page")
          AsyncStorage.clear()
          return true
        }
      }
    }
  },

  logOut: () => {
    return(dispatch) => {
      dispatch({type: 'LOG_OUT'})
      ToastAndroid.showWithGravity('See you later, alligator!', ToastAndroid.SHORT, ToastAndroid.TOP)
    }
  }
}

export default userActions