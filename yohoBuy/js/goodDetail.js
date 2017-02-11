$(function() {

	var i = 0;
	var index = null;
	$('.size li').click(function() {
		index = $(this).index();

		$('.size li').css({
			'border': "none"
		})
		$(this).css({
			"border": "1px solid black"
		});

	});
	$(document).on('click', '.corlor-pull-chose li', function() {
		index = $(this).index();

		$('.corlor-pull-chose li').css({
			'border': "none"
		})
		$(this).css({
			"border": "2px solid black"
		});

	});


	$.get("../data/goodDetail/goodDetail.json", function(res) {
		var search = location.search;
		var b = search.replace("?", "");
		var smallShow = "";
		var choseIt = "";
		for(var attr in res) {

			if(res[attr].a == b) {

				$('.big-show').append("<img src=" + res[attr].kind.s1.img + "/>");
				$.each(res[attr].kind.s1.imgarr, function(index, ele) {
					$.each(ele, function(index, a) {
						smallShow += "<img src=" + a + "/>";

					})

				});
               
				$('.small-show').html(smallShow);
                $('.lianjie').html(res[attr].p1);
				$('.name').html(res[attr].p1);
				$('.price-shop').html(res[attr].price);
				$('.p1').html(res[attr].brand);
				$.each(res[attr].kind, function(index, ele) {

					choseIt += "<li><img src=" + ele.img + "></li>";

				});

				$('.corlor-pull-chose').html(choseIt);
				$('.corlor-pull-chose').find('li').eq(0).addClass('chose-it');
				$('.small-show').find("img").on('mouseover', function() {
					i = $(this).attr("src");

					$('.big-show').find("img").attr('src', i)
				})
			}

		}
		$('.corlor-pull-chose li').click(function() {
			var d = $(this).find("img").attr("src");
            var smallShow02="";
            var bigShow02="";
			for(var attr in res) {
				if(res[attr].a == b)
           {    
           	$.each(res[attr].kind,function(index,ele){
           	
           		if(ele.img==d)
           		{
           			$.each(ele.imgarr, function(index,ele) {
           				
           				$.each(ele, function(index,a) {
           					smallShow02 += "<img src=" + a + ">";
           				});
           				
           				bigShow02="<img src="+ele.s1+">";
           			});
           			
           		}
           		console.log(bigShow02);
//         		
           	})
				$('.small-show').html(smallShow02);
				$('.big-show').html(bigShow02);
                
			}
           $('.small-show').find("img").on('mouseover', function() {
					i = $(this).attr("src");

					$('.big-show').find("img").attr('src', i)
				})
			}

		})
	});
	
   
	$('.add-in').click(function() {

		if($('.spinnerExample').val() > 0 && index != null) {

			if($.cookie("login")) {
				var goodsId = $('.name').text();
				var user=JSON.parse($.cookie("login")).data.userphone;
				var userphone=user;
				var size = $('.size li').eq(index).text();
				var shopImg = $('.small-show').find("img").eq(0).attr("src");
                var search = location.search;
		        var b = search.replace("?", "");
				var goodPrice = $('.price-shop').text();
				var arr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
				var goodNumber = $('.spinnerExample').val();
				var isExist = false;
				for(var i = 0; i < arr.length; i++) {
					var obj = arr[i];
					if(obj.name == goodsId && obj.size == size&&obj.img==shopImg) {

						obj.num = parseInt(obj.num) + parseInt(goodNumber);
						isExist = true;

					}
				}
				if(isExist == false) {
					var goods = {
						img: shopImg,
						size: size,
						name: goodsId,
						price: goodPrice,
						num: goodNumber,
						a:b,
						userphone:userphone
					}
					arr.push(goods);
				}
				var arrStr = JSON.stringify(arr);
				$.cookie("cart", arrStr, {
					expires: 30,
					path: "/"
				})
				alert("购买成功");
				$('.spinnerExample').val("0")
				location.reload();
			} else {
				alert("请先登录");
				location.href = "login.html";
			}
		}

	})

	$(window).scroll(function() {
		var $win = $(document).scrollTop();

		if($win > 0) {
			$('.return-top').show();
		} else {
			$('.return-top').hide();

		}
	})
	$('.return-top').click(function() {
		$('html,body').animate({
			'scrollTop': 0
		}, 1000)
	})
	$('.return-top').hover(function() {
		$('.return-top').animate({
			'opacity': 1
		})
	}, function() {
		$('.return-top').animate({
			'opacity': 0.5
		})

	})
})