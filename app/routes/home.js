import Ember from 'ember';
export default Ember.Route.extend({
  // Extracting data from the databse so the home route model is a POJO.
  // This allows for the home template to iterate through the data by timezone
  // and users in that timezones.
  model(){
    let fufill = (users) => {
      let userTimezones = {};
      users.content.forEach((user) => {
        let timezone = user._data.timezone;
        let name = user._data.name;
        let photoUrl = user._data.photoUrl;
        let offset = user._data.offset;
        // setting up the model object to have recorded timezones as keys
        // the template will iterate over the timezones and then the user data
        // the timezone offset is passed to the clock component
        console.log(offset);
        if (userTimezones[timezone] === undefined){
          userTimezones[timezone] = {userData: [], offset: offset};
        }
        userTimezones[timezone].userData.push({name: name, photoUrl: photoUrl});
      });
      return userTimezones;
    };
    let reject = () => {};
    return this.store.findAll('user').then(fufill, reject);
  },
  //setting up the application controller to hace access to the timezone of the current user
  setupController(controller, model){
    this._super(controller, model);
    let currentUser = this.get('session').content.currentUser;
    this.set('currentUser', currentUser);
    Object.keys(model).forEach(timezone => {
      model[timezone].userData.forEach(user => {
        if (user.name === currentUser.displayName){
          this.set('currentUser.timezone', timezone);
        }
      });
    });
    controller.set('currentUser', currentUser);
    this.controllerFor('application').set('currentUser', currentUser);
  },


});
