window.onscroll = function(){
	//how much you scroll from top
	let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

	//speed of the cat with traslateY
	document.getElementsByClassName('topContainer__cat')[0].style.transform = `translateY(-${scrollTop/15}%)`;

	//products part distance from top
	let products = document.getElementsByClassName('products')[0].getBoundingClientRect().top;

	//products distance is in the middle of screen
	if(products < window.innerHeight/2){
		document.getElementsByTagName('article')[0].classList.add('showPictures');
		document.getElementsByTagName('article')[1].classList.add('showPictures');
		document.getElementsByTagName('article')[2].classList.add('showPictures');
	}

}; 