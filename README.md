Team Timezones
======
###Background
This app built for team that wants to know the timezones of their teammates. It includes
essentially every timezones and daylight savings timezones for those regions that observe DST.
The login method is Google OAuth so users must have a google account to use the application.

###Technologies/Languages/Components
- [Ember.js](http://emberjs.com/)
- JavaScript
- [Firebase](https://firebase.google.com/)
- [Emberfire](https://github.com/firebase/emberfire)
- [Ember Power Select](http://www.ember-power-select.com/)
- [Ember-cli-clock](https://github.com/jerel/ember-cli-clock)
- HTML
- CSS

###Methodology
Much of the methodology of the app was tied to the fact that this was my first time using Ember.js and Firebase.
The user signs in to the app using Google Authentication. This is easily setup using Firebase authentication integration along with a torii adapter.
```javascript
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
```
These login actions are in the application route file. Upon entering the web application the user hits the index route. If there is not current session, the user can press the "Sign In with Google" button and if they are logged in the session is fetched and the user is redirected to the "home" route where the main application content is.

Once logged in and the user is at the "home" route, the user sees a list of timezones other where other users are. The user has the option to select form a dropdown their current timezone so that other team mates can see what time it is in that timezone.

The dropdown is created using [Ember Power Select](http://www.ember-power-select.com/). This allows you to input an array of options that are used int he dropdown. I put a list of timezones as an array of object where each object has a key for the name of the timezone and the UTC offset. When the user selects a timezone an action in the home controller is triggered. This action fetches the records from the database and if there is a record matching the current users name then it will delete that record and create a new one. If no record matches then it will create a new record.

The records are displayed by timezones and then users in that timezone. The time is generated using a downloaded component called [ember-cli-clock](https://github.com/jerel/ember-cli-clock) this component will update the time every minute and the time is adjusted based on the offset data from the timezone selection.

![screenshot](/screenshot.png?raw=true)


###Challenges
The challenges of creating this app stemmed from this being my first time using Ember.js and Firebase.

Ember has a steep learning curve but as I was building the application the structure of how it works made more sense. For example the "Object Model" that Ember is based on was unintuitive at first but made more sense. The use of promises to get and set promises and fetch data was also a little confusing at first but it makes much more sense now.

The app uses a firebase adapter for Ember called Emberfire and although provides many conveniences by linking EMBER DATA with Firebase, it seems to only allow for data to be stored under randomly generated keys which can make accessing specific data and updating data difficult. For example, it would be nice if I could store the data under a key of the user's name and update the value when the user changes timezones. This could still be possible but it is not clear on how to accomplish this with Emberfire's docs.

###Potential Improvements
There could be many improvements to this app. Many of the improvements could come form just learning and understanding Ember better and then refactoring the code. For the functionality of this app it may have made more sense to use a Rails API backend with some relational/SQL database so data could be fetched with simple ActiveRecord/SQL queries.

For the sake of convenience it could better if the user's location was found through the HTML5 geolocation API and use that position with the Google Time Zone API for the user's current timezone and the time offset of that timezone.

Other functionality could be to allow for multiple teams to use the app. There could be a sidebar for adding/selecting teams. Users could join and select multiple teams to see the timezone of users in different teams they are a a part of.



Ember.js Built In README
------

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd team-timezone`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
