// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 19.1.2.11
description: >
  Object.isExtensible.name is "isExtensible".
info: >
  Object.isExtensible ( O )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(Object.isExtensible.name, "isExtensible");

verifyNotEnumerable(Object.isExtensible, "name");
verifyNotWritable(Object.isExtensible, "name");
verifyConfigurable(Object.isExtensible, "name");

reportCompare(0, 0);
