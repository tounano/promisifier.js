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
    request = require("request");

var promise = promisifier.asyncMethodToPromise(request.get, "http://google.com", options);

promise.then(console.log);
```

### asyncMethodToPromiseWithArrayAsArgs(method, args)

Pass args as array.

```javascript
var promisifier = require("promisifier"),
    request = require("request");

var args = [
    "http://google.com",
    {}
];

var promise = promisifier.asyncMethodToPromise(request.get, args);

promise.then(console.log);
```