/*!
 * jQuery transpose() plugin
 *
 * Version 1.2 (2 Aug 2011)
 *
 * Copyright (c) 2011 Robert Koritnik
 * Licensed under the terms of the MIT license
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
	
	var keys = {
		containerKey: "transposed",
		itemKey: "pre-transpose-index"
	};

	$.fn.extend({

		transpose: function() {
			/// <summary>Transposes a set of floated elements so that they run in columns rather than rows.</summary>
			/// <return type="jQuery">Returns the same jQuery set that this function was run on.</return>

			// only transpose when there're enough items
			if (this.length > 2)
			{
				var originalSet = this;
				var containers = this.parent();
				
				// transposition must be applied per container
				containers.each(function() {
				
					var dom = this;
					var container = $(this);
					if (typeof(container.data(keys.containerKey)) == "undefined")
					{
						container.data(keys.containerKey, true);
						var items = originalSet.filter(function() {
							return this.parentNode == dom;
						});
						var itemCount = items.length;
						var newOrder;
						
						// only transpose when there're enough items
						if (itemCount > 2)
						{
							// calculate number of columns and rows
							var cols;
							var firstTop = items.eq(0).position().top;
							for (cols = 1; cols < itemCount && firstTop == items.eq(cols).position().top; cols++);

							var rows = parseInt(itemCount / cols) + 1;
						
							// only apply transposition when there's enough items (more than one column and more than one row)
							if (itemCount > cols && cols > 1)
							{
								var columnHeight = [];
								for (var i = 0; i < cols; i++) columnHeight.push(rows - (i % cols < itemCount % cols ? 0 : 1));
								
								newOrder = $();
								var index = 0;
								for (var i = 0; i < itemCount; i++)
								{
									newOrder = newOrder.add(items.eq(index).detach().data(keys.itemKey, index));
									index += columnHeight[i % cols];
									if (index >= itemCount) index++;
									index = index % itemCount;
								}

								// add non-HTML line break after each element to preserve inline elements' spacing
								newOrder.appendTo(container).after("\n");
							}
						}
					}
				});
			}
		   
			return this;
		}
	});
})(jQuery);
