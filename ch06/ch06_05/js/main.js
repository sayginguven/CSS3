document.getElementById("javascriptJustForHere").addEventListener('click', function(){

	document.getElementsByClassName("topnav")[0].classList.toggle("responsive");

});

window.addEventListener('resize', function(){
	let windowWidth = window.innerWidth;
	if(windowWidth > 576 ){
		document.getElementsByClassName("topnav")[0].classList.remove("responsive");
	}
});

