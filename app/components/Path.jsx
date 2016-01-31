import AltContainer from 'alt-container';
import React from 'react';
import Resources from './Resources.jsx';
import ResourceActions from '../actions/ResourceActions';
import ResourceStore from '../stores/ResourceStore';
import PathActions from '../actions/PathActions';

export default class Path extends React.Component {
  constructor(props) {
    super(props);
    const id = props.path.id;
    this.addResource = this.addResource.bind(this, id);
    this.deleteResource = this.deleteResource.bind(this, id);
  }

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
            resources: () => ResourceStore.getResourcesByIds(path.resources)
          }}
        >
          <Resources onEdit={this.editResource} onDelete={this.deleteResource} />
        </AltContainer>
      </div>
    );
  }

  addResource(pathId, e) {
    const resource = ResourceActions.create({task: 'New Task'});

    PathActions.attachToPath({
      resourceId: resource.id,
      pathId
    });
  }

  editResource(id, task) {
    ResourceActions.update({id, task});
  }

  deleteResource(pathId, resourceId) {
    PathActions.detachFromPath({pathId, resourceId});
    ResourceActions.delete(resourceId);
  }
}
