// Beep guide
// 0 - High beep
// 1 - Low beep

beep = 0

// Tick down method
function tickDown() {
    // Todays date
    var today=new Date();

    // Getting the current hour, minute and second
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();

    // Adding 0's to the time
    m = checkTime(m);
    s = checkTime(s);

    // Changeing the text on the clock element to the current time
    document.getElementById('clock').innerHTML = h+":"+m+":"+s;
    
    // Making Javascript call the tickDown method (the current method) every second
    var t = setTimeout(function(){tickDown()},1000);
    
    // Playing alternating beeps every second
    var _t = setTimeout(function(){ if (beep == 0) { document.getElementById('beepHigh').play(); beep = 1 } else if (beep == 1) { document.getElementById('beepLow').play(); beep = 0 } }, 1000);

    // Changing the title of the web page to the current time
    document.title = h+":"+m+":"+s;
}

function checkTime(i) {
    // Checks if we should add a 0 to the time, and returning the new time
    if (i<10) {i = "0" + i};
    return i;
}

function isFirefox() {
    // If we're running on Firefox, change the class
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        document.getElementById('clock').className = 'firefox'
    }
}
