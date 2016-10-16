import Ember from 'ember';
import timezones from '../util/timezoneList';

export default Ember.Controller.extend({
  // this property give the power select element has access to the timezone list
  timezones: timezones,
  actions: {
    // action that handles the user selecting a timezone. Since records can not be stored in
    // the database with custom keys using Emberfire, the records need to be checked if the current
    // user has a previous record in the databse and if so, delete that record and create a
    // new one with the new timeone.
    chooseTimezone(selectedTimezone) {
      this.set('timezone', selectedTimezone);
      const currentUser = this.get('session').content.currentUser;
      // success callback for the database query
      let fufill = (users) => {

        // checking the database entries against the current users's name
        let queryResult = users.content.find((user) => {
          return user._data.name === currentUser.displayName;
        });
      // fucntion to create a new record
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
        // if there is no previous, create a new record, and if there is,
        // delete the previous record and create a new one.
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
      this.store.findAll('user').then(fufill, reject).then(() => {
        // Was not sure how to have the user view update after creating a record. Since this is
        // the controller and not the route, I can't call this.refresh() so I instead transitionToRoute
        // to the root applcaition route which will immediatley redirect back to the users route.
        // the timeout allows time for the data to be recorded and model updated.
        window.setTimeout(() => {this.transitionToRoute('application');}, 600);
      });
    }
  }
});
