import uuid from 'node-uuid';
import AltContainer from 'alt-container';
import React from 'react';
import Resources from './Resources.jsx';
import ResourceActions from '../actions/ResourceActions';
import ResourceStore from '../stores/ResourceStore';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button className="add-resource" onClick={this.addResource}>+</button>
        <AltContainer
          stores={[ResourceStore]}
          inject={{
            resources: () => ResourceStore.getState().resources
          }}
        >
          <Resources onEdit={this.editResource} onDelete={this.deleteResource} />
        </AltContainer>
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
