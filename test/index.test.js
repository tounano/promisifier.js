var moduleToTest  = "../promisifier";
var chai        = require("chai");
var sinon       = require("sinon");
var sinonChai   = require("sinon-chai");

chai.use(sinonChai)
var should = chai.should()
var expect = chai.expect

var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised)
describe("promisifier", function () {
  var promisifier = require(moduleToTest)
  var spy
  var mock

  beforeEach(function () {
    spy = sinon.spy()
    mock = sinon.mock()
  })

  describe("#asyncMethodToPromise()", function () {
    it("should return a promise", function () {
      promisifier.asyncMethodToPromise(spy).should.have.property('then')
    })
    it("should call the callback that is passed as arg 1", function () {
      promisifier.asyncMethodToPromise(spy)
      spy.should.be.called
    })
    it("should reject the promise when error happens in the callback", function (done) {
      promisifier.asyncMethodToPromise(createStubForAsyncMethod([new Error]))
        .should.be.rejected.and.notify(done)
    })
    it("should resolve the promise with the 2nd argument from result callback", function (done) {
      promisifier.asyncMethodToPromise(createStubForAsyncMethod([null, "GOOD"]))
        .should.become("GOOD").and.notify(done);
    })
    it("should work with 2 args as well", function () {
      promisifier.asyncMethodToPromise(mock.withArgs(1,2),1,2)
      mock.verify()
    })
  })
  describe("#asyncMethodToPromiseWithArrayAsArgs()", function () {
    it("should return a promise", function () {
      promisifier.asyncMethodToPromiseWithArrayAsArgs(createStubForAsyncMethod([null]))
        .should.have.property("then")
    })
    it("should pass the arguments from the array to the async method", function () {
      promisifier.asyncMethodToPromiseWithArrayAsArgs(mock.withArgs(1,2), [1,2])
      mock.verify()
    })
  })

  function createStubForAsyncMethod(argsToPassToResultCallback) {
    return function (cb) {
      var args = Array.prototype.slice.call(arguments)
      args.pop().apply(this, argsToPassToResultCallback)
    }
  }
})