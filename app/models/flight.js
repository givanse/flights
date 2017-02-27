import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('string'),
  airline: DS.attr('string'),
  takeoff: DS.attr(), 
  landing: DS.attr(), 
  stops: DS.attr(),
  price: DS.attr('number'),
  totalStops: Ember.computed('stops', function() {
    return this.get('stops').length;
  })
});
