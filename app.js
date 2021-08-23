var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input")
var outputDiv=document.querySelector("#output");

var serverURL= "https://api.funtranslations.com/translate/shakespeare.json"

function getTrnsltn(text){
    return serverURL+"?text="+text; 
}


btnTranslate.addEventListener("click",function clickEventHandler(){
    //console.log("input:",txtInput.value);
    //outputDiv.innerText=txtInput.value;
    var inputText=txtInput.value;
    fetch(getTrnsltn(inputText))
        .then(response=>response.json())
        .then(abcd=>outputDiv.innerText=abcd.contents.translated)                //abcd=json
        .catch(error=>console.log("error",error));
        
    })
