for (c of document.querySelectorAll("td")) {
	console.log(c)
	c.addEventListener("click",playInCell);
}

var player = "X"
var playing = true 

function playInCell () {
	// console.log(this);
	if (this.textContent != "" || !playing) return
	this.textContent = player
	this.classList.add(player)
	for (line of this.className.split(" ")) {
		let playerLine = "." + player + "." + line
		// console.log("Checking " + playerLine)
		if (document.querySelectorAll(playerLine).length == 3 && line != player) {
			alert("Game over! " + player + " has won")
			playing = false
			return
		}
	}
	player = (player == "X") ? "O" : "X" ; 
}



