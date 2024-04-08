import { useState } from 'react'
import Usereducer from './concepts/Usereducer'
import './App.css'
import Todoapp from '../src/components/Todoapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Usereducer /> */}
    <Todoapp />

    </>
  )
}

export default App