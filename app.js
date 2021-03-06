const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//console.log(colors);

const txtColor=document.querySelector(".txt-color");
//console.log(txtColor);

const btnColor=document.getElementById("btn");
//console.log(btnColor.innerHTML);

btnColor.addEventListener("click",function (){

    let rnd= randomNumber();
    //console.log(rnd);
    document.body.style.backgroundColor=colors[rnd];
    txtColor.textContent=colors[rnd];
    btnColor.style.backgroundColor=colors[rnd];
    
})

randomNumber=()=>{
    return Math.floor(Math.random()*colors.length);
}