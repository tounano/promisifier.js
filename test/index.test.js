var chai        = require("chai");
var sinon       = require("sinon");
var sinonChai   = require("sinon-chai");
var when        = require("when");

chai.use(sinonChai);
var should = chai.should();
var expect = chai.expect;

var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

describe("Promisifier", function () {
  it("should pass the first test without a problem", function () {
    
  })
})