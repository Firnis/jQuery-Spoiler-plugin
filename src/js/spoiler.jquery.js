(function(window, $) {

	var STATIC_ID = 0;

	$.fn.spoiler = function( options ) {
		var defaultOptions = {
			title: {
				open:  "Open",
				close: "Close"
			},
			prefix: 'spoiler'
		};

		options = $.extend({}, defaultOptions, options);

		return $.each(this, function() {

			var prefix  = options.prefix,
				me      = $(this).addClass(prefix + "-body"),

				spoiler = $('<div class="' + prefix + '" />'),

				id      = prefix + STATIC_ID++,

				check   = $('<input type="checkbox" id="' + id + '" class="' + prefix + '-check" />'),

				label   = '<label for="' + id + '" class="' + prefix + '-label ' + prefix;

				openLabel  = $(label + '-open">'  + options.title.open  + '</label>');

				closeLabel = $(label + '-close">' + options.title.close + '</label>');

			me.before( spoiler );
			spoiler.append(check, [openLabel, closeLabel, me]);
		});
	};
})(window, jQuery);
