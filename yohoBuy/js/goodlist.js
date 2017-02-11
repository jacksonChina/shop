$(function(){
	$('.quit').click(function()
			{   
				
				$.cookie("login","",{expires:0,path:"/"})
				location.reload();
				
			})
	$('.upper').click(function() 
	{   
		
		if($(this).next().css('height')!='0px')
		{   
			
			$(this).next().animate({'height':0},500,function(){
			
		})
		}
		else{
		$(this).next().animate({'height':390},500,function(){
			
		})
		}
		})
		$('.coving').click(function() 
	{   
		
		if($(this).next().css('height')!='0px')
		{   
			
			$(this).next().animate({'height':0},500,function(){
			
		})
		}
		else{
		$(this).next().animate({'height':203},500,function(){
			
		})
		}
		
		})
		$('.skirt').click(function() 
	{   
		
		if($(this).next().css('height')!='0px')
		{   
			
			$(this).next().animate({'height':0},500,function(){
			
		})
		}
		else{
		$(this).next().animate({'height':87},500,function(){
			
		})
		}
		
		})
		$('.shoes').click(function() 
	{   
		
		if($(this).next().css('height')!='0px')
		{   
			
			$(this).next().animate({'height':0},500,function(){
			
		})
		}
		else{
		$(this).next().animate({'height':160},500,function(){
			
		})
		}
		
		})
		
	$('.bag').click(function() 
	{   
		
		if($(this).next().css('height')!='0px')
		{   
			
			$(this).next().animate({'height':0},500,function(){
			
		})
		}
		else{
		$(this).next().animate({'height':163},500,function(){
			
		})
		}
		
		})
	$('.ornament').click(function() 
	{   
		
		if($(this).next().css('height')!='0px')
		{   
			
			$(this).next().animate({'height':0},500,function(){
			
		})
		}
		else{
		$(this).next().animate({'height':310},500,function(){
			
		})
		}
		
		})
	$('.fitment').click(function() 
	{   
		
		if($(this).next().css('height')!='0px')
		{   
			
			$(this).next().animate({'height':0},500,function(){
			
		})
		}
		else{
		$(this).next().animate({'height':136},500,function(){
			
		})
		}
		
		})
	$('.life').click(function() 
	{   
		
		if($(this).next().css('height')!='0px')
		{   
			
			$(this).next().animate({'height':0},500,function(){
			
		})
		}
		else{
		$(this).next().animate({'height':180},500,function(){
			
		})
		}
		
		})
	$('.swim').click(function() 
	{   
		
		if($(this).next().css('height')!='0px')
		{   
			
			$(this).next().animate({'height':0},500,function(){
			
		})
		}
		else{
		$(this).next().animate({'height':72},500,function(){
			
		})
		}
		
		})
	$('.child').click(function() 
	{   
		
		if($(this).next().css('height')!='0px')
		{   
			
			$(this).next().animate({'height':0},500,function(){
			
		})
		}
		else{
		$(this).next().animate({'height':980},500,function(){
			
		})
		}
		
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
		
	
})
