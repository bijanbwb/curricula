import uuid from 'node-uuid';
import React from 'react';
import Resources from './Resources.jsx';
import ResourceActions from '../actions/ResourceActions';
import ResourceStore from '../stores/ResourceStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = ResourceStore.getState();
  }

  componentDidMount() {
    ResourceStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    ResourceStore.unlisten(this.storeChanged);
  }

  storeChanged = (state) => {
    // Without a property initializer `this` wouldn't
    // point at the right context because it defaults to
    // `undefined` in strict mode.
    this.setState(state);
  };

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

  addResource() {
    ResourceActions.create({task: 'New task'});
  }

  editResource(id, task) {
    ResourceActions.update({id, task});
  }

  deleteResource(id) {
    ResourceActions.delete(id);
  }
}
