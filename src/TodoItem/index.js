import './TodoItem.css'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

// La funcion es un componente (TodoItem)
function TodoItem({text, completed, onChangeTodoState, onDelete}) {
  return (
    // Estos son elementos que se terminan transformando en HTML
    <li className="TodoItem">

      <span 
      className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      onClick={onChangeTodoState}>
        <DoneIcon/>
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
      
      <span 
      className="Icon Icon-delete"
      onClick={onDelete}>
        <DeleteIcon />
      </span>

    </li>
  );
}



export {TodoItem}
