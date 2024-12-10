import { useState } from 'react'
import './App.css'
import Tarj from "./components/Tarj";
import Gato from './components/Gato';
import Perro from './components/Perro';
import Universidad from './components/Universidad';


function App() {

  return (
  
    <div className='App'>

      <h1>hola react</h1>
      <Tarj />
      <Gato />
      <Perro />
      <Universidad />


    </div>
  )
}

export default App;
