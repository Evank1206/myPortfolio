$(document).ready(function(){
    // var scrollTop = $(".scrolltop");

    var main = $(".about").position();
    var top = $(".top").position();
    var text = $(".project").position();
    var cont = $(".contact").position();

    $("#about").click(function(){

        $("html, body").animate({scrollTop: main.top}, 1000);

            return false;
    });

    $("#portfolio").click(function(){
        $("html, body").animate({scrollTop: top.top}, 1000);
        return false;

    });

    $("#project").click(function(){
        $("html, body").animate({scrollTop: text.top}, 1000);
        return false;

    });
    
    $("#contac").click(function(){
        $("html, body").animate({scrollTop: cont.top}, 1000);
        return false;
    })


    });


  
