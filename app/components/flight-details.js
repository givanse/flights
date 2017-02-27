import Ember from 'ember';

const FlightDetailsComponent = Ember.Component.extend({

  classNames: ['flight_details'],

  expand: false,

  totalStops: Ember.computed('flight.stops', function() {
    return this.get('flight.stops').length;
  }),

  actions: {

    expand: function() {
      this.set('expand', !this.get('expand'));
    },

    compare: function() {
      const flight = this.get('flight');
      this.sendAction('selectFlight', flight);
    }

  }

});


FlightDetailsComponent.reopenClass({
  positionalParams: ['flight'] 
});

export default FlightDetailsComponent;
