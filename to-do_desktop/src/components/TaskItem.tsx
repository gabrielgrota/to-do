import { useState } from 'react';
import '../styles/TaskItem.css'

import imgEdit from '../assets/edit.png'
import imgSave from '../assets/save.png'
import imgDelete from '../assets/delete.png'

function TaskItem({
  task,
  onEdit, 
  onDelete 
}: {
  task: { id: number; text: string };
  onEdit: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
    console.log(`Task ${task.id} completed!`);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  }

  const handleSaveEdit = () => {
    onEdit(task.id, editedText);
    setIsEditing(false);
    // conectar o código ao backend ou banco, se necessário
  };

  return (
    <li className='item-main'>
      <input type="checkbox" onChange={handleCheckboxChange} />

      {isEditing ? (
        <input 
          type='text'
          value={editedText}
          onChange={handleInputChange}
          onBlur={handleSaveEdit}
        />
      ) : (
        <span
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
            color: isCompleted ? "#999" : "#000",
          }}
        >
          {task.text}
        </span>
      )}

      <button onClick={handleEdit}>
        {isEditing ? <img src={imgSave} /> : <img src={imgEdit} /> }
      </button>

      <button onClick={handleDelete}>
        <img src={imgDelete} />
      </button>
    </li>
  );
}

export default TaskItem
