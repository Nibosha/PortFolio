$("#hamburguer").click(function(){
    $(".icon").toggleClass("close");
});


$(".aside-left").mouseenter(function(){
    $(".aside-left").addClass("aside-left-open");
    $("#center").addClass("section-open");
    $(".aside-right").addClass("aside-right-close");
    //$(".hidden-hexagon").delay(500).fadeIn(1000,"linear");   
});

$(".aside-left").mouseleave(function(){
    $(".aside-left").removeClass("aside-left-open");
    $("#center").removeClass("section-open");
    $(".aside-right").removeClass("aside-right-close");   
});

$("#aboutMe").click(function(){
    $(".nav-option h2").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#aboutMe h2").css("color","var(--deco-color-1)");
    $("#aboutMe").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#aboutMe-container").addClass("container-center");

});

$("#curriculum").click(function(){
    $(".nav-option h2").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#curriculum h2").css("color","var(--deco-color-1)");
    $("#curriculum").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#curriculum-container").addClass("container-center");

});

$("#contact").click(function(){
    $(".nav-option h2").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#contact h2").css("color","var(--deco-color-1)");
    $("#contact").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#contact-container").addClass("container-center");

});