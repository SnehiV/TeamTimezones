import Ember from 'ember';

export default Ember.Component.extend({
  willRender() {
    this.set('users', {"e": 3, "h": 4});
  }
});
