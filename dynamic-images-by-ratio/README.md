# Dynamic Images By Ratio

A javascript class that automatically sets the height of image containers when a `cover` style effect is needed with an inline img element. Uses a given ratio to set height dynamically based on image width.

[demo usage](https://jmkulakowski.github.io/my-library/dynamic-images-by-ratio/)

## Installation

Include the DynamicImagesByRatio.js class file somewhere within your HTML page. I recommend either loading this in the ```<head>``` of the document, or after the ```<footer>```.

```
<!-- Import DynamicImagesByRatio javascript class -->
<script src="js/DynamicImagesByRatio.js" type="text/javascript"></script>
```

## Usage

### Build HTML
Create a div container with any class you would like as well as a child ```img``` element.

```
<div class="image-container">
	<img src="img/some-image.pmg" alt="Some Image" />
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

### Add CSS Styles
Lastly, add some CSS to the ```head``` of your document, or within an external stylehseet, to set some initial styles for your new, dynamic image. 

```
<style>
	.image-container {
		display: relative;
	}
	.image-container img {
		width: 100%;
	}
</style>
```
*** **IMPORTANT NOTE** *** It's critical that the image container's display property is set to "relative" and that your image has a set width. The child image within the container will be absolutely positioned and the image container's height will be resized based on the child image's width.

## Other Notes
The class is currently only built to handle image container ratios that include a width that is higher than, or equal to, its height. In other words, a 4:5 ratio would not be supported, but a 5:4 ratio would be. Equal widths and heights are also supported (i.e. 1:1).

## Authors

* **Jim Kulakowski** - [Developer Site](https://dev.jimkulakowski.com)

## License

This script is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details