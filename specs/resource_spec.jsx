import React from 'react';
import {
renderIntoDocument
} from 'react-addons-test-utils';
import TestBackend from 'react-dnd-test-backend';
import {DragDropContext} from 'react-dnd';
import assert from 'assert';
import Resource from 'app/components/Resource.jsx';

describe('Resource', () => {
  it('renders children', () => {
    const test = 'test';
    const ResourceContent = wrapInTestContext(Resource);
    const component = renderIntoDocument(
      <ResourceContent id="demo">{test}</ResourceContent>
    );

    assert.equal(component.props.children, test);
  });
});

// https://gaearon.github.io/react-dnd/docs-testing.html
function wrapInTestContext(DecoratedComponent) {
  @DragDropContext(TestBackend)

  class TestContextContainer extends React.Component {
    render() {
      return <DecoratedComponent {...this.props} />;
    }
  }

  return TestContextContainer;
}
