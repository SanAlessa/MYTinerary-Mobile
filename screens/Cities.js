import React from 'react'
import { Text, View } from 'react-native'
import Prueba from './Prueba'
const array = [{nombre: 'Franco'},{nombre: 'Fer'},{nombre: 'Santi'}]


const Cities =()=>{
  return (
    array.map(array => <Prueba array={array}/>)
  )
}

export default Cities