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

  update(updatedPath) {
    const paths = this.paths.map(path => {
      if (path.id === updatedPath.id) {
        return Object.assign({}, path, updatedPath);
      }

      return path;
    });

    this.setState({paths});
  }

  delete(id) {
    this.setState({
      paths: this.paths.filter(path => path.id !== id)
    });
  }

  attachToPath({pathId, resourceId}) {
    const paths = this.paths.map(path => {
      if (path.id === pathId) {
        if (path.resources.indexOf(resourceId) === -1) {
          path.resources.push(resourceId);
        } else {
          console.warn('Already attached resource to path', paths);
        }
      }
      return path;
    });

    this.setState({paths});
  }

  detachFromPath({pathId, resourceId}) {
    const paths = this.paths.map(path => {
      if (path.id === pathId) {
        path.resources = path.resources.filter(resource => resource !== resourceId);
      }
      return path;
    });

    this.setState({paths});
  }

  move({sourceId, targetId}) {
    console.log(`source: ${sourceId}, target: ${targetId}`);
  }
}

export default alt.createStore(PathStore, 'PathStore');
