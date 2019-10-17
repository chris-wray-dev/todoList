import React from 'react';

const TodoList = ({ tasks, toggleComplete }) => {
  return (
    <ul>
      {tasks.map(task => {
        return (
          <li key={ task.name } onClick={ () => toggleComplete(task.name) }>
            { task.complete ? <p>✅</p> : <p>❌</p> }
            <p>{ task.name }</p>
            <p>{ task.dueDate }</p>
            <hr/>
          </li>
        )
      })}
    </ul>
  );
}

export default TodoList