import React from 'react';

class TaskAdder extends React.Component {
  state = { name: '', dueDate: '', complete: false };

  handleChange = event => {
    const key = event.target.id;
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { addTask } = this.props;
    addTask(this.state);
    this.setState({ name: '', dueDate: '', complete: false });
  };

  render() {
    return (
      <form className="form" action="" onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Task name:
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="dueDate">
          Due Date:
          <input
            type="date"
            name="dueDate"
            id="dueDate"
            value={this.state.dueDate}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add task</button>
      </form>
    );
  }
}

export default TaskAdder;
