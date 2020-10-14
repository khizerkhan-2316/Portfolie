console.log("Up and running");


document.getElementById("mmd").onclick = function(){showElement("headingMmd"), hideElement("headingDm")}
document.getElementById("dm").onclick = function(){showElement("headingDm"), hideElement("headingMmd")}


function showElement(element){
document.getElementById(element).style.display = "block";
}


function hideElement(element){
document.getElementById(element).style.display = "none";    
}