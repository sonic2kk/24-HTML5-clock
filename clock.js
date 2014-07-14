// Beep guide
// 0 - High beep
// 1 - Low beep

beep = 0

function tickDown() {
	var today=new Date();

    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('clock').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){tickDown()},1000);
    var _t = setTimeout(function(){ if (beep == 0) { document.getElementById('beepHigh').play(); beep = 1 } else if (beep == 1) { document.getElementById('beepLow').play(); beep = 0 } }, 1000);

    document.title = h+":"+m+":"+s;
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}

function isFirefox() {
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        document.getElementById('clock').className = 'die'
    }
}

function playTick() {

}