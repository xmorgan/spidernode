// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-8-b-iii-1-17
description: >
    Array.prototype.reduce - element to be retrieved is own accessor
    property without a get function on an Array-like object
---*/

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (prevVal === undefined);
            }
        }

        var obj = { 1: 1, 2: 2, length: 3 };

        Object.defineProperty(obj, "0", {
            set: function () { },
            configurable: true
        });

        Array.prototype.reduce.call(obj, callbackfn);

assert(testResult, 'testResult !== true');

reportCompare(0, 0);
