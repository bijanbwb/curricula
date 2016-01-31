import React from 'react';
import Path from './Path.jsx';

export default ({paths}) => {
  return (
    <div className="paths">{paths.map(path =>
      <Path className="path" key={path.id} path={path} />
    )}</div>
  );
}
