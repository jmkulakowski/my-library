/**
 * Dynamic Images By Ratio
 * -------------------------
 * A javascript class that transforms an image within a container into a
 * background image with a cover-style effect, based on a given ratio.
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

			// Get a reference to the image and its container
			var container = imageContainers[i];
			var image = container.querySelector('img');

			// Set some initial CSS styles to make sure the image is at least
			// as wide as the container.
			image.style.display = 'block';
			image.style.width = '100%';
			image.style.height = 'auto';
			image.style.position = 'absolute';
			image.style.top = '50%';
			image.style.left = '50%';
			image.style.webkitTransform = 'translateX(-50%) translateY(-50%)';
			image.style.mozTransform = 'translateX(-50%) translateY(-50%)';
			image.style.transform = 'translateX(-50%) translateY(-50%)';

			// Determine the aspect ratio of the image and use results to 
			// make sure the image covers the entire container.
			imageContainers[i].style.height = imageContainers[i].offsetWidth * this.ratio.height / this.ratio.width + 'px';
			imageContainers[i].style.display = 'block';
			imageContainers[i].style.position = 'relative';
			imageContainers[i].style.overflow = 'hidden';

			var containerSize = this.getWidthAndHeight(container);
			var imageSize = this.getWidthAndHeight(image);

			// Check the height
			if( imageSize.height < containerSize.height ) {
				image.style.width = 'auto';
				image.style.height = '100%';
			}

			// Check the width
			if( imageSize.width < containerSize.width ) {
				
				var difference = containerSize.width - imageSize.width;
				
				// Get updated values
				imageSize = this.getWidthAndHeight(image);

				// Resize the image to fit within the container
				image.style.width = imageSize.width + difference;
				image.style.height = imageSize.height + difference;
			}

		}

	}

	// Get the pixel width and height of an element
	this.getWidthAndHeight = function(element) {
		var sizes = {
			width: element.clientWidth || element.offsetWidth || element.scrollWidth,
			height: element.clientHeight || element.offsetHeight || element.scrollHeight
		}
		// console.log(element.tagName.toLowerCase() + '.' + element.classList[0] + ' - w:' + sizes.width + ' / h:' + sizes.height);
		// console.log('- - -');

		return sizes;
	}

}