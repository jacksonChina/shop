$(function() {

	if($.cookie("cart") && $.cookie("login")) {
		var sCookie = JSON.parse($.cookie("cart"));
		var userphone=JSON.parse($.cookie("login")).data.userphone;
		var index=false;
		var deleteIndex=-1;
        
//       if($.cookie("cart")!="[]")
//       {
//       	$('.empty-tr').css({"display":"none"});
         	
		for(var i = 0; i < sCookie.length; i++) {
            if(userphone==sCookie[i].userphone)
            {
            index=true;
            deleteIndex++;
            
           
			$("#sum").append("<tr><td class='cart-01'><img class='shopImg' src=" + sCookie[i].img + "><a href=goodDetail.html?"+sCookie[i].a+">" + sCookie[i].name + "</a>(<span class='size'>" + sCookie[i].size + "</span>)" + "</td><td class='cart-empty'>" + sCookie[i].price + "</td><td class='cart-empty'>0</td><td class='cart-empty'><span class='sub'>-</span><span class='shop-number'>" + sCookie[i].num + "</span><span class='add'>+</span></td><td class='cart-empty'>" + parseInt(sCookie[i].num) * parseInt(sCookie[i].price.replace("¥", "")) + "</td><td class='cart-empty'><a href='#' class='delete'>删除</a></td></tr>")
			$('.delete').eq(deleteIndex).attr("a",i);
			$('.delete').eq(deleteIndex).click(function() {

				           
				var arr = JSON.parse($.cookie("cart"));
				var q=$(this).attr("a");
                console.log(q);
				arr.splice(q, 1);
				$.cookie("cart", JSON.stringify(arr), {
					expires: 30,
					path: "/"
				})
				location.reload();

			})
			}
           
		}
		if(index==true)
		{
			$('.empty-tr').css({"display":"none"});
		}
		else
		{
			$('.empty-tr').css({"display":""});
			
		}
		var sum = 0;
		for(var j = 2; j < $("#sum tr").length; j++) {
			sum += parseInt($("#sum tr").eq(j).find("td").eq(4).text())
			$(".sum-string").html(sum + "元");

		}
		$('.add').click(function() {
			var add = parseInt($(this).parent().find('.shop-number').html());
			$(this).parent().find('.shop-number').html(add + 1);
			var img = $(this).parent().parent().find("td").eq(0).find('.shopImg').attr("src");
			var size = $(this).parent().parent().find("td").eq(0).find('.size').text();
			//			location.reload();
			var num = $(this).parent().find('.shop-number').html();
			var sCookie = JSON.parse($.cookie("cart"));

			for(var i = 0; i < sCookie.length; i++) {
				var obj = sCookie[i];

				if(obj.img == img && obj.size == size) {
					obj.num = num;

				}

			}
			var stCookie = JSON.stringify(sCookie);

			$.cookie("cart", stCookie, {
				expires: 30,
				path: "/"
			})
			location.reload();

		})
		$('.sub').click(function() {
			if($(this).parent().find('.shop-number').html() > 1) {
				var add = parseInt($(this).parent().find('.shop-number').html());
				$(this).parent().find('.shop-number').html(add - 1);
				var img = $(this).parent().parent().find("td").eq(0).find('.shopImg').attr("src");
				var size = $(this).parent().parent().find("td").eq(0).find('.size').text();
				var num = $(this).parent().find('.shop-number').html();
				var sCookie = JSON.parse($.cookie("cart"));
				for(var i = 0; i < sCookie.length; i++) {
					var obj = sCookie[i];

					if(obj.img == img && obj.size == size) {
						obj.num = num;

					}

				}
				var stCookie = JSON.stringify(sCookie);

				$.cookie("cart", stCookie, {
					expires: 30,
					path: "/"
				})
				location.reload();
			}
			else if($(this).parent().find('.shop-number').html() == 1) {
				if(confirm("是否删除商品"))
				{
				var sCookie = JSON.parse($.cookie("cart"));
				var img = $(this).parent().parent().find("td").eq(0).find('.shopImg').attr("src");
				var size = $(this).parent().parent().find("td").eq(0).find('.size').text();
				
				for(var i = 0; i < sCookie.length; i++) {

					if(sCookie[i].img == img && sCookie[i].size == size) {
						sCookie.splice(i,1);
						
                       
                       
					} else {
						
					}

				}
				var arrCookie=JSON.stringify(sCookie);
				
				$.cookie("cart", arrCookie, {
					expires: 30,
					path: "/"
				})
				location.reload();
				}
             
			}

		})
//		}
//       else
//       {  
//          console.log("aaa");
//       	$('.empty-tr').css({"display":""});
//       }

	}
})