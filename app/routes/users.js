import Ember from 'ember';
export default Ember.Route.extend({
  model(){
    let fufill = (users) => {
      let userTimezones = {};
      users.content.forEach((user) => {
        let timezone = user._data.timezone;
        let name = user._data.name;
        let photoUrl = user._data.photoUrl;
        let offset = user._data.offset;
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
  checkAuth(){
    return this.get('session').content.isAuthenticated;
  }
});
