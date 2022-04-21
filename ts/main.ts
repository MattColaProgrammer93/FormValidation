
window.onload = function(){
    let formBtn = 
    <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    // First Name Validation
    validateFirstNameTxt();

    // Last Name Validation
    validateLastNameTxt();
}

function validateLastNameTxt() {
    let lastNameBox = <HTMLInputElement>document.getElementById("last-name");
    let lName = lastNameBox.value;
    if (lName == "") {
        let errSpan = <HTMLSpanElement>lastNameBox.nextElementSibling;
        errSpan.innerText = "Last name is required";
    }
}

function validateFirstNameTxt() {
    let firstNameBox = <HTMLInputElement>document.getElementById("first-name");
    let fName = firstNameBox.value;
    if (fName == "") {
        let errSpan = <HTMLSpanElement>firstNameBox.nextElementSibling;
        errSpan.innerText = "First name is required";
    }
}
