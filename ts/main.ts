
window.onload = function(){
    let formBtn = 
    <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    alert("A button was pushed, mama mia!");
}