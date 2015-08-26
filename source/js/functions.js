var button = document.getElementById("toggler");
button.addEventListener("click", function(){toggler(button)});
function toggler(el){
	var className = "hidden";
	if (el.classList) {
		el.classList.toggle(className);
	} else {
		var classes = el.className.split(' ');
		var existingIndex = classes.indexOf(className);
		if (existingIndex >= 0){
			classes.splice(existingIndex, 1);
		}else{
			classes.push(className);
		}
		el.className = classes.join(' ');
	}
}