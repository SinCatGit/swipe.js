var Swipe = (function ($) {

	var page_n = 0;		// 当前在第几页
	var total_page = 0;	// 总页数
	var mc = null;
	
	// 初始化
	var init = function(e){
		total_page = $(".swipe-page").size();
		for(var i=page_n; i <total_page; i++){
			$(".swipe-page").eq(i).css("z-index",total_page-i);
		}
		var swipeContainer = document.getElementById('swipeContainer');
		mc = new Hammer(swipeContainer);
		mc.on("swipeleft", function(ev) {
			if(page_n >= total_page-1)
			{
				page_n = total_page;
				return;
			}
			$(".swipe-page").eq(page_n+1).removeClass('slideInLeft slideOutRight slideOutLeft').addClass('slideInRight');
			$(".swipe-page").eq(page_n).removeClass('slideInLeft slideOutRight slideInRight').addClass('slideOutLeft');
			page_n = page_n + 1;

		});
		mc.on("swiperight", function(ev) {
			if(page_n <= 0 ){
				page_n = 0;
				return;
			}
			if(page_n == total_page) page_n=total_page-1;
			$(".swipe-page").eq(page_n-1).removeClass('slideOutLeft slideInRight slideOutRight').addClass('slideInLeft');
			$(".swipe-page").eq(page_n).removeClass('slideOutLeft slideInRight slideInLeft').addClass('slideOutRight');
			page_n = page_n - 1;
			console.log('right'+page_n);
		});
	};

	return {
		init: init
	};
})(jQuery); 
