/**
 * Dynamic  Image Size
 * --------------------
 * A script to automatically set height of image containers on this site when 
 * a `cover` style effect is needed with an inline img element. Uses a given
 * ratio to set height dynamically based on image width.
 */ 

function resizeGalleryImages(ratioWidth, ratioHeight, containerSelector) {

	// Get a reference to all elements and set ratio
	var imageContainers = document.querySelectorAll(containerSelector);
	var ratio = {
		width: ratioWidth, 
		height: ratioHeight
	};

	for(var i = 0; i < imageContainers.length; i++) {		
		// Resize the image container and hide overflown images
		imageContainers[i].style.height = imageContainers[i].offsetWidth * ratio.height / ratio.width + 'px';
		imageContainers[i].style.display = 'block';
		imageContainers[i].style.position = 'relative';
		imageContainers[i].style.overflow = 'hidden';

		// Make sure the image fills the entire container and position
		// it absolutely in the center.
		var image = imageContainers[i].querySelector('img');
		image.style.minHeight = '100%';
		image.style.minWidth = '100%';
		image.style.width = 'auto';
		image.style.maxWidth = 'none';
		image.style.position = 'absolute';
		image.style.top = '50%';
		image.style.left = '50%';
		image.style.webkitTransform = 'translateX(-50%) translateY(-50%)';
		image.style.mozTransform = 'translateX(-50%) translateY(-50%)';
		image.style.transform = 'translateX(-50%) translateY(-50%)';
	}
}

function resizeBackgroundImage(ratioWidth, ratioHeight, imageSelector) {

	// Get a reference to all elements and set ratio
	var imageContainers = document.querySelectorAll(imageSelector);
	var ratio = {
		width: ratioWidth, 
		height: ratioHeight
	};

	// Resize images
	for(var i = 0; i < imageContainers.length; i++) {
		imageContainers[i].style.height = imageContainers[i].offsetWidth * ratio.height / ratio.width + 'px';
	}
}