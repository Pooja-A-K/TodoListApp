import { useState } from "react";

const useTodo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = (text, dueDate) => {
    setTodoItems((prevItems) => [...prevItems, { text, dueDate }]);
  };

  const updateTodo = (index, text, dueDate) => {
    const updatedTodoItems = [...todoItems];
    updatedTodoItems[index] = { text, dueDate };
    setTodoItems(updatedTodoItems);
    setEditIndex(null);
  };

  const deleteTodo = (index) => {
    const updatedTodoItems = [...todoItems];
    updatedTodoItems.splice(index, 1);
    setTodoItems(updatedTodoItems);
  };

  const setEdit = (index) => {
    setEditIndex(index);
  };

  return {
    todoItems,
    editIndex,
    addTodo,
    updateTodo,
    deleteTodo,
    setEdit,
  };
};

export default useTodo;
