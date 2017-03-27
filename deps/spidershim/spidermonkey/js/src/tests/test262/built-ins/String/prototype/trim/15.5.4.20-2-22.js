// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-2-22
description: >
    String.prototype.trim - argument 'this' is a number that converts
    to a string (value is 1e-6)
---*/

assert.sameValue(String.prototype.trim.call(1e-6), "0.000001", 'String.prototype.trim.call(1e-6)');

reportCompare(0, 0);
