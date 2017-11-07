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
			console.log(e.target);
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left;
			
			$(this).find('span').css({
				width: (e.target.clientWidth + relX) - e.target.clientWidth
			});
		})
		.on('click', function(e) {
			e.preventDefault();
			
			console.log(e.target);
			
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

function setOnLoadRation(btn) {
	btn.each(function(idx, item) {
		var ratingValOnLoad = $(item).attr("data-rating"),
			ratingFillElem = $(item).find('span');
		
		var loadSetRatingVal = (ratingValOnLoad / 5) * 115;
		
		ratingFillElem.css({
			width: loadSetRatingVal
		});
	});
}

$(function() {
	var ratingBtn = $('.rating');
	
	setOnLoadRation(ratingBtn);
	mouseSetRating(ratingBtn);
});