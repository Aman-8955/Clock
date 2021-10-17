setInterval(function () {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    am_pm(hours); 
document.getElementById("clock").innerHTML=(hours + " : " + minutes + " : " + seconds + " " + a);
}, 1000);
let a;
function am_pm(hours){
    if(hours<12){
        a="AM"
    }
    else{
        a="PM"
    }
}