;
(function($) {
	$.fn.simpleDraggable = function(options) {
		var settings = $.extend({
			distance: 0, // minimum pixels before drag starts
			cursor: 'move', // cursor style during drag
			stop: null, // callback on drag stop
			grid: null // e.g., { x: 20, y: 20 } to snap to 20x20 grid
		}, options);

		return this.each(function() {
			var $el = $(this);
			var isDragging = false;
			var startX = 0;
			var startY = 0;
			var origLeft = 0;
			var origTop = 0;

			$el.css('cursor', settings.cursor);

			$el.on('mousedown', function(e) {
				e.preventDefault();
				startX = e.pageX;
				startY = e.pageY;
				origLeft = parseFloat($el.css('left')) || 0;
				origTop = parseFloat($el.css('top')) || 0;
				isDragging = false;

				// attach handlers to document to handle drag outside element
				$(document).on('mousemove.simpleDrag', onMouseMove);
				$(document).on('mouseup.simpleDrag', onMouseUp);
			});

			function onMouseMove(e) {
				var deltaX = e.pageX - startX;
				var deltaY = e.pageY - startY;

				if (!isDragging) {
					// check if movement exceeds the distance threshold
					if (Math.abs(deltaX) >= settings.distance || Math.abs(deltaY) >= settings.distance) {
						isDragging = true;
					} else {
						return; // not yet enough movement to start drag
					}
				}

				var newLeft = origLeft + deltaX;
				var newTop = origTop + deltaY;

				// If grid is specified, snap to grid
				if (settings.grid && typeof settings.grid.x === 'number' && typeof settings.grid.y === 'number') {
					newLeft = Math.round(newLeft / settings.grid.x) * settings.grid.x;
					newTop = Math.round(newTop / settings.grid.y) * settings.grid.y;
				}

				// update position
				$el.css({
					position: 'absolute',
					left: newLeft,
					top: newTop
				});
			}

			function onMouseUp(e) {
				// remove handlers
				$(document).off('.simpleDrag');

				if (isDragging && typeof settings.stop === 'function') {
					// call stop callback with current element
					settings.stop.call($el[0], e);
				}
				isDragging = false;
			}
		});
	};
})(jQuery);
