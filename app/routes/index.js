import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._super(...arguments);
    this.replaceWith('home');
  }
  // afterModel(model, transition){
  //   if (this.get('session').content.curren)
  // }
});
