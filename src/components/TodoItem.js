/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const {
    todo, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;
  const { title, completed, id } = todo;

  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    } else if (event.target.type === 'button') {
      setEditing(false);
    }
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>

      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        style={viewMode}
        onChange={() => handleChangeProps(id)}
      />
      <button type="button" style={editMode} onClick={handleUpdatedDone}>Done</button>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <button type="button" onClick={() => deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
