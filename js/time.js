const timeBlock = document.querySelector("#time-block");
const timeText = document.querySelector("#time-text");
const timeGreeting = document.querySelector("#time-greeting");
setInterval(function(){
    let date = new Date();
    if(date.getHours() >= 4 && date.getHours() < 12){
        timeGreeting.textContent = "Good Morning"; 
    }
    else if(date.getHours() >= 12 && date.getHours() < 18){
        timeGreeting.textContent = "Good Day";
    }
    else if(date.getHours() >= 18 && date.getHours() < 23){
        timeGreeting.textContent = "Good Evening";
    }
    else if (date.getHours() >= 23 && date.getHours() < 4){
        timeGreeting.textContent = "Good Night";
    }
    timeText.innerHTML = date.toLocaleTimeString();
    document.getElementById("clock").innerHTML = date.toLocaleDateString();
    }, 1000);
let blockVisibility = true;
function showTime(){
    if(blockVisibility){
        timeBlock.classList.remove('time-hide');
        timeBlock.classList.add('time-show');
        blockVisibility = !blockVisibility;
    }
    else{
        timeBlock.classList.remove('time-show');
        timeBlock.classList.add('time-hide');
        blockVisibility = !blockVisibility;
    }
}
