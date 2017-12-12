console.log("loading the javascript");

function myCodeNoArgs () {
	console.log("click with no input - this is ... " );
	console.log(this);
}

function myCodePassedObject (myObject) {
	console.log("click with an object passed in ... " );
	console.log(myObject);
}

document.querySelector("#r2 .c2").addEventListener("click",myCodeNoArgs);




