function loadHtml(url, targetId,fn) {
	$.ajax({
			url: url,
			dataType: "html",
			async: false,
			success: function(msg) {
				$("#"+targetId).html(msg);
//				$.cookie('login');
				if(fn){
					fn();
				}
//				console.log($.cookie("login"));

//				var sCookie = $.cookie('login');
//				if(sCookie){
//					//sh
//				}
		}
	})
}


$(function(){
	for(var i=2;i<6;i++)
				{
					$('.nav-list li').eq(i).on('mouseover',function(){
						$('.nav-list li').css({"text-decoration":"none"})
						$(this).css({"text-decoration":"underline"})
						$(this).find('.list').show();
					}).on('mouseout',function()
					{   
						$('.nav-list li').css({"text-decoration":"none"})
						$(this).find('.list').hide();
					})
				}
	
			$('.quit').click(function()
			{   
				
				$.cookie("login","",{expires:0,path:"/"})
				location.reload();
				
			})
			
			
})

