import Ember from 'ember';

export default Ember.Component.extend({
  clock: Ember.inject.service('my-shiny-new-clock'),

  iso: Ember.computed('clock.date', function() {
    // These calculations to for geting the time based on the timezone could be simpler
    // if I assumed that the user was only inputing times when they were actually in the timezone
    // becuase the Javascript Date function can retrieve the local time where the device is.
    // However these calculations allow for anyone to input a timezone and see the time there.
    let offset = Math.round(parseFloat(this.get('offset')));
    let fullTimeString = this.get('clock.date');
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // if the offset is negative then the day is the previous of UTC
    let UTCcorrection = parseInt(fullTimeString.toString().slice(28, 31));
    let dayString = fullTimeString.toString().slice(0, 3);
    let idx = days.indexOf(dayString);
    if ((Math.sign(offset) === -1) && (Math.sign(UTCcorrection) >= 0)){
      idx -= 1;
    } else if ((Math.sign(offset) >= 0) && (Math.sign(UTCcorrection) === -1)){
      idx += 1;
    }
    if (idx === -1) {
      idx = 6;
    } else if (idx === 7) {
      idx = 0;
    }
    dayString = days[idx];
    let timeString = fullTimeString.toISOString().slice(11, 16);
    let hour = parseInt(timeString.slice(0, 2));
    let minute = timeString.slice(3);
    let ampm = "";
    let displayHour = hour + offset;
    
    if ((offset > 0) && (displayHour < 12)) {
      ampm = "AM";
    } else if ((offset > 0) && (displayHour >= 12)) {
      ampm = "PM";
    }


    if ((offset < 0) && (displayHour >= 12)) {
      ampm = 'PM';
    } else if ((offset < 0) && (displayHour < 12 )){
      ampm = "AM";
    }

    if (displayHour === 0){
      displayHour = 12;
    } else if (displayHour < 0){
      displayHour += 12;
    } else if (displayHour > 12){
      displayHour -= 12;
    }

    let displayTime = dayString + "," + " " + displayHour.toString() + ':' + minute + ampm;
    return displayTime;
  }),
});
