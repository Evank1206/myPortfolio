$(document).ready(function () {
    // days for week
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

    }
    // DOM
    $("#day").append(day);
    // using vanilia js for changed color of text
    document.getElementById("day").style.color = "blue";


    // assigning part for scroll
    var main = $(".about").position();
    var top = $(".top").position();
    var text = $(".project").position();
    var cont = $(".contact").position();

    $("#about").click(function () {

        $("html, body").animate({ scrollTop: main.top }, 1000);

        return false;
    });

    $("#portfolio").click(function () {
        $("html, body").animate({ scrollTop: top.top }, 1000);
        return false;

    });

    $("#project").click(function () {
        $("html, body").animate({ scrollTop: text.top }, 1000);
        return false;

    });

    $("#contac").click(function () {
        $("html, body").animate({ scrollTop: cont.top }, 1000);
        return false;
    })


});

function myFunction() {
    document.getElementById("submit-btn").innerHTML = "Loading";
}


function onmouseover() {
    var time = document.getElementById("time");
    time.innerHTML = date();
}





