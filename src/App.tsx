import './App.css'

import Button from './components/Button'
import Item from './components/Item'
import AddTask from './components/AddTask'
import TaskManager from './components/TaskManager'

function App() {
  return (
    <>
      <h1>to-do</h1>
      <Item />
      <TaskManager />
      {/* <AddTask onAddTask={} /> */}
    </>
  )
}

export default App
