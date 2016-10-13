import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let fufill = (users) => {
      let userTimezones = {};
      users.content.forEach((user, idx) => {
        userTimezones[idx] = user._data.name;
      });
      return userTimezones;
    };
    let reject = () => {};
    return this.store.findAll('user').then(fufill, reject);
  }
});
