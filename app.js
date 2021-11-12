let [second,minute,hour] = [0,0,0];
let timer = document.querySelector('.time');
let number = document.querySelector('.time-number span');
let int = null;

function displayTimer(){
    second+=1;
    if(second === 59){
        second = 0;
        minute++;
        if(minute === 59){
            minute = 0;
            hour++;
            if(hour === 24){
                hour = 0;
                hour++;
            }
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;

    timer.innerHTML = ` ${h} : ${m} : ${s}`;
}

document.querySelector('#btn-start').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,1000);
    number.innerHTML = "..."
});
document.querySelector('#btn-pause').addEventListener('click', ()=>{
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;

    number.innerHTML = ` ${h} : ${m} : ${s}`;
    clearInterval(int);
});
document.querySelector('#btn-end').addEventListener('click', ()=>{
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;

    number.innerHTML = ` ${h} : ${m} : ${s}`;
    clearInterval(int);
    [second,minute,hour] = [0,0,0,0];
    timer.innerHTML = '00 : 00 : 00';
});