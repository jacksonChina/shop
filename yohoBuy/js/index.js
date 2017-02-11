
var i=0;
$(window).scroll(function(){
	var winH=$(window).scrollTop();
$.get("../data/homePage/main.json",function(res)
	{   
		if(i<1)
		{
			

		i++;
		}
		
	   if(winH>=400&&i<2)
       {   
       	i++;
       	$('.img-list').find("li").remove();
         $.each(res.banner02, function(index,ele) {
			$('.img-list').append("<li><a href='javascript:;'><img src="+ ele.src +"/></a></li>")
        
		});
	var $imgList = $('.img-list');
	var liW = $imgList.find('li').eq(0).width();

	var count = 0;

	var imgTimer = setTimeout(function() {
		count++;
		start();

	}, 3000)
	$('.img-left').click(function() {
		clearTimeout(imgTimer);
		count--;
		start();
		
	})
	$('.img-right').click(function() {
		clearTimeout(imgTimer);
		count++;
		start()
	})

	function start() {
		if(count == -1) {
			count = 2;
			$imgList.css({
				'left': -2880
			})
		}
		if(count == 4) {
			count = 1;
			$imgList.css({
				'left': 0
			})
		}
		$imgList.stop().animate({
			'left': count * -960
		}, function() {
			imgTimer = setTimeout(function() {
				count++;
				start();

			}, 3000)
		})
	}
		
		}
       if(winH>800&&i<3)
       {
       	i++;
       	$('.load-brand').remove();
        var show01="";
		var show02="";
		var show03="";
		
		for(var attr in res.brand.brand01)
		{   
			
			show01+="<li><a href='javascript:;'><img src="+res.brand.brand01[attr]+"/></a></li>"
			
		}
		for(var attr in res.brand.brand02)
		{   
			
			show02+="<li><a href='javascript:;'><img src="+res.brand.brand02[attr]+"/></a></li>"
			
		}
		for(var attr in res.brand.brand03)
		{   
			
			show03+="<li><a href='javascript:;'><img src="+res.brand.brand03[attr]+"/></a></li>"
			
		}
		$('.brand01').append(show01);
		$('.brand02').append(show02);
		$('.brand03').append(show03);
		
			var logoIndex = 0;
	var $logoBrand = $('.logo-brand');
	$('.logo-brand-right').click(function() {

		logoIndex++;

		if(logoIndex == 3) {

			logoIndex = 0;

		}

		$logoBrand.find('ul').not(':last').stop().animate({
			'opacity': 0
		}).eq(logoIndex).animate({
			'opacity': 1
		}, 1000);

	})
	$('.logo-brand-left').click(function() {
		logoIndex--;
		if(logoIndex == -1) {
			logoIndex = 2
		}
		$logoBrand.find('ul').not(':last').stop().animate({
			'opacity': 0
		}).eq(logoIndex).animate({
			'opacity': 1
		}, 1000);
	});
	$('.img-list').find('li').hover(function()
	{    
		clearTimeout(imgTimer);
		$(this).stop().animate({
			'opacity':0.9
		})
	},function()
	{   
		imgTimer = setTimeout(function() {
				count++;
				start();

			}, 2000)
		$(this).stop().animate({
			'opacity':1
		})
	})
	
	$('.top-list').find('li').hover(function(){
		$(this).animate({'opacity':0.9})
	},function(){
		$(this).animate({'opacity':1})
		
	})
	$('.top-list-logo').find('li').hover(function(){
		$(this).animate({'opacity':0.9})
	},function(){
		$(this).animate({'opacity':1})
		
	})
	$('.new-arrivals-list').find('li').hover(function(){
		$(this).animate({'opacity':0.9})
	},function(){
		$(this).animate({'opacity':1})
		
	})
       	
       }
       if(winH>1300&&i<4)
		{
			i++;
       	$('.show-in-left').eq(0).find('.in01').remove();
       	$('.show-in').find('.show-load01').remove();
       	$('.show-in').find('.jacket-load01').remove();
       	
			
		  $.each(res.in01, function(index,ele) {
			
			$("<a href='javascript:;' class='in01'><img src="+ ele.src +"/></a>").insertBefore($('.show-in').find('.wrapper-list'))
        
		});
		  $.each(res.shop01, function(index,ele) {
			
			$('.show-in').append("<a href='javascript:;' class="+index+"><img src="+ ele +"/></a>");
        
		});
		}
		if(winH>1850&&i<5)
		{
			i++;
       	$('.show-in-left').eq(1).find('.in01').remove();
       	$('.show-in02').find('.show-load01').remove();
       	$('.show-in02').find('.jacket-load01').remove();
       	
			
		  $.each(res.in02, function(index,ele) {
			
			$("<a href='javascript:;' class='in01'><img src="+ ele.src +"/></a>").insertBefore($('.show-in02').find('.wrapper-list'))
        
		});
		  $.each(res.shop02, function(index,ele) {
			
			$('.show-in02').append("<a href='javascript:;' class="+index+"><img src="+ ele +"/></a>");
        
		});
		}
		if(winH>2550&&i<6)
		{
			i++;
       	$('.show-in-left').eq(2).find('.in01').remove();
       	$('.show-in03').find('.show-load01').remove();
       	$('.show-in03').find('.jacket-load01').remove();
       	
			
		  $.each(res.in03, function(index,ele) {
			
			$("<a href='javascript:;' class='in01'><img src="+ ele.src +"/></a>").insertBefore($('.show-in03').find('.wrapper-list'))
        
		});
		  $.each(res.shop03, function(index,ele) {
			
			$('.show-in03').append("<a href='javascript:;' class="+index+"><img src="+ ele +"/></a>");
        
		});
		}
		if(winH>3350&&i<7)
		{
			i++;
       	$('.show-in-left').eq(3).find('.in01').remove();
       	$('.show-in04').find('.show-load01').remove();
       	$('.show-in04').find('.jacket-load01').remove();
       	
			
		  $.each(res.in04, function(index,ele) {
			
			$("<a href='javascript:;' class='in01'><img src="+ ele.src +"/></a>").insertBefore($('.show-in04').find('.wrapper-list'))
        
		});
		  $.each(res.shop04, function(index,ele) {
			
			$('.show-in04').append("<a href='javascript:;' class="+index+"><img src="+ ele +"/></a>");
        
		});
		}
		if(winH>3600&&i<8)
		{
			i++;
					
		$.each(res.melodic, function(index,ele) {
			
			$('.melodic-list').append("<li><a href='javascript:;'><img src="+ ele.src +"/></a></li>")
			
		});
		$('.melodic-list').find('li').first().addClass('hover');
		$('.melodic-list').find('li').last().addClass('last');
		}


	    if(winH>4600&&i<9)
	    {
	    	i++
	    	$('.load-list').remove();
		$.each(res.top100, function(index,ele) {
			
			$('.top-list').append("<li><a href='javascript:;'><img src="+ ele.src +"/></a><p>"+ele.p1+"</p><p>"+ele.p2+"</p></li>");
        
		});
				$.each(res.topLogo, function(index,ele) {
			
			$('.top-list-logo').append("<li><a href='javascript:;'><img src="+ ele.src +"/></a></li>");
        
		});
		}
       if(winH>6200&&i<10)
       {
       	i++;
       	$('.load-new-arrivals').remove();
		$.each(res.newArrivals, function(index,ele) {
			
			$('.new-arrivals-list').append("<li><a href='javascript:;'><img src="+ ele.src +"/></a><p>"+ele.p1+"</p><p>"+ele.p2+"</p></li>");
        
		});
}
		


})
		})

