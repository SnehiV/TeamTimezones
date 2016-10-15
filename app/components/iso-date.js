import Ember from 'ember';

export default Ember.Component.extend({
  clock: Ember.inject.service('my-shiny-new-clock'),

  iso: Ember.computed('clock.date', function() {
    let offset = Math.round(parseFloat(this.get('offset')));
    let timeString = this.get('clock.date').toISOString().slice(11, 16);
    let hour = parseInt(timeString.slice(0, 2));
    let minute = timeString.slice(3);
    let ampm = "";
    let displayHour = hour + offset;
    if (displayHour < 0){displayHour += 24;}
    if (displayHour > 23){displayHour = displayHour % 24;}
    if (displayHour > 12) {
      displayHour -= 12;
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }
    let displayTime = displayHour.toString() + ':' + minute + ampm;
    return displayTime;
  }),
});
