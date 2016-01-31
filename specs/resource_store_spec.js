import assert from 'assert';
import ResourceActions from 'app/actions/ResourceActions';
import ResourceStore from 'app/stores/ResourceStore';
import alt from 'app/libs/alt';

describe('ResourceStore', () => {
  beforeEach(() => {
    alt.flush();
  });

  it('creates resources', () => {
    const task = 'test';

    ResourceActions.create({task});

    const state = ResourceStore.getState();

    assert.equal(state.resources.length, 1);
    assert.equal(state.resources[0].task, task);
  });

  it('updates resources', () => {
    const task = 'test';
    const updatedTask = 'test 2';

    ResourceActions.create({task});

    const resource = ResourceStore.getState().resources[0];

    ResourceActions.update({...resource, task: updatedTask});

    const state = ResourceStore.getState();

    assert.equal(state.resources.length, 1);
    assert.equal(state.resources[0].task, updatedTask);
  });

  it('deletes resources', () => {
    ResourceActions.create({task: 'test'});

    const resource = ResourceStore.getState().resources[0];

    ResourceActions.delete(resource.id);

    const state = ResourceStore.getState();

    assert.equal(state.resources.length, 0);
  });

  it('gets resources', () => {
    const task = 'test';

    ResourceActions.create({task: task});

    const resource = ResourceStore.getState().resources[0];

    const resources = ResourceStore.getResourcesByIds([resource.id]);

    assert.equal(resources.length, 1);
    assert.equal(resources[0].task, task);
  });
});
