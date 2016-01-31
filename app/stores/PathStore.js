import uuid from 'node-uuid';
import alt from '../libs/alt';
import PathActions from '../actions/PathActions';

class PathStore {
  constructor() {
    this.bindActions(PathActions);
    this.paths = [];
  }

  create(path) {
    const paths = this.paths;
    path.id = uuid.v4();
    path.resources = path.resources || [];
    this.setState({
      paths: paths.concat(path)
    });
  }
}

export default alt.createStore(PathStore, 'PathStore');
