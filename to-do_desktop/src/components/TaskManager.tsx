import TaskItem from './TaskItem'

interface TaskManagerProps {
    tasks: { id: number; text: string }[];
    onEditTask: (id: number, newText: string) => void;
    onDeleteTask: (id: number) => void;
}

/* controla a lista de tarefas */
function TaskManager({ tasks, onEditTask, onDeleteTask}: TaskManagerProps) {
    
    return (
            <ul>
                {tasks.map(task => (
                    <TaskItem 
                        key={task.id}
                        task={task}
                        onEdit={onEditTask}
                        onDelete={onDeleteTask}
                    />
                ))}
            </ul>
    )
}

export default TaskManager
