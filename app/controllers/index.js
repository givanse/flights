import Ember from 'ember';

export default Ember.Controller.extend({

  sortKey: 'airline',

  flights: Ember.computed('model', 'sortKey', function() {
    const sortKey = this.get('sortKey');
    return this.get('model').sortBy(sortKey);
  }),

  init: function() {
    this._super(...arguments);
    this.get('setInitialFlightsHack');
  },

  setInitialFlightsHack: Ember.computed('model', function() {
    if (!this.get('model')) {
      return;
    }
    debugger;

    this.set('flightA', this.get('model').objectAt(0));
    this.set('flightB', this.get('model').objectAt(1));
    return null;
  }),

  flightA: null,

  flightB: null,

  actions: {

    sort: function(sortKey) {
      this.set('sortKey', sortKey);
    },

    selectFlight: function(flight) {
      this.set('flightB', flight);
    }

  }

});
