

import './App.css'
import LineChart from './Components/LineChart/LineChart'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import Priceoptions from './Components/Priceoptions/Priceoptions'
// import DaiayNav from './Components/DaisyNav/DaiayNav'

function App() {
  

  return (
    <>
    <NavBar></NavBar>
    {/* <DaiayNav></DaiayNav> */}

      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>

      <Priceoptions></Priceoptions>
      <LineChart></LineChart>
      <Phones></Phones>
     
     


     
     
    </>
  )
}

export default App
