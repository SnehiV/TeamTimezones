import Ember from 'ember';
import timezones from '../util/timezoneList';

export default Ember.Controller.extend({
  timezones: timezones,
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
