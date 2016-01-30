import uuid from 'node-uuid';
import alt from '../libs/alt';
import ResourceActions from '../actions/ResourceActions';

class ResourceStore {
  constructor() {
    this.bindActions(ResourceActions);
    this.resources = [];
  }
  create(resource) {
  }
  update(updatedResource) {
  }
  delete(id) {
  }
}

export default alt.createStore(ResourceStore, 'ResourceStore');
