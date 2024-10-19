let darkmode = true;
setInterval(function setDarkMode(){
    darkmode = !darkmode;
    if(darkmode){
        document.body.classList.remove('light');
    }
    else{
        document.body.classList.add('light');
    }
}, 5000);