import { useState } from 'react'
import AddTask from './AddTask';


/* controla a lista de tarefas */
function TaskManager() {
    const [tasks, setTasks] = useState<string[]>([]);

    const handleAddTask = (newTask: string) => {
        setTasks([...tasks, newTask]); // puxa todas as outras e adiciona a nova
        console.log("Task added: ", newTask); // aqui entrará a lógica do banco de dados
    };

    return (
        <div>
            <AddTask onAddTask={handleAddTask} />

            <div className='task-list'>
                {tasks.map((task, index) => (
                    <p key={index}>{task}</p> // renderiza as tarefas adicionadas
                ))}

            </div>
        </div>
    )
}

export default TaskManager
