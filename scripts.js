var elem = document.querySelector('.all-items');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.item'
});


function toggleNav() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("nav-bar-active");
	
	var content = document.getElementById("content");
	content.classList.toggle("content-nav-active");
	
	msnry.layout();
}


