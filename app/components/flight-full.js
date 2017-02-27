import Ember from 'ember';
import RenderTelemetry from 'flights/mixins/render-telemetry';

const FlightFullComponent = Ember.Component.extend(RenderTelemetry, {

  classNames: ['flight_full']

});

FlightFullComponent.reopenClass({
  positionalParams: ['flight'] 
});

export default FlightFullComponent;
