// mod1Spec.js
import chai from "chai";
import sinon from "sinon";

import * as mod1 from "./mod1";

const assert = chai.assert;

describe("test", function() {
  it("should correctly mock module method", () => {
    sinon.stub(mod1, "test").returns("pass");
    assert.strictEqual(mod1.test(), "pass");
  });
});

describe("the Module object", function() {
  it("should have a toStringTag symbol with the expected value", () => {
    assert.strictEqual(mod1[Symbol.toStringTag], "Module");
  });

  it("should use the toStringTag symbol", () => {
    const symbolString = mod1[Symbol.toStringTag];
    assert.strictEqual(
      Object.prototype.toString.call(mod1),
      `[object ${symbolString}]`
    );
  });
});
