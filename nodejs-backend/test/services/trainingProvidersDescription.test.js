const assert = require('assert');
const app = require('../../src/app');

describe('\'trainingProvidersDescription\' service', () => {
  it('registered the service', () => {
    const service = app.service('trainingProvidersDescription');

    assert.ok(service, 'Registered the service (trainingProvidersDescription)');
  });
});
