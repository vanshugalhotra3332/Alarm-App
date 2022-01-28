const alarmBtn = document.getElementById('alarmBtn');

alarmBtn.addEventListener('click', setAlarm);
stopDiv = document.getElementById('stop');

function ringBell(){
    audio = new Audio("goshorty.mp3");
    audio.play();
}

function setAlarm(e){

    const alarm = document.getElementById('date').value;
    alarmDate = new Date(alarm);
    now = new Date();
    let timeToNow = alarmDate - now;
    console.log(now);

    if (timeToNow>= 0){
        setTimeout(() => {
            console.log('ringing now...');
            ringBell();
        }, timeToNow);
    }

    console.log(`Setting Alarm....... for ${alarmDate}`);
    e.preventDefault();
}