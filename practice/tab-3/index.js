(function() {

	var $tabs = $(".tab");
	$tabs.on("mouseover", function() {
		var $this = $(this);
		$this.addClass("active").siblings().removeClass("active");
	});

	for (var i = 0; i < $tabs.length; i++) {
		var $tab = $tabs.eq(i);
		var $tabBg = $tab.children(".tab-bg");
		var tabWidth = $tab.width();
		$tabBg.css({
			"width": tabWidth-60
		});
	};
})();
