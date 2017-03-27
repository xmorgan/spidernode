// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If the argument len is not a Number, then the length property of
    the newly constructed object is set to 1 and the 0 property of
    the newly constructed object is set to len
es5id: 15.4.2.2_A2.3_T3
description: Checking for boolean primitive and Boolean object
---*/

var x = new Array("1");

//CHECK#1 
if (x.length !== 1) {
  $ERROR('#1: var x = new Array("1"); x.length === 1. Actual: ' + (x.length));
}

//CHECK#2
if (x[0] !== "1") {
  $ERROR('#2: var x = new Array("1"); x[0] === "1". Actual: ' + (x[0]));
}

var obj = new String("0");
var x = new Array(obj);

//CHECK#3 
if (x.length !== 1) {
  $ERROR('#3: var obj = new String("0"); var x = new Array(obj); x.length === 1. Actual: ' + (x.length));
}

//CHECK#4
if (x[0] !== obj) {
  $ERROR('#4: var obj = new String("0"); var x = new Array(obj); x[0] === obj. Actual: ' + (x[0]));
}

reportCompare(0, 0);
