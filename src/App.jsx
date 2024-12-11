import { useEffect, useState } from 'react'
import Play_Card from './Components/Play_Card'
import Left_Menu from './Components/Left_Menu/Left_Menu'
import Right_Menu from './Components/Right_Menu/Right_Menu'
import './App.css'

function App() {

  const [leftmenu, Setleftmenu] = useState('')
  
  return (
    <>
      <div className="flex">
        <Left_Menu Setleftmenu={Setleftmenu} />
        <Right_Menu leftmenu={leftmenu} />
      </div>
    </>
  )
}

export default App
