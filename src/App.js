import React from 'react';
import './App.css';
import TodoList from './components/TodoList'

class App extends React.Component {
  state = {
    tasks: [
      { name: 'call Vodafone', complete: false, dueDate: '2019-10-18' },
      { name: 'have a beer', complete: false, dueDate: '2019-10-18' },
      { name: 'learn python', complete: false, dueDate: '2019-10-18' }
    ]
  }

  toggleComplete = (taskName) => {
    this.setState(currentState => {
      const newTasks = currentState.tasks.map(task => {
        if (task.name === taskName) {
          task.complete = !task.complete;
        }
        return task;
      });
      return { tasks: newTasks }
    });
  }

  render() {
    return (
      <>
      <h1>To Do List</h1>
      <TodoList tasks={ this.state.tasks } toggleComplete={ this.toggleComplete }/>
      </>
    )
  }
}

export default App;