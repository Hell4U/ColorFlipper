const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const txtColor=document.querySelector(".txt-color");
//console.log(txtColor);

const btnColor=document.getElementById("btn");
//console.log(btnColor.innerHTML);



btnColor.addEventListener("click",function (){
    let clrTxt="#";
    for(let i=0;i<6;i++){
        let rnd= randomNumber();
        //console.log(rnd);
        clrTxt+=hex[rnd];
        //console.log(clrTxt);
    }

    document.body.style.backgroundColor = clrTxt;
    txtColor.textContent = clrTxt;
    btnColor.style.backgroundColor=clrTxt;
    
})

randomNumber=()=>{
    return Math.floor(Math.random()*hex.length);
}