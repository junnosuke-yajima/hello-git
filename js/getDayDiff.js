function validate(){
    var start = new Date(document.getElementById('start').value);
    var end = new Date(document.getElementById('end').value);
    if(!start.getTime()){
        alert('日付を入力してください');   
    } else if(!end.getTime()){
        alert('日付を入力してください'); 
    } else if(start > end){
        alert('終了日を開始日より後の日付で入力してください');
    } else {
        getDayDiff();
    }
}
function getDayDiff(){
    var start = new Date(document.getElementById('start').value);
    var end = new Date(document.getElementById('end').value);
    var diff = (end - start) / 86400000;//日付差を計算
    diff++;//指定当日を入れるためのオフセット
    var startDay = document.getElementById('startDay');
    var endDay = document.getElementById('endDay');
    var result = document.getElementById('result');
    var s = getYMDW(start);
    startDay.innerHTML = s.y + '年' + s.m + '月' + s.d + '日　' + s.dw;
    
    var e = getYMDW(end);
    endDay.innerHTML = e.y + '年' + e.m + '月' + e.d + '日　' + e.dw;
    result.innerHTML = '上記期間の日数は' + diff + '日間です';
    
    var holidays = document.getElementsByName("holiday");
    var showHolidays = document.getElementById('showHolidays');
    showHolidays.innerHTML = '定休日:';
    for (let i = 0; i < holidays.length; i++){
        if(holidays[i].checked){//定休日を表示
            var holidayName = getWeekName(Number(holidays[i].value))
            showHolidays.innerHTML += holidayName;
        }
    }
    var holiday = 0;
    console.log(start);
    console.log(end);
    while(start <= end){//定休日を弾く処理
        for(let i = 0; i < 7; i++){
            if(start.getDay() === Number(holidays[i].value)){
                console.log(start.getDay());
                if(holidays[i].checked){
                    console.log(holidays[i]);
                    console.log(start.getDay());
                    holiday++;
                }
            }
        }
        console.log(start.getDay());
        start.setDate(start.getDate() + 1);
    }
    var work = diff - holiday;
    var workDays = document.getElementById('workDays');
    workDays.innerHTML = '定休日を除く日数は' + work + '日間です';
}

function getWeekName(i) {
    var week = [ "日", "月", "火", "水", "木", "金", "土" ];
    return week[i] + "曜日";
}

function getYMDW(date) {//引数はDateオブジェクト
    var d = new Object()
    d.y = date.getFullYear();
    d.m = date.getMonth() + 1;
    d.d = date.getDate();
    d.dw = getWeekName(date.getDay());
    return d;
}
