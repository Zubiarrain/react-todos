import React from "react";

// Los hooks deben comenzar con use
function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
    
          let parsedItem;
  
          if (!localStorageItem) {
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
  
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, []);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName,JSON.stringify(newItem));
      
      setItem(newItem);
    };
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  };
  
export {useLocalStorage}

/* const defaultTodos = [
  {id:1, text: 'Cortar Cebolla', completed: true},
  {id:2, text: 'Tomar Falopa', completed: false},
  {id:3, text: 'Llorar por mi futuro', completed: false},
  {id:4, text: 'Flashar', completed: false},

]

localStorage.setItem(
  'TODOS_V1', JSON.stringify(defaultTodos)
)
*/
