import React from 'react';
import Editable from './Editable.jsx';
import Resource from './Resource.jsx';
import PathActions from '../actions/PathActions';

const Resources = ({resources, onValueClick, onEdit, onDelete}) => {
  return (
    <ul className="resources">{resources.map(resource =>
      <Resource className="resource" id={resource.id} key={resource.id}
        onMove={PathActions.move}>
      <Editable
        editing={resource.editing}
        value={resource.task}
        onValueClick={onValueClick.bind(null, resource.id)}
        onEdit={onEdit.bind(null, resource.id)}
        onDelete={onDelete.bind(null, resource.id)} />
      </Resource>
    )}</ul>
  );
}

Resources.propTypes = {
  resources: React.PropTypes.array,
  onEdit: React.PropTypes.func,
  onDelete: React.PropTypes.func,
  onValueClick: React.PropTypes.func
};

Resources.defaultProps = {
  resources: [],
  onEdit: () => {}
};

export default Resources;
