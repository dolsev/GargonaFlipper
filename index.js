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
$("button").click(function(){
document.querySelector("h1").innerText="FLIPPING!";
    setTimeout(function(){
        goFlip()},2000)});
