import Ember from 'ember';

export default Ember.Route.extend({
  // emberfire google authentication using the torii adapter
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function() {
      this.get('session').open('firebase', {
        provider: "google",
        settings: {scope: 'profile'}
      }).then(() => {
        this.transitionTo('home');
      });
    },
    signOut: function() {
      this.store.unloadAll();
      this.get('session').close().then(() => (this.transitionTo('index')));
    }
  }
});
