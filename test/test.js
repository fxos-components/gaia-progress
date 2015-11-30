/*global window,assert,suite,setup,teardown,sinon,test*/
/*jshint esnext:true*/

suite('GaiaProgress', function() {
  'use strict';

  var GaiaProgress = window['gaia-progress'];
  var viewPortWidth = 320;

  setup(function() {
    this.sandbox = sinon.sandbox.create();
    this.container = document.createElement('div');
    this.container.style.width = viewPortWidth + 'px';
    document.body.appendChild(this.container);
  });

  teardown(function() {
    this.sandbox.restore();
    this.container.remove();
  });

  test('The bar should not be so wide it can\'t animate off main thread',
  function() {
    var progress = document.createElement('gaia-progress');
    this.container.appendChild(progress);
    var bar = progress.shadowRoot.querySelector('.bar');

    // Gecko allows 1/8th of the viewport on each side
    var margin = 2 * (viewPortWidth / 8)
    var width = bar.getBoundingClientRect().width;

    assert.isTrue(width <= viewPortWidth + margin);
  });
});
