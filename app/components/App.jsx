import uuid from 'node-uuid';
import React from 'react';
import Resources from './Resources.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Build Things!'
        }
      ]
    };
  }

  render() {
    const resources = this.state.resources;

    return (
      <div>
        <button className="add-resource" onClick={this.addResource}>+</button>
        <Resources resources={resources}
          onEdit={this.editResource}
          onDelete={this.deleteResource} />
      </div>
    );
  }

  addResource = () => {
    this.setState({
      resources: this.state.resources.concat([{
        id: uuid.v4(),
        task: 'New Task'
      }])
    });
  };

  editResource = (id, task) => {
    const resources = this.state.resources.map(resource => {
      if (resource.id === id && task) {
        resource.task = task;
      }

      return resource;
    });

    this.setState({resources});
  };

  deleteResource = (id) => {
    this.setState({
      resources: this.state.resources.filter(resource => resource.id !== id)
    });
  };
}
