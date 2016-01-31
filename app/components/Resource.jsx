import React from 'react';
import {DragSource} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const resourceSource = {
  beginDrag(props) {
    console.log('begin dragging resource', props);
    return {};
  }
};

@DragSource(ItemTypes.RESOURCE, resourceSource, (connect) => ({
  connectDragSource: connect.dragSource()
}))

export default class Resource extends React.Component {
  render() {
    const {connectDragSource, id, onMove, ...props} = this.props;
    return connectDragSource(
        <li {...props}>{props.children}</li>
        );
  }
}
