import React from 'react';
import Resource from './Resource.jsx';

export default ({resources, onEdit, onDelete}) => {
  return (
    <ul className="resources">{resources.map(resource =>
      <li className="resource" key={resource.id}>
        <Resource
          task={resource.task}
          onEdit={onEdit.bind(null, resource.id)}
          onDelete={onDelete.bind(null, resource.id)} />
      </li>
    )}</ul>
  );
}
