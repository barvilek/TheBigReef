var elem = document.querySelector('.all-items');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.item',
  horizontalOrder: true
});


function toggleNav() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("nav-bar-active");

	var content = document.getElementById("content");
	content.classList.toggle("content-nav-active");
	
	msnry.layout();
}

function removeItem(removeMe) {
	msnry.remove(removeMe);
	msnry.layout();
}

