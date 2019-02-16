# Dynamic Images By Ratio

A javascript class that transforms an image within a container into a background image with a cover-style effect, based on a given ratio.

<a href="https://jmkulakowski.github.io/my-library/dynamic-images-by-ratio/" target="_blank">demo usage</a>

## Installation

Include the DynamicImagesByRatio.js class file somewhere within your HTML page. I recommend either loading this in the ```<head>``` of the document, or after the ```<footer>```.

```
<!-- Import DynamicImagesByRatio javascript class -->
<script src="js/DynamicImagesByRatio.js" type="text/javascript"></script>
```

## Usage

### Build HTML
Create a ```div``` container with any class you would like as well as a child ```img``` element.

```
<div class="image-container">
	<img src="img/some-image.png" alt="Some Image" />
</div>
```

### Add Javascript

Within some ```<script>``` tags, somewhere below where you imported the classes JS file, instantiate a new object to control the image dynamically based on a specific ratio. The `containerSelector` may be used to call a single image, or multiple images given a class, or ID.

```
<script>
	// Instantiate a new object to control your dynamic image, passing the 
	// selector and your chosen image ratio.
	var dynamicImage = new DynamicImagesByRatio({
		containerSelector: '.image-container',
		ratio: {
			width: 16, // 16:9 ratio
			height: 9
		},
	});
</script>
```

## Authors

* **Jim Kulakowski** - [Developer Site](https://dev.jimkulakowski.com)

## License

This script is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
