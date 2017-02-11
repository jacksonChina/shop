$(function() {
	$('.onsubmit').click(function() {
		var userphone = $('.login-username').val();
		var psw = $('.login-password').val();
		if(userphone != "" && psw != "") {
			var sCookie = $.cookie("userphone");
			if(sCookie) {
				var arrCookie = JSON.parse(sCookie);
				var bool = false;
				var pswError=false;
				$.each(arrCookie, function() {
					if(this.userphone == userphone && this.psw == psw) {
						bool = true;
					}
					if(this.userphone == userphone && this.psw != psw)
					{
						pswError=true;
					}
				})
				if(bool) {
					alert("登录成功");
					var obj = {
						is: true,
						data: {
							"userphone": userphone,
							"psw": psw
						}
					};
					$.cookie("login", JSON.stringify(obj), {
						expires: 1,
						path: "/"
					})

	    		    location.href="homePage.html";
					
					console.log($.cookie("login"));
				}
				else if(pswError)
				{
					alert("密码错误");
					$('.login-password').val("");
				}
				else {
					alert("用户名不存在请注册")
					 $('.login-username').val("");
            $('.login-password').val("");
				}
			} 
			else {
				alert("用户名不存在请注册")
           
			}
		} else {
			alert("输入有误")
            
		}

	})
})