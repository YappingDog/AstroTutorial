//HANDLE MOUSEOVERS ON DESKTOP DROPDOWNS, LEAVE DROPDOWN VISIBLE 

var navDropdowns = document.querySelectorAll("#navLinksContainer .navDropdown");
var navLinks = document.querySelectorAll("#navLinksContainer a");

navDropdowns.forEach(function(item){

	item.addEventListener("mouseover", function(){

		var currentHoveredDropdown = document.querySelector(".hoveredDropdown");
		if(currentHoveredDropdown !== null && currentHoveredDropdown !== this){
			currentHoveredDropdown.classList.remove("hoveredDropdown");
		}
		this.classList.add("hoveredDropdown");

	});

});

document.querySelector("header").addEventListener("mouseleave", function(){

	var currentHoveredDropdown = document.querySelector(".hoveredDropdown");
	if(currentHoveredDropdown !== null && currentHoveredDropdown !== this){
		currentHoveredDropdown.classList.remove("hoveredDropdown");
	}

});

// END HANDLE MOUSEOVERS ON DESKTOP DROPDOWNS










