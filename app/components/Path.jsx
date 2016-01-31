import AltContainer from 'alt-container';
import React from 'react';
import Resources from './Resources.jsx';
import ResourceActions from '../actions/ResourceActions';
import ResourceStore from '../stores/ResourceStore';

export default class Path extends React.Component {
  render() {
    const {path, ...props} = this.props;
    return (
      <div {...props}>
        <div className="path-header">
          <div className="path-add-resource">
            <button onClick={this.addResource}>+</button>
          </div>
          <div className="path-name">
            {path.name}
          </div>
        </div>
        <AltContainer
          stores={[ResourceStore]}
          inject={{
            resources: () => ResourceStore.getState().resources || []
          }}
        >
          <Resources onEdit={this.editResource} onDelete={this.deleteResource} />
        </AltContainer>
      </div>
    );
  }

  addResource() {
    ResourceActions.create({task: 'New Task'});
  }

  editResource(id, task) {
    ResourceActions.update({id, task});
  }

  deleteResource(id) {
    ResourceActions.delete(id);
  }
}
