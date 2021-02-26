
$(function(){
    $(window).scroll(function(){
        var jaPos =$('#japan-wrapper').offset().top - 300;
        var scr_count = $(window).scrollTop();
        if(scr_count > jaPos){
            $('#japImg').addClass('japan-show');
            $('#japImg').removeClass('japan-hide');
            $('#japan-name').addClass('name-show');
            $('#japan-name').removeClass('name-hide');
            $('#realTime').addClass('name-show');
            $('#realTime').removeClass('name-hide');
            $('#jap-contents').addClass('content-show');
            $('#jap-contents').removeClass('content-hide');
            setTimeout(function(){
                setInterval(Tokyo1, 15, 35);
                setInterval(Tokyo2, 18, 41);
                setInterval(Tokyo3, 50, 22);
                setInterval(Tokyo4, 5, 139);
                setInterval(Tokyo5, 18, 41);
                setInterval(Tokyo6, 40, 30);
            }, 1000);
        }
    });
    $(window).scroll(function(){
        var ukPos =$('#london-wrapper').offset().top - 300;
        var scr_count = $(document).scrollTop();
        if(scr_count > ukPos){
            $('#ukImg').addClass('uk-show');
            $('#ukImg').removeClass('uk-hide');
            $('#uk-name').addClass('name-show');
            $('#uk-name').removeClass('name-hide');
            $('#ukTime').addClass('name-show');
            $('#ukTime').removeClass('name-hide');
            $('#uk-contents').addClass('content-show');
            $('#uk-contents').removeClass('content-hide');
            setTimeout(function(){
                setInterval(Uk1, 15, 51);
                setInterval(Uk2, 18, 30);
                setInterval(Uk3, 50, 30);
                var uk4 = document.getElementById('uk4');
                uk4.innerHTML = ' 0°';
                setInterval(Uk5, 18, 7);
                setInterval(Uk6, 40, 32);
            }, 1000);
            $('#uk7').text('日本との時差は－9時間です');
        }
    });
    $(window).scroll(function(){
        var usaPos =$('#usa-wrapper').offset().top - 300;
        var scr_count = $(document).scrollTop();
        if(scr_count > usaPos){
            $('#usaImg').addClass('usa-show');
            $('#usaImg').removeClass('usa-hide');
            $('#usa-name').addClass('name-show');
            $('#usa-name').removeClass('name-hide');
            $('#usaTime').addClass('name-show');
            $('#usaTime').removeClass('name-hide');
            $('#usa-contents').addClass('content-show');
            $('#usa-contents').removeClass('content-hide');
            setTimeout(function(){
                setInterval(Usa1, 15, 40);
                setInterval(Usa2, 18, 42);
                setInterval(Usa3, 20, 51);
                setInterval(Usa4, 5, 74);
                var usa5 = document.getElementById('usa5');
                usa5.innerHTML = ' 0’';
                setInterval(Usa6, 40, 21);
            }, 1000);
            $('#usa7').text('日本との時差は－14時間です');
        }
    });

    var i = 0;
    function Tokyo1(num){
        var tokyo1 = document.getElementById('tokyo1');
        i++
        if(i > num){
            clearInterval();
        } else {
            tokyo1.innerHTML = i + '°';
        }
    }
    var j = 0;
    function Tokyo2(num){
        var tokyo2 = document.getElementById('tokyo2');
        j++
        if(j > num){
            clearInterval();
        } else {
            tokyo2.innerHTML = j + '’';
        }
    }
    var k = 0;
    function Tokyo3(num){
        var tokyo3 = document.getElementById('tokyo3');
        k++
        if(k > num){
            clearInterval();
        } else {
            tokyo3.innerHTML = k + '”';
        }
    }
    var l = 0;
    function Tokyo4(num){
        var tokyo4 = document.getElementById('tokyo4');
        l++
        if(l > num){
            clearInterval();
        } else {
            tokyo4.innerHTML = l + '°';
        }
    }
    var m = 0;    
    function Tokyo5(num){
        var tokyo5 = document.getElementById('tokyo5');
        m++
        if(m > num){
            clearInterval();
        } else {
            tokyo5.innerHTML = m + '’';
        }
    }
    var n = 0;
    function Tokyo6(num){
        var tokyo6 = document.getElementById('tokyo6');
        n++
        if(n > num){
            clearInterval();
        } else {
            tokyo6.innerHTML = n + '”';
        }
    }
    var o = 0;
    function Uk1(num){
        var uk1 = document.getElementById('uk1');
        o++
        if(o > num){
            clearInterval();
        } else {
            uk1.innerHTML = o + '°';
        }
    }
    var p = 0;
    function Uk2(num){
        var uk2 = document.getElementById('uk2');
        p++
        if(p > num){
            clearInterval();
        } else {
            uk2.innerHTML = p + '’';
        }
    }
    var q = 0;
    function Uk3(num){
        var uk3 = document.getElementById('uk3');
        q++
        if(q > num){
            clearInterval();
        } else {
            uk3.innerHTML = q + '”';
        }
    }
    var s = 0;
    function Uk5(num){
        var uk5 = document.getElementById('uk5');
        s++
        if(s > num){
            clearInterval();
        } else {
            uk5.innerHTML = `${s}’`;
        }
    }
    var t = 0;
    function Uk6(num){
        var uk6 = document.getElementById('uk6');
        t++
        if(t > num){
            clearInterval();
        } else {
            uk6.innerHTML = t + '”';
        }
    }
    u = 0;
    function Usa1(num){
        var usa1 = document.getElementById('usa1');
        u++
        if(u > num){
            clearInterval();
        } else {
            usa1.innerHTML = u + '°';
        }
    }
    var v = 0;
    function Usa2(num){
        var usa2 = document.getElementById('usa2');
        v++
        if(v > num){
            clearInterval();
        } else {
            usa2.innerHTML = v + '’';
        }
    }
    var w = 0;
    function Usa3(num){
        var usa3 = document.getElementById('usa3');
        w++
        if(w > num){
            clearInterval();
        } else {
            usa3.innerHTML = w + '”';
        }
    }
    var x = 0;
    function Usa4(num){
        var usa4 = document.getElementById('usa4');
        x++
        if(x > num){
            clearInterval();
        } else {
            usa4.innerHTML ='-' + x + '°';
        }
    }
    var z = 0;
    function Usa6(num){
        var usa6 = document.getElementById('usa6');
        z++
        if(z > num){
            clearInterval();
        } else {
            usa6.innerHTML = z + '”';
        }
    }
    



    
});