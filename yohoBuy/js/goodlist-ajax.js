$.get("../data/goodList/goodlist.json", function(res) {

	$.each(res.goodlist01, function(index, ele) {

		$("<div class='good-info'><div class='good-detail-img'><a href='goodDetail.html?" + ele.a + "'><img src=" + ele.src + "></a></div><div class='good-detail-text'><a href='javascript:;'>" + ele.p1 + "</a></div><p class='brand'><a href='#'>" + ele.brand + "</a></p><p class='price-list'>" + ele.price + "</p></div>").insertBefore($('.connent-bottom'))
	});
	$('.price-sort').click(function() {
		var arry = [];
		
		$.each(res.goodlist01, function(index, ele) {
			
			arry.push(ele);

		});
		arry.sort(function(a,b){
			
			return parseInt(a.price.replace("¥",""))-parseInt(b.price.replace("¥",""));
		})
		$('.list-show').find('.good-info').remove();
		$.each(arry, function(index,ele) {
		$("<div class='good-info'><div class='good-detail-img'><a href='goodDetail.html?" + ele.a + "'><img src=" + ele.src + "></a></div><div class='good-detail-text'><a href='javascript:;'>" + ele.p1 + "</a></div><p class='brand'><a href='#'>" + ele.brand + "</a></p><p class='price-list'>" + ele.price + "</p></div>").insertBefore($('.connent-bottom'))
			
			console.log(ele);
		});
		
		
	})
	$('.iyogurt').click(function(){
		$('.list-show').find('.good-info').remove();
		$.each(res, function(index,ele) {
			$.each(ele, function(index,a) {
				if(a.p1.search("iyogurt")==0)
				{   
					console.log(a);
					
					$("<div class='good-info'><div class='good-detail-img'><a href='goodDetail.html?" + a.a + "'><img src=" + a.src + "></a></div><div class='good-detail-text'><a href='javascript:;'>" + a.p1 + "</a></div><p class='brand'><a href='#'>" + a.brand + "</a></p><p class='price-list'>" +a.price + "</p></div>").insertBefore($('.connent-bottom'))
				}
			
		});
		});
		
	})

})
$.get("../data/goodDetail/goodDetail.json", function(res) {

	$(document).on('mouseenter','.list-show .good-info', function() {
		var thisImg = $(this).find('img').attr("src");

		$.each(res, function(index, ele) {

			if(ele.src == thisImg) {
				var imgValue = "";
				$.each(ele.kind.s1.imgarr, function(index, ele) {
					$.each(ele, function(index, a) {
						imgValue += "<img class='effectimg01' src=" + a + ">";
					});

				});

				$('.effect').html("<a href='goodDetail.html?" + ele.a + "'><img class='effectimg' src=" + ele.kind.s1.img + "></a><div class='show-right'>" + imgValue + "</div><div class='good-detail-text01'><a href='javascript:;'>" + ele.p1 + "</a></div><p class='brand01'><a href='#'>" + ele.brand + "</a></p><p class='price-list01'>" + ele.price + "</p></div>")
			}
		});

		$('.effect').css({
			"top": $(this).offset().top - 28,
			"left": $(this).offset().left - 25,
			'display': 'block'
		})
		$('.show-right').find('.effectimg01').on('mouseover', function() {
			$('.effectimg').prop("src", $(this).attr('src'));
		})

	})
	$('.effect').on('mouseover', function() {
		$('.effect').css({
			"display": "block"
		});
	});
	$('.effect').on('mouseout', function() {
		$('.effect').css({
			"display": "none"
		});
	});
})