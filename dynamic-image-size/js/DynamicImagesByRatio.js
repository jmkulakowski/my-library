/**
 * Dynamic Images By Ratio
 * -------------------------
 * A class that automatically sets the height of image containers when a 
 * `cover` style effect is needed with an inline img element. Uses a given
 * ratio to set height dynamically based on image width.
 */ 
function DynamicImagesByRatio(options) {

	this.containerSelector = options.containerSelector;
	this.ratio = options.ratio;

	var self = this;

	// Set image size after DOM loads
	window.addEventListener('DOMContentLoaded', function() {
		self.setDynamicImageSize();
	}, false);

	// Set image size when window is resized
	window.addEventListener('resize', function() {
		self.setDynamicImageSize();
	});

	this.setDynamicImageSize = function() {

		// Get a reference to all elements and set ratio
		var imageContainers = document.querySelectorAll(this.containerSelector);

		for(var i = 0; i < imageContainers.length; i++) {		
			// Resize the image container and hide overflown images
			imageContainers[i].style.height = imageContainers[i].offsetWidth * this.ratio.height / this.ratio.width + 'px';
			imageContainers[i].style.display = 'block';
			imageContainers[i].style.position = 'relative';
			imageContainers[i].style.overflow = 'hidden';

			// Make sure the image fills the entire container and position
			// it absolutely in the center.
			var image = imageContainers[i].querySelector('img');

			image.style.minHeight = '100%';
			// image.style.minWidth = '100%';
			// image.style.width = 'auto';
			image.style.maxWidth = 'none';
			image.style.position = 'absolute';
			image.style.top = '50%';
			image.style.left = '50%';
			image.style.webkitTransform = 'translateX(-50%) translateY(-50%)';
			image.style.mozTransform = 'translateX(-50%) translateY(-50%)';
			image.style.transform = 'translateX(-50%) translateY(-50%)';
		}

	}

}