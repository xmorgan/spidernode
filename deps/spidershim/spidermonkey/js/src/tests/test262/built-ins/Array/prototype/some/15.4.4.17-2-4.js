// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-2-4
description: >
    Array.prototype.some - 'length' is an own data property that
    overrides an inherited data property on an array
---*/

        var arrProtoLen = 0;
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

            arrProtoLen = Array.prototype.length;
            Array.prototype.length = 0;
            Array.prototype[2] = 12;

assert([9, 11].some(callbackfn1), '[9, 11].some(callbackfn1) !== true');
assert.sameValue([9, 11].some(callbackfn2), false, '[9, 11].some(callbackfn2)');

reportCompare(0, 0);
