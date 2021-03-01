import AsyncStorage from '@react-native-async-storage/async-storage';

const initState = {
  loggedUser: null
}

const setLS = (action)=>{
  AsyncStorage.setItem('token', action.payload.response.token)
} 

const clearLS = async()=>{
  await AsyncStorage.clear()
}
const userReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOG_USER':
      setLS(action)
     return {
       ...state,
       loggedUser: action.payload.response
     }
    case 'LOG_OUT':
      clearLS()
      return {
      ...state,
      loggedUser: null
      }
    default: 
      return state
  }
}

export default userReducer