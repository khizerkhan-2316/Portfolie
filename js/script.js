console.log("Up and running");


// Nedtående er javascript til "Portfolipage.html":

document.getElementById("mmd").onclick = function(){showElement("headingMmd"), hideElement("headingDm"), showboxElements("mmdProjects")}
document.getElementById("dm").onclick = function(){showElement("headingDm"), hideElement("headingMmd"), hideElement("mmdProjects")}



function showElement(element){
document.getElementById(element).style.display = "block";
}


function hideElement(element){
document.getElementById(element).style.display = "none";

}

function showboxElements(element){
document.getElementById(element).style.display = "flex";   
}

// Javascript slut for "portfolie.html"!