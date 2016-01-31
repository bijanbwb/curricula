import uuid from 'node-uuid';
import alt from '../libs/alt';
import ResourceActions from '../actions/ResourceActions';

class ResourceStore {
  constructor() {
    this.bindActions(ResourceActions);

    this.resources = [];

    this.exportPublicMethods({
      getResourcesByIds: this.getResourcesByIds.bind(this)
    });
  }

  create(resource) {
    const resources = this.resources;

    resource.id = uuid.v4();

    this.setState({
      resources: resources.concat(resource)
    });

    return resource;
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

  getResourcesByIds(ids) {
    // 1. Make sure we are operating on an array and
    // map over the ids
    // [id, id, id, ...] -> [[Resource], [], [Resource], ...]
    return (ids || []).map(
      // 2. Extract matching resources
      // [Resource, Resource, Resource] -> [Resource, ...] (match) or [] (no match)
      id => this.resources.filter(resource => resource.id === id)
    // 3. Filter out possible empty arrays and get resources
    // [[Resource], [], [Resource]] -> [[Resource], [Resource]] -> [Resource, Resource]
    ).filter(a => a.length).map(a => a[0]);
  }
}

export default alt.createStore(ResourceStore, 'ResourceStore');
