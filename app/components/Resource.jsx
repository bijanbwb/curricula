import React from 'react';
import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const resourceSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  }
};

const resourceTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    if (sourceId !== targetId) {
      targetProps.onMove({sourceId, targetId});
    }
  }
};

@DragSource(ItemTypes.RESOURCE, resourceSource, (connect) => ({
  connectDragSource: connect.dragSource()
}))

@DropTarget(ItemTypes.RESOURCE, resourceTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
}))

export default class Resource extends React.Component {
  render() {
    const {connectDragSource, connectDropTarget,
      id, onMove, ...props} = this.props;
    return connectDragSource(connectDropTarget(
      <li {...props}>{props.children}</li>
    ));
  }
}
