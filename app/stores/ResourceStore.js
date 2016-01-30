import uuid from 'node-uuid';
import alt from '../libs/alt';
import ResourceActions from '../actions/ResourceActions';

class ResourceStore {
  constructor() {
    this.bindActions(ResourceActions);
    this.resources = [];
  }

  create(resource) {
    const resources = this.resources;

    resource.id = uuid.v4();
    this.setState({
      resources: resources.concat(resource)
    });
  }

  update(updatedResource) {
    const resources = this.resources.map(resource => {
      if (resource.id === updatedResource.id) {
        return Object.assign({}, resource, updatedResource);
      }
      return resource;
    });

    // This is same as `this.setState({resources: resources})`
    this.setState({resources});
  }

  delete(id) {
    this.setState({
      resources: this.resources.filter(resource => resource.id !== id)
    });
  }
}

export default alt.createStore(ResourceStore, 'ResourceStore');
