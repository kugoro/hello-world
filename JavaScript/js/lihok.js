
	var bgPattern = document.getElementById("background");
	window.addEventListener("scroll", function(){
	bgPattern.style.backgroundPositionY = + window.scrollY + "px";
	});

	


    var bgTrees = document.getElementById("trees");
	window.addEventListener("scroll", function(){
	bgTrees.style.backgroundPositionX = + window.scrollY+ "px";
	});


	var bgTrees2 = document.getElementById("trees2");
	window.addEventListener("scroll", function(){
		bgTrees2.style.backgroundPositionX = + window.scrollY+ "px";
	});

	var bgTrees3 = document.getElementById("trees3");
	window.addEventListener("scroll", function(){
		bgTrees3.style.backgroundPositionX = + window.scrollY+ "px";
	});

	var bgTrees4 = document.getElementById("trees4");
	window.addEventListener("scroll", function(){
		bgTrees4.style.backgroundPositionX = + window.scrollY+ "px";
	})



	 var pos = document.getElementById("d1").backgroundPosition;
	console.log(pos);
 