(function(){
    'use strict';
    var timer = document.getElementById('timer');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var showLap = document.getElementById('showLap');
    var startTime;
    var elapsedTime = 0;
    var timerId;
    var timeToadd = 0;
    var lapCount = 0;

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

    left.addEventListener('click', function(){
        if(left.classList.contains('start') === true) {
            startTime = Date.now();
            countUp();
            left.classList.add('stop');
            left.classList.add('left');
            right.classList.add('lap');
            right.classList.add('right');
            left.classList.remove('start');
            right.classList.remove('hide');
            left.innerHTML = 'stop';
        } else if(left.classList.contains('stop') === true) {
            clearTimeout(timerId);
            timeToadd += Date.now() - startTime;
            left.classList.add('restart');
            right.classList.add('reset');
            left.classList.remove('stop');
            right.classList.remove('lap');
            left.innerHTML = 'restart';
            right.innerHTML = 'reset';
        } else if(left.classList.contains('restart') === true) {
            startTime = Date.now();
            countUp();
            left.classList.add('stop');
            right.classList.add('lap');
            left.classList.remove('restart');
            right.classList.remove('reset');
            left.innerHTML = 'stop';
            right.innerHTML = 'lap';
        }  
    });

    right.addEventListener('click', function(){
        if(right.classList.contains('lap') === true) {
            var lapTime = getElapsedTime();
            var time = convartTime(lapTime);
            lapCount++;
            showLap.innerHTML = lapCount + "　　" + time.m + ':' + time.s + '.' + time.ms + '<br>' + showLap.innerHTML;
        } else if(right.classList.contains('reset') === true) {
            elapsedTime = 0;
            timeToadd = 0;
            showLap.innerHTML = "";
            lapCount = 0;             
            updateTimeText();
            left.classList.add('start');
            right.classList.add('hide');
            left.classList.remove('restart');
            right.classList.remove('reset');
            left.classList.remove('left');
            right.classList.remove('right');
            left.innerHTML = 'start';
            right.innerHTML = 'lap';
        }
    });
})();