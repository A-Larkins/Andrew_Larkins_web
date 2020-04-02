// Andrew Larkins

function MakeLengthConversion(params) {

    // get book div and result div
    var showBook = document.getElementById(params.id);
    var bookAfter = document.getElementById(params.idAfter);

    // obj properties passed in
    var title = params.title;
    var hours = params.lengthOfHours;
    var minutes = params.lengthOfMinutes;
    var speed = params.speed;

    console.log("title is " + title);
    console.log("hours are " + hours);
    console.log("minutes are " + minutes);
    console.log("current speed is " + speed);

    // display the default attributes
    showBook.innerHTML = ("Audiobook Title: " + title + ", Audio Time: Hours: " + hours + " \n\
                        Minutes: " + minutes);

    // store the total mins of the audiobook... force it be a float
    var totalMins = hours * 60 + parseFloat(minutes);
    console.log("length total mins: " + totalMins);

    // If the object has the attributes of speed passed in as 1.25
    // then do the math and display the new playback time
    // and the time saved in minutes.
    if (speed === 1.25) {
        var total_mins_at_1_25 = totalMins / 1.25;
        console.log("length total mins at 1.25 speed = " + total_mins_at_1_25);
        var speed_1_25_total_inHours = (total_mins_at_1_25 / 60);
        console.log("1.25 speed total in hours = " + speed_1_25_total_inHours);
        var decimalPlaceOfHours = speed_1_25_total_inHours - Math.floor(speed_1_25_total_inHours);
        console.log("the decimal place of the total in hours = " + decimalPlaceOfHours);
        var speed_1_25_hours = Math.floor(total_mins_at_1_25 / 60);
        console.log("the hours to display = " + speed_1_25_hours);
        var speed_1_25_mins = Math.round(decimalPlaceOfHours * 60);
        console.log("the mins to display = " + speed_1_25_mins);
        var timeSavedAt_1_25 = Math.round(totalMins - total_mins_at_1_25);
        console.log("the minutes saved at 1.25 speed = " + timeSavedAt_1_25);

        bookAfter.innerHTML = "Audiobook new playback time: Hours: "
                + speed_1_25_hours + " Minutes: " + speed_1_25_mins
                + "<br>Wow you can save: " + timeSavedAt_1_25 + " minutes!";
    }

    if (speed === 1.50) {
        var total_mins_at_1_50 = totalMins / 1.50;
        console.log("length total mins at 1.50 speed = " + total_mins_at_1_50);
        var speed_1_50_total_inHours = (total_mins_at_1_50 / 60);
        console.log("1.50 speed total in hours = " + speed_1_50_total_inHours);
        var decimalPlaceOfHours = speed_1_50_total_inHours - Math.floor(speed_1_50_total_inHours);
        console.log("the decimal place of the total in hours = " + decimalPlaceOfHours);
        var speed_1_50_hours = Math.floor(total_mins_at_1_50 / 60);
        console.log("the hours to display = " + speed_1_50_hours);
        var speed_1_50_mins = Math.round(decimalPlaceOfHours * 60);
        console.log("the mins to display = " + speed_1_50_mins);
        var timeSavedAt_1_50 = Math.round(totalMins - total_mins_at_1_50);
        console.log("the minutes saved at 1.50 speed = " + timeSavedAt_1_50);

        bookAfter.innerHTML = "Audiobook new playback time: Hours: "
                + speed_1_50_hours + " Minutes: " + speed_1_50_mins
                + "<br>Wow you can save: " + timeSavedAt_1_50 + " minutes!";
    }
    if (speed === 1.75) {
        var total_mins_at_1_75 = totalMins / 1.75;
        console.log("length total mins at 1.75 speed = " + total_mins_at_1_75);
        var speed_1_75_total_inHours = (total_mins_at_1_75 / 60);
        console.log("1.75 speed total in hours = " + speed_1_75_total_inHours);
        var decimalPlaceOfHours = speed_1_75_total_inHours - Math.floor(speed_1_75_total_inHours);
        console.log("the decimal place of the total in hours = " + decimalPlaceOfHours);
        var speed_1_75_hours = Math.floor(total_mins_at_1_75 / 60);
        console.log("the hours to display = " + speed_1_75_hours);
        var speed_1_75_mins = Math.round(decimalPlaceOfHours * 60);
        console.log("the mins to display = " + speed_1_75_mins);
        var timeSavedAt_1_75 = Math.round(totalMins - total_mins_at_1_75);
        console.log("the minutes saved at 1.75 speed = " + timeSavedAt_1_75);

        bookAfter.innerHTML = "Audiobook new playback time: Hours: "
                + speed_1_75_hours + " Minutes: " + speed_1_75_mins
                + "<br>Wow you can save: " + timeSavedAt_1_75 + " minutes!";
    }
    if (speed === 2) {
        var total_mins_at_2 = totalMins / 2;
        console.log("length total mins at 2 speed = " + total_mins_at_2);
        var speed_2_total_inHours = (total_mins_at_2 / 60);
        console.log("x2 speed total in hours = " + speed_2_total_inHours);
        var decimalPlaceOfHours = speed_2_total_inHours - Math.floor(speed_2_total_inHours);
        console.log("the decimal place of the total in hours = " + decimalPlaceOfHours);
        var speed_2_hours = Math.floor(total_mins_at_2 / 60);
        console.log("the hours to display = " + speed_2_hours);
        var speed_2_mins = Math.round(decimalPlaceOfHours * 60);
        console.log("the mins to display = " + speed_2_mins);
        var timeSavedAt_2 = Math.round(totalMins - total_mins_at_2);
        console.log("the minutes saved at 2 speed = " + timeSavedAt_2);

        bookAfter.innerHTML = "Audiobook new playback time: Hours: "
                + speed_2_hours + " Minutes: " + speed_2_mins
                + "<br>Wow you can save: " + timeSavedAt_2 + " minutes!";
    }

}