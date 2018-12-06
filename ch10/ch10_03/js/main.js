let image = ['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/5.jpg','./images/6.jpg'];
let counter = 0;

setInterval(function(){

		setTimeout(function(){
			document.getElementsByTagName('img')[0].setAttribute('src', image[counter]);
				

				counter +=1;
			if(counter === image.length){
				counter = 0;
			}
		}, 1000);

}, 2000);

