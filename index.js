function randomColor(){

    let hex="012345679abcdef";
    let color="#";

    for(i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
return color;
}

let setnew;

function startcolor(){
    setnew=setInterval(changecolor,1000);  
    
}

function changecolor(){
    document.body.style.backgroundColor=randomColor();

}
function stopcolor(){
 clearInterval(setnew);
}

document.querySelector('#st1').addEventListener("click",startcolor)
document.querySelector('#st2').addEventListener("click",stopcolor)