$(document).on('mouseenter', '.melodic-list li', function() {
 
                 	
                 	$(this).prevAll().stop().animate({'width':'113px','opacity':1})
                 	$(this).stop().animate({
                 		'width':'650px',
                 		'opacity':0.85
                 	})
                 	$(this).nextAll().stop().animate({'width':'113px','opacity':1})
                 console.log("a");
});
$(document).on('mouseout','.melodic-list li',function()
{
	$(this).css({'opacity':1})
});
$(document).on('mouseover','.show-in a:not(:eq(0),:eq(1),:eq(2)),.show-in02 a:not(:eq(0),:eq(1),:eq(2)),.show-in03 a:not(:eq(0),:eq(1),:eq(2)),.show-in04 a:not(:eq(0),:eq(1),:eq(2))',function()
{   
	
	$(this).stop().animate({
			'opacity':0.8
		})
})
$(document).on('mouseover','.top-list li',function()
{   
	
	$(this).stop().animate({
			'opacity':0.8
		})
})
$(document).stop().on('mouseout','.top-list li',function()
{   
	
	$(this).stop().animate({
			'opacity':1
		})
})
$(document).on('mouseover','.new-arrivals-list li',function()
{   
	
	$(this).stop().animate({
			'opacity':0.8
		})
})
$(document).on('mouseout','.new-arrivals-list li',function()
{   
	
	$(this).stop().animate({
			'opacity':1
		})
})
$(document).on('mouseout','.show-in a,.show-in02 a,.show-in03 a,.show-in04 a',function()
{   
	
	$(this).stop().animate({
			'opacity':1
		})
})

				$(window).scroll(function()
				{   
					var $win=$(document).scrollTop();
					
					if($win>0)
					{
					$('.return-top').show();
					}
					else
					{
					$('.return-top').hide();
						
					}
				})
				$('.return-top').click(function(){
					$('html,body').animate({
						'scrollTop':0
					},1000)
				})
				$('.return-top').hover(function(){
					$('.return-top').animate({'opacity':1})
				},function(){
					$('.return-top').animate({'opacity':0.5})
					
				})

