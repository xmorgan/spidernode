// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Global object has properties such as built-in objects such as
    Math, String, Date, parseInt, etc
es5id: 10.2.3_A1.1_T1
description: Global execution context - Value Properties
---*/

//CHECK#1
if ( NaN === null ) {
  $ERROR("#1: NaN === null");
}

//CHECK#2
if ( Infinity === null ) {
  $ERROR("#2: Infinity === null");
}

//CHECK#3
if ( undefined === null ) {
  $ERROR("#3: undefined === null");
}

reportCompare(0, 0);
