var screen = "";
var a = 0;

updateScreen();

function updateScreen(){
    if(screen === ""){
        $(".calculadora-screen").text("0");
    }else{
        $(".calculadora-screen").text(screenFormat(screen));
    }
    
}

function screenFormat(str){
    var res = str.replace(/[*]/g, "x");
    res = res.replace(/[/]/g, ":");
    res = res.replace(/a/g, "ANS");
    return res;
}

function pressButton(value){
    screen += value;
    updateScreen();
}

function doOperation(){  
    try {
        ans = eval(screen);
        screen = ans.toString();
    } catch (error) {
        screen = "Error";
    }
    updateScreen();
    screen = "a";
}

function eraseAll(){
    screen = "";
    updateScreen();
}

function eraseLast(){
    screen = screen.substring(0,(screen.length -1));
    updateScreen();
}

$("#btn-1").click(function(){
    pressButton("1");
});

$("#btn-2").click(function(){
    pressButton("2");
});

$("#btn-3").click(function(){
    pressButton("3");
});

$("#btn-4").click(function(){
    pressButton("4");
});

$("#btn-5").click(function(){
    pressButton("5");
});

$("#btn-6").click(function(){
    pressButton("6");
});

$("#btn-7").click(function(){
    pressButton("7");
});

$("#btn-8").click(function(){
    pressButton("8");
});

$("#btn-9").click(function(){
    pressButton("9");
});

$("#btn-0").click(function(){
    pressButton("0");
});

$("#btn-sum").click(function(){
    pressButton("+");
});

$("#btn-rest").click(function(){
    pressButton("-");
});

$("#btn-mult").click(function(){
    pressButton("*");
});

$("#btn-div").click(function(){
    pressButton("/");
});

$("#btn-punto").click(function(){
    pressButton(".");
});

$("#btn-equal").click(function(){
    doOperation();
});

$("#btn-ans").click(function(){
    pressButton("a");
});

$("#btn-ac").click(function(){
    eraseAll();
});

$("#btn-del").click(function(){
    eraseLast();
});


