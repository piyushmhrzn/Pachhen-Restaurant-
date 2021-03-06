const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-list');
const bar1 = document.querySelector('.line.top');
const bar2 = document.querySelector('.line.middle');
const bar3 = document.querySelector('.line.bottom');
// const links = document.querySelector('.list-group li');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    bar1.classList.toggle("active1");
    bar2.classList.toggle("active2");
    bar3.classList.toggle("active3");
    hamburger.classList.toggle("burgerBG");
});

setInterval(renderTime, 1000);

function renderTime(){
    var today = new Date();
    var year = today.getYear();
        if(year<1000){
            year += 1900;
        }
    var day = today.getDay();
    var month = today.getMonth();
    var daym = today.getDate();
    var dayarray = new Array("Sun, ","Mon, ","Tue, ","Wed, ","Thu, ","Fri, ","Sat, ");
    var montharray = new Array(" Jan "," Feb "," Mar "," Apr "," May "," Jun ",
                                " July "," Aug "," Sep "," Oct "," Nov "," Dec ");
    //Date End

    //Time 
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var am_pm = " AM";
        if(hour == 24){
            hour = 0;
        }else if(hour > 12){
            hour -= 12;
            am_pm = " PM";
        }

        if(hour < 10){
            hour = "0" + hour;
        }

        if(minute < 10){
            minute = "0" + minute;
        }

        if(second < 10){
            second = "0" + second;
        }

    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = "" +dayarray[day]+ "" +daym+ "" +montharray[month]+ "" +year+ 
                            " | " +hour+ ":" +minute+ ":" +second+ am_pm;
    myClock.innerText = "" +dayarray[day]+ "" +daym+ "" +montharray[month]+ "" +year+ 
                            " | " +hour+ ":" +minute+ ":" +second+ am_pm; 

}

renderTime();