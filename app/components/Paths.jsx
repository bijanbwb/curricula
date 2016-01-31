import React from 'react';
import Path from './Path.jsx';

constant Paths = ({paths}) => {
  return (
    <div className="paths">{paths.map(path =>
      <Path className="path" key={path.id} path={path} />
    )}</div>
  );
}

Paths.propTypes = {
  paths: React.PropTypes.array
};

Paths.defaultProps = {
  paths: []
};

export default Paths;
