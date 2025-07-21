let count =0; 
let level = document.querySelector("#level")
while (level!=null){
	level = level.parentElement
	count++
}
alert(count)