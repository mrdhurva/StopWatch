let display_time=document.querySelector('.time')
let hrs=document.querySelector("#hrs");
let mins=document.querySelector("#mins");
let sec=document.querySelector("#sec");
let millisec=document.querySelector("#millisec");

let cont2=document.querySelector('.container1');

let start=document.querySelector('.start')
let pause=document.querySelector('.pause')
let stop=document.querySelector('.stop')

let time,Time;
let[hours,minutes,seconds,milliseconds]=['00','00','00','00'];

let timer=()=>{
    if(time===true){
        milliseconds++;
        if(milliseconds<10){
            milliseconds=`0${milliseconds}`;
        }
        if(milliseconds===99){
            milliseconds=0;
            seconds++;
            if(seconds<10){
                seconds=`0${seconds}`;
            }
        }
        if(seconds===99 && milliseconds==99){
            seconds=0;
            minutes++;
            if(minutes<10){
                minutes=`0${minutes}`;
            }
        }
        if(minutes===99 && seconds===99 && milliseconds==99){
            minutes=0;
            hours++;
            if(hours<10){
                hours=`0${hours};`
            }
        }

        millisec.innerHTML=milliseconds;
        sec.innerHTML=seconds+' : ';
        mins.innerHTML=minutes+' : ';
        hrs.innerHTML=hours+' : ';
    }
    if(time===false){
        clearInterval();
    }
    if(time===null){
        clearInterval(Time);
        [hours,minutes,seconds,milliseconds]=['00','00','00','00'];
        hrs.innerHTML=hours+' : ';
        mins.innerHTML=minutes+' : ';
        sec.innerHTML=seconds+' : ';
        millisec.innerHTML=milliseconds;
    }
}

start.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('start');
    time=true;
    clearInterval(Time);
    Time=setInterval(timer,10);
})

pause.addEventListener('click',(e)=>{
    e.stopPropagation();
    time=false;
    console.log('pause');
})


stop.addEventListener('click',(e)=>{
    e.stopPropagation();
    time=null;
    console.log('stop');
})
