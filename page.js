const page = {
    default: function (){
        const fUsername = document.querySelector("#fUsername");
        const outputDiv = document.querySelector("#output");
        const para = document.createElement("p");
        para.innerHTML = "Hello, " + fUsername.value +"!";
        outputDiv.appendChild(para);
    },

    init: function(){
        console.log("Page loaded!");
        const fClickMeButton = document.querySelector("#clickMeButton");
        fClickMeButton.addEventListener("click", page.default);
        console.log("Done initializing!")
    }
}

window.addEventListener("load", page.init);