function set2(num) {
    var ret;
    if(num < 10) {
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
    var clock = nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById('realTime').innerHTML = clock;
}
setInterval('showClock()',100);

function ukClock() {
    var timezoneoffset = 0;
    var ukTime = new Date(Date.now() - (timezoneoffset * 60 - new Date().getTimezoneOffset()) * 60000);
    var nowHour = set2(ukTime.getHours());
    var nowMin = set2(ukTime.getMinutes());
    var nowSec = set2(ukTime.getSeconds());
    var clock = nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById('ukTime').innerHTML = clock;
}
setInterval('ukClock()',100);

function usaClock() {
    var timezoneoffset = 5;
    var usaTime = new Date(Date.now() - (timezoneoffset * 60 - new Date().getTimezoneOffset()) * 60000);
    var nowHour = set2(usaTime.getHours());
    var nowMin = set2(usaTime.getMinutes());
    var nowSec = set2(usaTime.getSeconds());
    var clock = nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById('usaTime').innerHTML = clock;
}
setInterval('usaClock()',100);