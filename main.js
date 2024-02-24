var Healthcare = document.getElementById("bird")
var Healthcare_emoji = "**🐦**"

Healthcare.onclick = function(){
		console.log(Healthcare_emoji)
		if (Healthcare.innerHTML.includes(Healthcare_emoji)){
				bird.innerHTML = “Healthcare”
		} else {
				Healthcare.innerHTML = Healthcare.innerHTML +Healthcare_emoji
		}
}