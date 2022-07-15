clicker.onclick = goFlip();

function goFlip (){

    var randomNumber = Math.random();
    if (randomNumber<0.5)
    {
        document.querySelector(".coin").setAttribute("src","images/heads.png");
        document.querySelector("h1").innerText="Heads!";
    }
    else 
    {
        document.querySelector(".coin").setAttribute("src","images/tails.png");
        document.querySelector("h1").innerText="Tails!";
    }
    };