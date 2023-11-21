import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import TodoList from "./TodoList";
import useTodo from "../hooks/useTodo";
import styles from "./todo.module.css";
import { Button } from "react-bootstrap";
import '../App.css';
const TodoForm = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const {todoItems,editIndex,addTodo,updateTodo,deleteTodo,setEdit} = useTodo();

  const onSubmit = (data) => {
    //check item is being edited
    if (editIndex !== null) {
      // Update existing todo item
      updateTodo(editIndex, data.text, data.dueDate);
    } else {
      // Add new todo item
      addTodo(data.text, data.dueDate);
    }
    // Reset the form after handling submission 
    reset();
  };

  //when user wants to edit todoitem 
  const handleEdit = (index) => {
    setEdit(index);
    setValue("text", todoItems[index].text);
    setValue("dueDate", todoItems[index].dueDate || "");
  };


  return (
    <div className='App'>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
            <div className="row">
              <div className="col">
                <label className="form-label">
                  New Task:
                  <input {...register("text", { required: true })} className={`form-control ${styles.input}`} />
                </label>
              </div>
              <div className="col">
                <label className="form-label">
                  Due Date:
                  <input {...register("dueDate")} type="date" className={`form-control ${styles.input}`} />
                </label>
              </div>
              <div className="col">
                <Button type="submit" variant="outline-primary" className={styles.button}>
                  {editIndex !== null ? "Edit" : "Add Your Task"}
                </Button>
  
              </div>
            </div>
          </form>
          <hr/>
      <TodoList
        todoItems={todoItems}
        handleEdit={handleEdit}
        handleDelete={deleteTodo}
      />
    </div>
  );
};

export default TodoForm;
