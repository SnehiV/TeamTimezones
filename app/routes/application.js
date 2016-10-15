import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function() {
      this.get('session').open('firebase', {
        provider: "google",
        settings: {scope: 'profile'}
      }).then(() => {
        this.transitionTo('users');
      });
    },
    signOut: function() {
      this.transitionTo('home');
      this.store.unloadAll();
      this.get('session').close();
    }
  }
});
