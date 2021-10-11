function date(){
	var d = new Date().toLocaleString();
	var x = document.getElementsByClassName("feedback");
	x[0].innerHTML = d;
	console.log(d);
}
