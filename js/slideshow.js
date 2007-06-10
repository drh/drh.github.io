function slideshow(args) {
	var win = window.open("slideshow.php?" + args, "slideshow",
		"resizable,height=492,width=600");
	win.focus();
}

function details(span, id) {
	var div = document.getElementById(id);
	if (span.title == 'Expand') {
		div.style.display = 'inline';
		span.title = 'Collapse';
	} else {
		div.style.display = 'none';
		span.title = 'Expand';
	}
}