<?php
/**
 * Dynamic rows with Bootstrap
 * ---------------------------
 * Opens/closes rows within Bootstrap when looping through an 
 * array in PHP.
 */

	$articles = /* Query articles from database */;

	// Setup variables for dynamic Bootstrap rows
	$numOfCols = 3;
	$rowCount = 0;
	$bootstrapColWidth = 12 / $numOfCols;
?>

<!-- Start the first row -->
<div class="row">

	<?php
	// Loop through articles
	for($i = 0; $i < count($articles); $i++) {
	?>

		<?php 

			// Output Article details here
			// i.e. :
			// 		- articles[$i]['featured-image'];
			// 		- articles[$i]['description'];

		?>

		<?php
			// Increment the row count and check if a new row
			// needs to be started.
		    $rowCount++;
		    if($rowCount % $numOfCols == 0) echo '</div><div class="row"><!-- End .row -->';
		?>
	<?
	} // END for
	?>

</div><!-- .row (close the last row) -->