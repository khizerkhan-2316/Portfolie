console.log("Up and running");


// Nedtående er javascript til "Portfolipage.html":

//for mobile and ipad
document.getElementById("mmd").ontouchstart = function(){showElement("headingMmd"), hideElement("headingDm"), showboxElements("mmdProjects"), scrollWindow()}
document.getElementById("dm").ontouchstart= function(){showElement("headingDm"), hideElement("headingMmd"), hideElement("mmdProjects"), scrollWindow()}

//for pc-laptos, computers: 
document.getElementById("mmd").onclick = function(){showElement("headingMmd"), hideElement("headingDm"), showboxElements("mmdProjects"), scrollWindow()}
document.getElementById("dm").onclick = function(){showElement("headingDm"), hideElement("headingMmd"), hideElement("mmdProjects"), scrollWindow()}

//functions:
function showElement(element){
document.getElementById(element).style.display = "block";
}


function hideElement(element){
document.getElementById(element).style.display = "none";

}

function showboxElements(element){
document.getElementById(element).style.display = "flex";   
}


function scrollWindow(){
window.scrollTo(0, window.innerHeight /1.1);
}
// Javascript slut for "portfolie.html"!