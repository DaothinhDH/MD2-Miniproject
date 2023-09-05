import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import Radio from './components/base/Radio'
import Checkbox from './components/base/Checkbox'
import Manager from './components/Manager-student/Manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TodoList/> */}
      {/* <Radio/> */}
      {/* <Checkbox/> */}
      <Manager/>
    </>
  )
}

export default App
