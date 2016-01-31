import AltContainer from 'alt-container';
import React from 'react';
import Resources from './Resources.jsx';
import ResourceActions from '../actions/ResourceActions';
import ResourceStore from '../stores/ResourceStore';
import PathActions from '../actions/PathActions';
import Editable from './Editable.jsx';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const resourceTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    if (!targetProps.path.resources.length) {
      PathActions.attachToPath({
        pathId: targetProps.path.id,
        resourceId: sourceId
      });
    }
  }
};

@DropTarget(ItemTypes.RESOURCE, resourceTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))

export default class Path extends React.Component {
  constructor(props) {
    super(props);
    const id = props.path.id;
    this.addResource = this.addResource.bind(this, id);
    this.deleteResource = this.deleteResource.bind(this, id);
    this.editName = this.editName.bind(this, id);
    this.deletePath = this.deletePath.bind(this, id);
    this.activatePathEdit = this.activatePathEdit.bind(this, id);
  }

  render() {
    const {connectDropTarget, path, ...props} = this.props;

    return connectDropTarget(
      <div {...props}>
        <div className="path-header" onClick={this.activatePathEdit}>
          <div className="path-add-resource">
            <button onClick={this.addResource}>+</button>
          </div>
          <Editable className="path-name" editing={path.editing}
            value={path.name} onEdit={this.editName} />
          <div className="path-delete">
             <button onClick={this.deletePath}>x</button>
          </div>
        </div>
        <AltContainer
          stores={[ResourceStore]}
          inject={{
            resources: () => ResourceStore.getResourcesByIds(path.resources)
          }}
        >
          <Resources
           onValueClick={this.activateResourceEdit}
           onEdit={this.editResource}
           onDelete={this.deleteResource} />
        </AltContainer>
      </div>
    );
  }

  addResource(pathId, e) {
    e.stopPropagation();

    const resource = ResourceActions.create({task: 'New Task'});

    PathActions.attachToPath({
      resourceId: resource.id,
      pathId
    });
  }

  editResource(id, task) {
    ResourceActions.update({id, task, editing: false});
  }

  deleteResource(pathId, resourceId) {
    ResourceActions.delete(resourceId);
  }

  editName(id, name) {
    PathActions.update({id, name, editing: false});
  }

  deletePath(id) {
    PathActions.delete(id);
  }

  activatePathEdit(id) {
    PathActions.update({id, editing: true});
  }

  activateResourceEdit(id) {
    ResourceActions.update({id, editing: true});
  }
}
