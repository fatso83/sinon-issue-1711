// mod1Spec.js
import chai from 'chai';
import sinon from 'sinon';

import * as mod1 from './mod1';

const assert = chai.assert;

describe('test', function () {
  it('should correctly mock module method', () => {
    sinon.stub(mod1, 'test').returns('pass');
    assert.strictEqual(mod1.test(), 'pass');
  });
});