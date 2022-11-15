let input = $("#input");
// let divs = $("div:last")
// let resultDiv = $("#results")

// let input2 = document.querySelector("#input")

// input.click(() => {
//     alert("asd")
// });





let div = $("div:last");
let button = $("#btn");
let isHidden = false;

button.click(() => {
    if(isHidden){
        div.show("slow");
    }else{
        div.hide("slow")
    }
    isHidden = !isHidden;
})