console.log("before click");
let cycles = 0;
cycles++
$("button").click(function(){goFlip()});

console.log("after click");

function goFlip (){

    let randomNumber = Math.random();
    if (randomNumber<0.5)
    {
        document.querySelector(".coin").setAttribute("src","images/heads.png");
        document.querySelector("h1").innerText="Heads!";
        console.log ("heads");
    }
    else 
    {
        document.querySelector(".coin").setAttribute("src","images/tails.png");
        document.querySelector("h1").innerText="Tails!";
        console.log("tails");
    }
    };
