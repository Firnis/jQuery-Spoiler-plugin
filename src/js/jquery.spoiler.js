(function(window, $) {

	var STATIC_ID = 0;

	$.fn.spoiler = function( options ) {
		var defaultOptions = {
			title: "show",
			prefix: 'spoiler'
		};

		options = $.extend({}, defaultOptions, options);

		return $.each(this, function() {

			var prefix  = options.prefix,
				me      = $(this).addClass(prefix + "-body"),

				spoiler = $('<div class="' + prefix + '" />'),

				id      = prefix + STATIC_ID++,

				check   = $('<input type="checkbox" id="' + id + '" class="' + prefix + '-check" />'),

				label   = $('<label for="' + id + '" class="' + prefix + '-label">' + options.title + '</label>');

			me.before( spoiler );
			spoiler.append(check, [label, me]);
		});
	};
})(window, jQuery);
