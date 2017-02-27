import Ember from 'ember';
import RenderTelemetryMixin from 'flights/mixins/render-telemetry';
import { module, test } from 'qunit';

module('Unit | Mixin | render telemetry');

// Replace this with your real tests.
test('it works', function(assert) {
  let RenderTelemetryObject = Ember.Object.extend(RenderTelemetryMixin);
  let subject = RenderTelemetryObject.create();
  assert.ok(subject);
});
