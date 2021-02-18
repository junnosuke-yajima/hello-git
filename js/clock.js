function set2(num) {
    var ret;
    if(num < 10) {
        ret = "0" + num;
    } else {
        ret = num;
    }
    return ret;
}
function set3(num) {
    var ret;
    if(num < 10) {
        ret = "00" + num;
    } else if (num < 100) {
        ret = "0" + num;
    } else {
        ret = num;
    }
    return ret;
}
function showClock() {
    var nowTime = new Date();
    var nowHour = set2(nowTime.getHours());
    var nowMin = set2(nowTime.getMinutes());
    var nowSec = set2(nowTime.getSeconds());
    var nowMiSec = set3(nowTime.getMilliseconds());
    var clock = "現在時刻" + nowHour + ":" + nowMin + ":" + nowSec + "." + nowMiSec;
    document.getElementById("realTime").innerHTML = clock;
}
setInterval('showClock()',10);

var now = Date.now();
function count() {
    var count = Date.now() - now;
    document.getElementById('now').innerHTML = count;
}
setInterval('count()', 10);