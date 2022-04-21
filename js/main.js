window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    validateFirstNameTxt();
    validateLastNameTxt();
}
function validateLastNameTxt() {
    var lastNameBox = document.getElementById("last-name");
    var lName = lastNameBox.value;
    if (lName == "") {
        var errSpan = lastNameBox.nextElementSibling;
        errSpan.innerText = "Last name is required";
    }
}
function validateFirstNameTxt() {
    var firstNameBox = document.getElementById("first-name");
    var fName = firstNameBox.value;
    if (fName == "") {
        var errSpan = firstNameBox.nextElementSibling;
        errSpan.innerText = "First name is required";
    }
}
