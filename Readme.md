# Promisifier

    Turns any Async JS function into a Promise.

## Installation

    $ npm install promisifier

## Usage

    ```javascript
    var promisifier = require("promisifier");
    ```

    ### promisifier.asyncMethodToPromise(method,[arg1[, arg2[, ...]]])

    Promisify an Async function with arguments.

    ```javascript
    var promisifier = require("promisifier"),
        request = require("request);

    var promise = promisifier.asyncMethodToPromise(request.get, "http://google.com", options);

    promise.then(console.log);
    ```

    ### asyncMethodToPromiseWithArrayAsArgs()

