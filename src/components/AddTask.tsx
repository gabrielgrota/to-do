import { useState } from "react"
import Button from "./Button"

interface AddTaskProps {
  onAddTask: (task: string) => void;
}


                  /* props esperada // tipo da props (interface) */
function AddTask({ onAddTask }: AddTaskProps) {
  const [inputValue, setInputValue] = useState<string>('');

  /* somente vizualização */
  const [taskText, setTaskText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleClick = () => {
    /* somente vizualização */
    setTaskText(inputValue);

    /* joga o valor do input via props */
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue('');
    }
  }

  return (
    <div className="add-task-main">
        <h1>New Task</h1>
        <input type="text" value={inputValue} onChange={handleChange} />

        <Button text="add" onClick={handleClick} />

        <p>{taskText}</p>
    </div>
  )
}

export default AddTask
