function bigText(){
    document.getElementById("text").style.fontSize = "24pt";
}

function fancyButton(){
    document.getElementById("text").style.fontWeight ="bold";
    document.getElementById("text").style.color="blue";
    document.getElementById("text").style.textDecoration = "underline";
    alert("Style has been changed in the text area")
}

function boringButton(){
    document.getElementById("text").style.fontWeight="normal";
    document.getElementById("text").style.color="black";
    document.getElementById("text").style.textDecoration = "none"
    alert("Style has been removed from the text area");
}

function moo(){
    document.getElementById("text").style.textTransform = "uppercase"
    let str=document.getElementById("text").value.split(".");
    let fstr = str.join("-Moo");
    document.getElementById("text").value=fstr;
}