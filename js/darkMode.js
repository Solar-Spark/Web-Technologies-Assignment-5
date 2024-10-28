let darkmode = true;
function setDarkMode(){
    darkmode = !darkmode;
    if(darkmode){
        document.body.classList.remove('light');
    }
    else{
        document.body.classList.add('light');
    }
}