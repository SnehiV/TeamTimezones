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
        window.this = this.get('session'); 
          let newUser = this.store.createRecord('user', {
            name: data.currentUser.displayName,
            photoUrl: data.currentUser.photoURL
          });
          newUser.save();
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
