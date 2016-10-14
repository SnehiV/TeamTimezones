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
      }).then((data) => {
        window.currentUser = data.currentUser;
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
