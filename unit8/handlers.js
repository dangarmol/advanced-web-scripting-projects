console.log("loading the javascript");

function myCodeNoArgs () {
	console.log("click with no input - this is ... " );
	console.log(this);
	this.style.backgroundColor = "teal";
}

function myCodePassedObject (myObject) {
	console.log("click with an object passed in ... " );
	console.log(myObject);
	myObject.style.backgroundColor = "orange";
}

document.querySelector("#r2 .c2").addEventListener("click",myCodeNoArgs);

document.querySelector("#r1 .c1").onclick = myCodeNoArgs;

document.querySelector("#r1 .c3").onclick = function () {myCodePassedObject(this)};






