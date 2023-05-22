window.onload = function () {
    localStorage.clear();
    let dropdown = document.getElementById('dropdown');
    let userInput = document.getElementById('user');
    let userType = document.getElementById('type');
    let number = document.getElementById('number');
    let submit = document.getElementById("submit");



    submit.onclick = function data (e) {
        console.log("dropdown: "+ dropdown.value +"username: "+userInput.value+" number: "+number.value+" type: "+userType.value);
        e.preventDefault();
        var existingEntries = JSON.parse(localStorage.getItem("data"));
        if(existingEntries == null) existingEntries = [];

        var entry = {
            "platform": dropdown.value,
            "username": userInput.value,
            "type": userType.value,
            "number": number.value,
            
        };
        existingEntries.push(entry);
        localStorage.setItem("data", JSON.stringify(existingEntries)); 
        debugger
    };



}