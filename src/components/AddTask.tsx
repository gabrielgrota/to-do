import { useState } from "react"

import '../styles/AddTask.css'

import imgAdd from '../assets/add.png'

interface AddTaskProps {
  onAddTask: (task: string) => void;
}

                  /* props esperada // tipo da props (interface) */
function AddTask({ onAddTask }: AddTaskProps) {
  const [inputValue, setInputValue] = useState<string>('');

  /* somente vizualização
  const [taskText, setTaskText] = useState<string>(''); */

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleClick = () => {
    /* somente vizualização
    setTaskText(inputValue); */

    /* joga o valor do input via props */
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue('');
    }
  }

  return (
    <div className="add-task-main">
        <input 
          type="text" 
          placeholder="add a new task"
          value={inputValue} 
          onChange={handleChange} />

        <button onClick={handleClick}>
          <img src={imgAdd} />
        </button>
    </div>
  )
}

export default AddTask
