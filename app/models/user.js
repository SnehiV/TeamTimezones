import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  photoUrl: DS.attr('string'),
  timezone: DS.attr('string')
});
