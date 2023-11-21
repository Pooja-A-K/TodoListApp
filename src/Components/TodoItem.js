import React from "react";
import styles from './todoItem.module.css';
import editImage from './img/edit.png';
import deleteImage from './img/delete.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const TodoItem = ({ item, index, handleEdit, handleDelete }) => {
  return (
   
    <table className='table table-border'>
      <thead>
        
        <tr>
          <th>Todo Task</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={styles.itemText}>
              {index + 1} {item.text}
            </div>
            {item.dueDate && (
              <div className={styles.dueDate}>
                <span>Due Date:</span> {item.dueDate}
              </div>
            )}
          </td>
          <td>
            <Button onClick={() => handleEdit(index)} variant="outline-warning">
              <img src={editImage} alt="Edit" title="Edit" style={{ width: '25px', height: '25px' }} />
            </Button>
          </td>
          <td>
            <Button onClick={() => handleDelete(index)} variant="outline-danger">
              <img src={deleteImage} alt="Delete" title="Delete" style={{ width: '25px', height: '25px' }} />
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
    
  );
};

export default TodoItem;
