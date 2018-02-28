# sinon issue 1711

```shell
npm install
npm test

  test
    1) should correctly mock module method


  0 passing (34ms)
  1 failing

  1) test
       should correctly mock module method:
     TypeError: Cannot delete property 'test' of [object Module]
      at wrapMethod (node_modules/sinon/lib/sinon/util/core/wrap-method.js:99:27)
      at Proxy.stub (node_modules/sinon/lib/sinon/stub.js:60:44)
      at Context.it (mod1spec.js:11:11)
```

