/*global window,assert,suite,setup,teardown,sinon,test*/
/*jshint esnext:true*/

suite('GaiaProgress', function() {
  'use strict';

  var GaiaProgress = window['gaia-progress'];

  setup(function() {
    this.sandbox = sinon.sandbox.create();
    this.container = document.createElement('div');
  });

  teardown(function() {
    this.sandbox.restore();
    this.container.remove();
  });

  test('First test', function() {

  });
});