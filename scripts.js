

function toggleNav() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("nav-bar-active");
	
	var content = document.getElementsByClassName("content");
	console.log(content.length);
	
	var i;
	for (i = 0; i < content.length; i++) {
    	content[i].classList.toggle("content-nav-active");
	}

}


var elem = document.querySelector('.all-items');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.item',
  columnWidth: 200
});
