import React, { useState } from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import './App.css'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'


function App() {

  return (
    <ChakraProvider>
      <Nav/>
      <Home/>
    </ChakraProvider>
  )
}

export default App
