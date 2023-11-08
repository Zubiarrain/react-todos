import * as React from 'react';
import './TodoSearchComboBox.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { TodoContext } from '../TodoContext';

function TodoSearchComboBox() {
 
  const {
      todos,
      searchValue,
      setSearchValue
  } = React.useContext(TodoContext)

  return (
    <div className='Container'>
      <Autocomplete
      disablePortal
      className='TodoSearchComboBox'
      onChange={(e) => {
        setSearchValue(e.target.textContent);
      }}
      options={todos.map(todo => todo.text)}
      sx={{ width: 300 }}
      renderInput={
        (params) => 
          <TextField
          className='TodoSearchComboBox-TextField'
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          {...params} 
          label="ToDo"
          />
      }
      />
    </div>
    
  );
}

export {TodoSearchComboBox}