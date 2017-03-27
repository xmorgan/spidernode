// This file was procedurally generated from the following sources:
// - src/annex-b-fns/global-exsting-fn-update.case
// - src/annex-b-fns/global/switch-case.template
/*---
description: Variable-scoped binding is updated following evaluation (Function declaration in the `case` clause of a `switch` statement in the global scope)
esid: sec-web-compat-globaldeclarationinstantiation
es6id: B.3.3.2
flags: [generated, noStrict]
info: |
    B.3.3.2 Changes to GlobalDeclarationInstantiation
    [...]
    c. When the FunctionDeclaration f is evaluated, perform the following steps
       in place of the FunctionDeclaration Evaluation algorithm provided in
       14.1.21:

       i. Let genv be the running execution context's VariableEnvironment.
       ii. Let genvRec be genv's EnvironmentRecord.
       ii. Let benv be the running execution context's LexicalEnvironment.
       iv. Let benvRec be benv's EnvironmentRecord.
       v. Let fobj be ! benvRec.GetBindingValue(F, false).
       vi. Perform ? genvRec.SetMutableBinding(F, fobj, false).
       vii. Return NormalCompletion(empty).
---*/

switch (1) {
  case 1:
    function f() { return 'inner declaration'; }
}

assert.sameValue(typeof f, 'function');
assert.sameValue(f(), 'inner declaration');

function f() {
  return 'outer declaration';
}

reportCompare(0, 0);
