let display_time=document.querySelector('.time')
let hrs=document.querySelector("#hrs");
let mins=document.querySelector("#mins");
let sec=document.querySelector("#sec");
let millisec=document.querySelector("#millisec");

let cont2=document.querySelector('.container1');

let start=document.querySelector('.start')
let pause=document.querySelector('.pause')
let stop=document.querySelector('.stop')

let time;
let[hours,minutes,seconds,milliseconds]=['00','00','00','00'];

let element=document.createElement('div');
element.className='pause';
element.innerHTML='<i class="fa-solid fa-pause"></i>';

let element1=document.createElement('div');
element.className='stop';
element.innerHTML='<i class="fa-solid fa-stop"></i>';

// console.log(element)

// start === false ? document.cont1.append('element','element1') : '';

if(time===true){
    document.append(element);
    document.append(element1);
}

let timer=()=>{
    if(time===true){
        milliseconds++;
        millisec.innerHTML=milliseconds;
        if(milliseconds===100){
            milliseconds=0;
            seconds++;
            if(seconds<10){
                sec.innerHTML='0'+seconds+' : ';
            }else{
                sec.innerHTML=seconds+' : ';
            }
            
        }

        if(seconds===59 && milliseconds===99){
            seconds=0;
            minutes++;
            if(minutes<10){
                mins.innerHTML='0'+minutes+' : ';
            }else{
                mins.innerHTML=minutes+' : ';
            }
        }

        if(minutes===59 && seconds===59 && milliseconds===99){
            minutes=0;
            hours++;
            if(hours<10){
                hrs.innerHTML='0'+hours+' : ';
            }else{
                hrs.innerHTML=hours+' : ';
            }
        }
    }
    if(time===false){
        clearInterval(timer);
    }
    if(time===null){
        clearInterval(timer);
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
    setInterval(timer,10);
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

