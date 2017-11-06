/**
 *
 * @param val
 * @returns {string}
 */
function calcRating(val) {
	return parseFloat((val * 5) / 115).toFixed(1);
}

/**
 *
 * @param btn
 */
function mouseSetRating(btn) {
	btn
		.on('mousemove', function(e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left;
			
			$(this).find('span').css({
				width: (e.target.clientWidth + relX) - e.target.clientWidth
			});
		})
		.on('click', function(e) {
			e.preventDefault();
			
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left;
			
			var widthVal = (e.target.clientWidth + relX) - e.target.clientWidth;
			
			$(this).find('span').css({
				width: (e.target.clientWidth + relX) - e.target.clientWidth
			});
			
			console.log(calcRating(widthVal));
			
			$(this).prop("disabled", true);
		});
}

$(function() {
	var ratingBtn = $('.rating'),
		ratingValOnLoad = ratingBtn.attr("data-rating"),
		ratingFillElem = ratingBtn.find('span');
	
	var loadSetRatingVal = (ratingValOnLoad / 5) * 115;
	
	ratingFillElem.css({
		width: loadSetRatingVal
	});
	
	mouseSetRating(ratingBtn);
});