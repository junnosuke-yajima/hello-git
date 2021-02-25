var i = 0;
var j = 0;
var k = 0;
function latitude1(one, two, three){
    var tokyo1 = document.getElementById('tokyo1');
    i++
    if(i > one){
        clearInterval();
    } else {
        tokyo1.innerHTML = i + '°';
        console.log(tokyo1.innerHTML);
        console.log(i);
    }
    var tokyo2 = document.getElementById('tokyo2');
    j++
    if(j > two){
        clearInterval();
    } else {
        tokyo2.innerHTML = j + '’';
        console.log(tokyo2.innerHTML);
        console.log(j);
    }
    var tokyo3 = document.getElementById('tokyo3');
    k++
    if(k > three){
        clearInterval();
    } else {
        tokyo3.innerHTML = k + '”';
        console.log(tokyo3.innerHTML);
        console.log(k);
    }
}

  
