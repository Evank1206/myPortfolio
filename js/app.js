$(document).ready(function(){
    // var scrollTop = $(".scrolltop");

    var main = $(".main").position();
    var top = $(".top").position();
    var text = $(".text").position();
    var cont = $(".cont").position();

    $("#about").click(function(){

        $("html, body").animate({scrollTop: main.top}, 1000);

            return false;
    });

    $("#portfolio").click(function(){
        $("html, body").animate({scrollTop: top.top}, 1000);
        return false;

    });

    $("#service").click(function(){
        $("html, body").animate({scrollTop: text.top}, 1000);
        return false;

    });
    
    $("#contac").click(function(){
        $("html, body").animate({scrollTop: cont.top}, 1000);
        return false;
    })




    });
  
