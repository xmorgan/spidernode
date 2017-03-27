// |reftest| skip-if(!this.hasOwnProperty('SharedArrayBuffer')) -- SharedArrayBuffer not yet riding the trains
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-typedarray-buffer-byteoffset-length
description: >
  Throws a RangeError if ToInteger(byteOffset) modulo elementSize is not 0
info: >
  22.2.4.5 TypedArray ( buffer [ , byteOffset [ , length ] ] )

  This description applies only if the TypedArray function is called with at
  least one argument and the Type of the first argument is Object and that
  object has an [[ArrayBufferData]] internal slot.

  ...
  10. If offset modulo elementSize ≠ 0, throw a RangeError exception.
  ...
includes: [testTypedArray.js]
features: [SharedArrayBuffer]
---*/

var buffer = new SharedArrayBuffer(8);

testWithTypedArrayConstructors(function(TA) {
  if (TA.BYTES_PER_ELEMENT === 1) {
    // Impossible to trigger this step here.
    return;
  }

  assert.throws(RangeError, function() {
    new TA(buffer, 7);
  });
});

reportCompare(0, 0);
