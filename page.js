const page = {
    default: function (){
        const fUsername = document.querySelector("#fUsername");
        const outputDiv = document.querySelector("#output");
        const para = document.createElement("p");
        para.innerHTML = "Hello, " + fUsername.value +"!";
        outputDiv.appendChild(para);
    }
}