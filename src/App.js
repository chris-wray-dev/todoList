import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TaskAdder from './components/TaskAdder';

class App extends React.Component {
  state = {
    tasks: [
      { name: 'call Vodafone', complete: false, dueDate: '2019-10-18' },
      { name: 'have a beer', complete: false, dueDate: '2019-10-18' },
      { name: 'learn python', complete: false, dueDate: '2019-10-18' }
    ]
  };

  toggleComplete = taskName => {
    this.setState(currentState => {
      const newTasks = currentState.tasks.map(task => {
        if (task.name === taskName) {
          task.complete = !task.complete;
        }
        return task;
      });
      return { tasks: newTasks };
    });
  };

  // function to submit (preventDefault, clear form, pass state back to app)
  addTask = newTask => {
    this.setState(currentState => {
      const newTasks = [...currentState.tasks, newTask];
      return {
        tasks: newTasks
      };
    });
  };

  render() {
    return (
      <>
        <h1>To Do List</h1>
        <TodoList
          tasks={this.state.tasks}
          toggleComplete={this.toggleComplete}
        />
        <TaskAdder addTask={this.addTask} />
      </>
    );
  }
}

export default App;
