setInterval(function(){
    let date = new Date();
    document.getElementById("clock").innerHTML = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }, 1000);