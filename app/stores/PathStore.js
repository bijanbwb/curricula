import uuid from 'node-uuid';
import alt from '../libs/alt';
import PathActions from '../actions/PathActions';
import update from 'react-addons-update';

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
      if (path.resources.indexOf(resourceId) >= 0) {
        path.resources = path.resources.filter(resource => resource !== resourceId);
      }

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
    const paths = this.paths;
    const sourcePath = paths.filter(path => {
      return path.resources.indexOf(sourceId) >= 0;
    })[0];
    const targetPath = paths.filter(path => {
      return path.resources.indexOf(targetId) >= 0;
    })[0];
    const sourceResourceIndex = sourcePath.resources.indexOf(sourceId);
    const targetResourceIndex = targetPath.resources.indexOf(targetId);

    if (sourcePath === targetPath) {
      // move at once to avoid complications
      sourcePath.resources = update(sourcePath.resources, {
        $splice: [
          [sourceResourceIndex, 1],
          [targetResourceIndex, 0, sourceId]
        ]
      });
    } else {
      // get rid of the source
      sourcePath.resources.splice(sourceResourceIndex, 1);
      // and move it to target
      targetPath.resources.splice(targetResourceIndex, 0, sourceId);
    }

    this.setState({paths});
  }
}

export default alt.createStore(PathStore, 'PathStore');
