import Ember from 'ember';

export default Ember.Component.extend({
  clock: Ember.inject.service('my-shiny-new-clock'),

  iso: Ember.computed('clock.date', function() {
    // calculating the timezone offset. calling toString on this.get('clock.date')
    // return the local time of the user along with the timezone offset.
    // The day abbreviation. Initially I didn't know that the Javascript Date function retuned the offset
    // so that's why I included offset info with my timezone data.
    let offset = Math.round(parseFloat(this.get('offset')));
    let fullTimeString = this.get('clock.date');
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // if the offset is negative then the day is the previous of UTC
    let dayString = fullTimeString.toString().slice(0, 3);
    if (Math.sign(offset) === -1){
      let idx = days.indexOf(dayString);
      idx -= 1;
      if (idx === -1) {
        idx = 6;
      }
      dayString = days[idx];
    }
    let UTCcorrection = parseInt(fullTimeString.toString().slice(28, 31));
    let timeString = fullTimeString.toISOString().slice(11, 16);
    let hour = parseInt(timeString.slice(0, 2));
    let minute = timeString.slice(3);
    let ampm = "";
    let displayHour = hour + offset;
    if (displayHour === 0){displayHour = 12;}
    if (displayHour > 12) {
      displayHour -= 12;
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }
    let displayTime = dayString + "," + " " + displayHour.toString() + ':' + minute + ampm;
    return displayTime;
  }),
});
