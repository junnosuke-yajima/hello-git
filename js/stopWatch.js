(function(){
    'use strict';
    var timer = document.getElementById('timer');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');
    var lap = document.getElementById('lap');
    var showLap = document.getElementById('showLap');
    var startTime;
    var elapsedTime = 0;
    var timerId;
    var timeToadd = 0;

    function convartTime(){
        var time = new Object();
        var m = Math.floor(elapsedTime / 60000);
        var s = Math.floor(elapsedTime % 60000 / 1000);
        var ms = elapsedTime % 1000;
        time.m = ('0' + m).slice(-2);
        time.s = ('0' + s).slice(-2);
        time.ms = ('00' + ms).slice(-3);
        return time;
    }

    function updateTimeText(){
        var time = convartTime();
        timer.textContent = time.m + ':' + time.s + '.' + time.ms;
    }
    
    function getElapsedTime() {
        elapsedTime = Date.now() - startTime + timeToadd;
        return elapsedTime;
    }

    function countUp(){
        timerId = setTimeout(function(){
            getElapsedTime();
            updateTimeText();
            countUp();
        },10);
    }

    start.addEventListener('click', function(){
        startTime = Date.now();
        countUp();
    });

    stop.addEventListener('click', function(){
        clearTimeout(timerId);
        timeToadd += Date.now() - startTime;
    });

    reset.addEventListener('click', function(){
        elapsedTime = 0;
        timeToadd = 0;
        showLap.innerHTML = "";              
        updateTimeText();
    });

    lap.addEventListener('click', function(){
        var lapTime = getElapsedTime();
        var time = convartTime(lapTime);
        showLap.innerHTML = time.m + ':' + time.s + '.' + time.ms + '<br>' + showLap.innerHTML;    
    });
})();