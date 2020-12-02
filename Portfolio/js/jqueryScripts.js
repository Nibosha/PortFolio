//==============HEADER============================================//
$("#hamburguer").click(function(){
    $(".icon").toggleClass("close");
});

//==============ASIDE LEFT========================================//
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

//=========ZONA CENTRAL========================================//
$("#aboutMe").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#aboutMe h2").css("color","var(--deco-color-1)");
    $("#aboutMe").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#aboutMe-container").addClass("container-center");

});

$("#curriculum").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#curriculum h2").css("color","var(--deco-color-1)");
    $("#curriculum").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#curriculum-container").addClass("container-center");

});

$("#contact").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#contact h2").css("color","var(--deco-color-1)");
    $("#contact").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#contact-container").addClass("container-center");

});

$("#calculadora").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#calculadora h3").css("color","var(--deco-color-1)");
    $("#calculadora").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#calculadora-container").addClass("container-center");
});

$("#cambio-fuentes").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#cambio-fuentes h3").css("color","var(--deco-color-1)");
    $("#cambio-fuentes").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#cambio-fuentes-container").addClass("container-center");
});

$("#certificado").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#certificado h3").css("color","var(--deco-color-1)");
    $("#certificado").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#certificado-container").addClass("container-center");
});

$("#ftp-seguro").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#ftp-seguro h3").css("color","var(--deco-color-1)");
    $("#ftp-seguro").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#ftp-seguro-container").addClass("container-center");
});

$("#configuracion").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#configuracion h3").css("color","var(--deco-color-1)");
    $("#configuracion").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#configuracion-container").addClass("container-center");
});

$("#guia-estilos").click(function(){
    $(".nav-option h2, .nav-option h3").css("color","var(--main-color-1)");
    $(".nav-option").css("pointer-events","visible");
    $("#guia-estilos h3").css("color","var(--deco-color-1)");
    $("#guia-estilos").css("pointer-events","none");
    $(".content-container").removeClass("container-center");
    $("#guia-estilos-container").addClass("container-center");
});

//=================RIGHT ASIDE=====================================================//

$(".aside-right").mouseenter(function(){
    $(".aside-left").addClass("aside-left-close");
    $("#center").addClass("section-open");
    $(".aside-right").addClass("aside-right-open");
    //$(".hidden-hexagon").delay(500).fadeIn(1000,"linear");   
});


$(".aside-right").mouseleave(function(){
    $(".aside-left").removeClass("aside-left-close");
    $("#center").removeClass("section-open");
    $(".aside-right").removeClass("aside-right-open");   
});


$(".nav-option-desplegable>h2").click(function(){
    $(this).siblings().toggle(0.5);
});

