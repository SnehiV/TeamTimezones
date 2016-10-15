import Ember from 'ember';
import timezones from '../util/timezoneList';

export default Ember.Controller.extend({
  timezones: timezones,
  timezone: timezones[138],
  clock: Ember.inject.service('my-shiny-new-clock'),

  iso: Ember.computed('clock.date', function() {
    return this.get('clock.date').toISOString().slice(11, 16);
  }),
  time(offset){
    let time = Ember.computed('iso', function() {
      return this.get('iso') + offset;
    });
  },
  actions: {
    chooseTimezone(selectedTimezone) {
      this.set('timezone', selectedTimezone);
      const currentUser = this.get('session').content.currentUser;
      let fufill = (users) => {
        let queryResult = users.content.find((user) => {
          return user._data.name === currentUser.displayName;
        });

        let newRecord = () => {
          var newUser = this.store.createRecord('user', {
            name: currentUser.displayName,
            photoUrl: currentUser.photoURL,
            timezone: selectedTimezone.timezone,
            offset: selectedTimezone.offset,
            timestamp: new Date().getTime()
          });
          newUser.save();
        };
        if (queryResult === undefined) {
          newRecord();
        } else {
          this.store.find('user', queryResult.id).then((entry) => {
            entry.destroyRecord();
            newRecord();
          });
        }
      };

      let reject = () => {};

      this.store.findAll('user').then(fufill, reject);
    }
  }
});
