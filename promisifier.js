var when = require("when");

function asyncMethodToPromise (asyncMethod) {
  var args = Array.prototype.slice.call(arguments)
  var deferred = when.defer()

  args.push(resultCallback)
  callAsyncMethod(args.shift(), args)

  return deferred.promise;

  function callAsyncMethod(method, args) {
    method.apply(this, args)
  }

  function resultCallback (err) {
    if (err)
      return deferred.reject(err)

    return deferred.resolve(arguments[1])
  }
}

function asyncMethodToPromiseWithArrayAsArgs(asyncMethod, args) {
  var a = [asyncMethod].concat(args);
  return asyncMethodToPromise.apply(this, a);
}

module.exports.asyncMethodToPromise = asyncMethodToPromise;
module.exports.asyncMethodToPromiseWithArrayAsArgs = asyncMethodToPromiseWithArrayAsArgs;