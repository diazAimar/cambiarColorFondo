
var characters = "ABCDE0123456789";
var charactersLength = characters.length;
document.querySelector(".check").addEventListener("click", function() {
    let string = [""];
    for(var i = 0; i <= 5; i++) {
        string[i] = characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    let result = "";
    result = string.toString();
    for(var j = 0; j <= result.length; j++) {
        if(result.charAt(j)==",") {
            result = result.split(',').join('');
        }
    }

/*     let string = "";
    for (var i = 0; i <= 5; i++) {
        string.charAt(i) = characters.charAt(Math.floor(Math.random() * charactersLength));
    } */
    /* console.log(result); */

    result = "#".concat(result);
    document.querySelector(".color").textContent = result;
    document.getElementsByTagName("body")[0].style.backgroundColor = result;
});