const button = document.querySelector("button");
const output = document.querySelector(".output");
const name = document.querySelector ("input");
button.addEventListener("click", showMessage);
function showMessage (){
    let nameUpper = name.value.charAt(0).toUpperCase() + name.value.slice(1);
    const date = new Date();
    let current = date.getHours();
    let message;
    if (current > 17) {
        message = "Good Evening " +nameUpper;
        output.style.backgroundColor = "black";
    }else if (current >= 12) {
        message = "Good Afternoon "+ nameUpper;
         output.style.backgroundColor = "green";
        
    }else if (current >= 1) {
        message = "Good Morning " + nameUpper;
        output.style.backgroundColor = "orange";
    }else {
        message ="something is wrong"
        output.style.backgroundColor = "red";
    }
    
    output.innerHTML = `<h1> ${message} </h1>`
};

