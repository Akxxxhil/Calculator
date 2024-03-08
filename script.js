let Buttons = document.querySelectorAll(".buttons");
let answer = document.getElementById("ButtonResult");


let buttonsarray = Array.from(Buttons);
let string = "";


buttonsarray.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        if (event.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            answer.innerText = string;
            console.log(string);
        }
        else if (event.target.innerHTML=="RESET"){
            string=" "
            answer.innerText= string
        }
        else if (event.target.innerHTML=="="){
            string=eval(string)
            answer.innerText= string
        }
        else {
            string += event.target.innerHTML;
            answer.innerText = string;
            console.log(string);
        }
    });
});
