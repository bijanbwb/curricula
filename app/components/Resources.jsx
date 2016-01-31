import React from 'react';
import Editable from './Editable.jsx';

export default ({resources, onValueClick, onEdit, onDelete}) => {
  return (
    <ul className="resources">{resources.map(resource =>
      <li className="resource" key={resource.id}>
        <Editable
          editing={resource.editing}
          value={resource.task}
          onValueClick={onValueClick.bind(null, resource.id)}
          onEdit={onEdit.bind(null, resource.id)}
          onDelete={onDelete.bind(null, resource.id)} />
      </li>
    )}</ul>
  );
}
