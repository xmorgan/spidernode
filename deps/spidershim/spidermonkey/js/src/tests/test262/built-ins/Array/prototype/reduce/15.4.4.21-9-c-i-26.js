// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-c-i-26
description: >
    Array.prototype.reduce - This object is the Arguments object which
    implements its own property get method (number of arguments equals
    number of parameters)
---*/

        var testResult = false;
        var initialValue = 0;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 2) {
                testResult = (curVal === 2);
            }
        }

        var func = function (a, b, c) {
            Array.prototype.reduce.call(arguments, callbackfn, initialValue);
        };

        func(0, 1, 2);

assert(testResult, 'testResult !== true');

reportCompare(0, 0);
