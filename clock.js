// Beep guide
// true - High beep
// false - Low beep
beep = true

function tickDown() {
	var today=new Date();

    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('clock').innerHTML = h+":"+m+":"+s;
    setTimeout(() => tickDown(), 1100)
    setTimeout(() => { document.getElementById(beep ? 'beepHigh' : 'beepLow').play(); beep = !beep }, 1100);
    document.title = h+":"+m+":"+s;
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}
