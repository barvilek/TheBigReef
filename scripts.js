// Masonry stuff
var elem = document.querySelector(".all-items");
var msnry = new Masonry( elem, {
  // options
  itemSelector: ".item",
  horizontalOrder: true
});

imagesLoaded( ".all-items" ).on( "progress", function() {
  // layout Masonry after each image loads
  msnry.layout();
});


// Toggle nav-bar
var navBtn = document.querySelector("#nav-btn");

navBtn.addEventListener("click", function () {
	var navbar = document.getElementById("navbar");
    navbar.classList.toggle("nav-bar-active");

	var content = document.getElementById("content");
	content.classList.toggle("content-nav-active");
	
	msnry.layout();
});

// Remove an item
var deleteBtns = document.querySelectorAll(".delete");

for (var i=0; i<deleteBtns.length; i++) {
	deleteBtns[i].addEventListener("click", function () {
		var removeMe = this.parentNode.parentNode;
		msnry.remove(removeMe);
		msnry.layout();
	});
}

