// Andrew Larkins

// Main make component function.

function MakeLengthConversion(params) {

    // Divs passed in.
    // book div is for the title and audio playback length at x1 speed.
    // book after div is manipulated according to which button is clicked on.
    var divBook = document.getElementById(params.id);
    var divBookAfter = document.getElementById(params.idAfter);

    // obj properties passed in
    var title = params.title;
    var hours = params.hours;
    var minutes = params.minutes;
    var speed = 1;

    console.log("title is " + title);
    console.log("hours are " + hours);
    console.log("minutes are " + minutes);
    console.log("speed is " + speed);

    // Display the title and current length at x1 speed.
    divBook.innerHTML = ("Audiobook Title: " + title + ", Audio Time: Hours: " + hours + " \n\
                        Minutes: " + minutes);

    // Create 4 buttons
    var btn_x1_25 = document.createElement("button");
    btn_x1_25.innerHTML = "x1.25";
    var btn_x1_50 = document.createElement("button");
    btn_x1_50.innerHTML = "x1.50";
    var btn_x1_75 = document.createElement("button");
    btn_x1_75.innerHTML = "x1.75";
    var btn_x2 = document.createElement("button");
    btn_x2.innerHTML = "x2";

    // Style the buttons
    setStyle();

    function setStyle() {
        divBook.style.textAlign = "center";
        divBookAfter.style.textAlign = "center";

        btn_x1_25.style.margin = "auto";
        btn_x1_50.style.margin = "auto";
        btn_x1_75.style.margin = "auto";
        btn_x2.style.margin = "auto";

        btn_x1_25.style.fontSize = "60px";
        btn_x1_25.style.display = "bar";
        btn_x1_25.style.width = "25%";
        btn_x1_25.style.background = "#e7e7e7";

        btn_x1_50.style.fontSize = "60px";
        btn_x1_50.style.display = "bar";
        btn_x1_50.style.width = "25%";
        btn_x1_50.style.background = "#e7e7e7";

        btn_x1_75.style.fontSize = "60px";
        btn_x1_75.style.display = "bar";
        btn_x1_75.style.width = "25%";
        btn_x1_75.style.background = "#e7e7e7";

        btn_x2.style.fontSize = "60px";
        btn_x2.style.display = "bar";
        btn_x2.style.width = "25%";
        btn_x2.style.background = "#e7e7e7";
    }

    // Place the buttons after the current div if next spot avaliable.
    if (divBook.nextSibling) {
        divBook.parentNode.insertBefore(btn_x2, divBook.nextSibling);
    }
    if (divBook.nextSibling) {
        divBook.parentNode.insertBefore(btn_x1_75, divBook.nextSibling);
    }
    if (divBook.nextSibling) {
        divBook.parentNode.insertBefore(btn_x1_50, divBook.nextSibling);
    }
    if (divBook.nextSibling) {
        divBook.parentNode.insertBefore(btn_x1_25, divBook.nextSibling);
    }

    // Wire the click event handler method
    // to call the proper functions that change
    // the speed of the object.
    btn_x1_25.addEventListener("click", function () {
        console.log("Button x1.25 has been clicked on.");
        resetBtnStyle();
        highlightClickedBtn(btn_x1_25);
        changeSpeed(1.25, hours, minutes);
    });
    btn_x1_50.addEventListener("click", function () {
        console.log("Button x1.50 has been clicked on.");
        resetBtnStyle();
        highlightClickedBtn(btn_x1_50);
        changeSpeed(1.50, hours, minutes);
    });
    btn_x1_75.addEventListener("click", function () {
        console.log("Button x1.75 has been clicked on.");
        resetBtnStyle();
        highlightClickedBtn(btn_x1_75);
        changeSpeed(1.75, hours, minutes);
    });
    btn_x2.addEventListener("click", function () {
        console.log("Button x2 has been clicked on.");
        resetBtnStyle();
        highlightClickedBtn(btn_x2);
        changeSpeed(2, hours, minutes);
    });

    function resetBtnStyle() {
        btn_x1_25.style.background = "#e7e7e7";
        btn_x1_50.style.background = "#e7e7e7";
        btn_x1_75.style.background = "#e7e7e7";
        btn_x2.style.background = "#e7e7e7";

    }

    function highlightClickedBtn(btn) {
        btn.style.background = "red";
    }

    function changeSpeed(speed, hours, minutes) {
        // store the total mins of the audiobook... force it be a float
        var totalMins = hours * 60 + parseFloat(minutes);
        var newTotalMins = totalMins / speed;
        var newTotalHours = (newTotalMins / 60);
        var decimalOfHours = newTotalHours - Math.floor(newTotalHours);
        var hoursAtNewSpeed = Math.floor(newTotalMins / 60);
        var minsAtNewSpeed = Math.round(decimalOfHours * 60);
        var timeSaved = Math.round(totalMins - newTotalMins);

        console.log("total minutes = " + totalMins);
        console.log("total minutes at x" + speed + " = " + newTotalMins);
        console.log("total hours at x" + speed + " = " + newTotalHours);
        console.log("decimal of hours at x" + speed + " = " + decimalOfHours);
        console.log("hours at speed x" + speed + " = " + hoursAtNewSpeed);
        console.log("mins at speed x" + speed + " = " + minsAtNewSpeed);
        console.log("time saved at speed x" + speed + " = " + timeSaved);

        divBookAfter.innerHTML = "Audiobook new playback time: Hours: "
                + hoursAtNewSpeed + " Minutes: " + minsAtNewSpeed
                + "<br>Wow you can save: " + timeSaved + " minutes!";
    }

}
