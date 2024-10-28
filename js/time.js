setInterval(function(){
    let date = new Date();
    document.getElementById("time-block").innerHTML = date.toLocaleTimeString();
    document.getElementById("clock").innerHTML = date.toLocaleDateString();
    }, 1000);
let blockVisibility = false;
function showTime(){
    if(blockVisibility){
        document.getElementById("time-block").classList.remove('time-hide');
        document.getElementById("time-block").classList.add('time-show');
        blockVisibility = !blockVisibility;
    }
    else{
        document.getElementById("time-block").classList.remove('time-show');
        document.getElementById("time-block").classList.add('time-hide');
        blockVisibility = !blockVisibility;
    }
}
