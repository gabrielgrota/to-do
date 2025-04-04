import './App.css'

import { useState } from 'react'
import AddTask from './components/AddTask'
import TaskManager from './components/TaskManager'
import taskIcon from './assets/task.png'

function App() {

  const [tasks, setTasks] = useState<{ id:number; text: string}[]>([]);

    const handleAddTask = (newTask: string) => {
        setTasks([...tasks, { id: Date.now(), text: newTask }]); // puxa todas as outras e adiciona a nova
        console.log("Task added: ", newTask); // aqui entrará a lógica do banco de dados
    };

    const handleEditTask = (id: number, newText: string) => {
        setTasks(
            tasks.map(task => (task.id === id ? { ...task, text: newText } : task ))
        );
    };

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id)); // remove com o id correspondente
    }


  return (
    <>
      <div className='header'>
        <div className='header-left'>
          <img src={taskIcon} />
          <h2>to-do</h2>
        </div>
        <div className='header-right'>
          <AddTask onAddTask={handleAddTask} />
        </div>
      </div>
      <div className='container'>
        <TaskManager
          tasks={tasks}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask} 
        />
      </div>
    </>
  )
}

export default App
