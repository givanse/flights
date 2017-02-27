import Ember from 'ember';

/**
 * Ember Component Lifecycle documentation:
 * https://guides.emberjs.com/v2.11.0/components/the-component-lifecycle/
 *
 */

export default Ember.Mixin.create({

  didInsertElement: function() {
    this._super(...arguments);
    console.debug(`${this.constructor} didInsertElement ${this.elementId}`);
  },

  didRender: function() {
    this._super(...arguments);
    console.debug(`${this.constructor} didRender ${this.elementId}`);
  },

  didUpdate: function() {
    this._super(...arguments);
    console.debug(`${this.constructor} didUpdate ${this.elementId}`);
  }

});
