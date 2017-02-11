window.onload=function()
{
	var rgntel=/^[1-3]\d{10}$/;
	var rgnpwd=/^[0-9a-zA-Z]{6,20}$/;
	var phone=document.getElementsByClassName('phone')[0];
	var test=document.getElementsByClassName('try')[0];
	var testVal=document.getElementsByClassName('test')[0];
	var pwd=document.getElementsByClassName('pwd')[0];

	
	test.onclick=function()
			{   
				
				var index=parseInt(Math.random()*9000+1000);
				test.value=index;
				
				
			}
	phone.onkeyup=function()
	{
		if(rgntel.test(phone.value)==false)
				{   
				
				ok01=false;
					$('.err-tip').css({'top':190,'left':855})
					$('.err-tip').html("手机号码格式不正确,请重新输入")
					$('.err-tip').show();
					$('.phone').css({'border':'2px solid red'})
				}
				if(rgntel.test(phone.value)==true)
				{
					$('.phone').css({'border':'1px solid #dbdbdb'})
					$('.err-tip').hide();
					ok01=true;
				}
				
	}
		testVal.onkeyup=function()
	{
		if(testVal.value!=test.value)
				{   
				
				ok02=false;
					$('.err-tip').css({'top':256,'left':792})
					$('.err-tip').html("图形验证码错误")
					$('.err-tip').show();
					$('.test').css({'border':'2px solid red'})
				}
				else
				{   
					ok02=true;
					$('.test').css({'border':'1px solid #dbdbdb'})
					$('.err-tip').hide();
					
				}
				
	}
	pwd.onkeyup=function()
	{  
		if(rgnpwd.test(pwd.value)==false)
		{         
			ok03=false;
			         $('.err-tip').show();
					$('.err-tip').html("密码只支持6-20位字符")
					$('.err-tip').css({'top':388,'left':795})			         
					$('.pwd').css({'border':'2px solid red'})
					
			       
		}
		else if(rgnpwd.test(pwd.value)==true){
			         $('.err-tip').hide();
			ok03=true;
					$('.pwd').css({'border':'1px solid #dbdbdb'})
			
		}
		    if(pwd.value.toString().length<8)
			{
				$('.pwd-intensitylow').css({'background':'red','color':'white'})
				$('.pwd-intensitymid').css({'background':'#e8e8e8','color':'#b9b9b9'})
				$('.pwd-intensityhigh').css({'background':'#e8e8e8','color':'#b9b9b9'})
				
			}
			else if(pwd.value.toString().length>=8&&pwd.value.toString().length<14)
			{   
				$('.pwd-intensitylow').css({'background':'#e8e8e8','color':'#b9b9b9'})
				
				$('.pwd-intensitymid').css({'background':'red','color':'white'})
				$('.pwd-intensityhigh').css({'background':'#e8e8e8','color':'#b9b9b9'})
				
				
			}
			else if(pwd.value.toString().length>14)
			{   
				$('.pwd-intensitylow').css({'background':'#e8e8e8','color':'#b9b9b9'})
				
				$('.pwd-intensitymid').css({'background':'#e8e8e8','color':'#b9b9b9'})
				$('.pwd-intensityhigh').css({'background':'red','color':'white'})
				
			}
	}
	    
	    	$('.rightnow-register').click(function(){
	    if($('.checkBox01').prop('checked')==true&&ok01==true&&ok02==true&&ok03==true)
	    {       
	    	var userphone=$('.phone').val();
	    	var psw=$('.pwd').val();
	    	var sCookie=$.cookie('userphone');
	    	var arrCookie=sCookie?JSON.parse(sCookie):[];
	    	var bool=true;
	    	$.each(arrCookie, function() {
	    		if(this.userphone==userphone)
	    		{
	    			alert('用户已注册');
	    			clear();
	    			bool=false;
	    		}
	    	});
	    	if(bool)
	    	{
	    		arrCookie.push({"userphone":userphone,'psw':psw})
	    		$.cookie('userphone',JSON.stringify(arrCookie),{expires:1,path:"/"});
	    		alert("注册成功");
	    		location.href="login.html";
	    	console.log($.cookie('userphone'))
	    	}
	    	else{
	    		alert("用户信息输入错误")
	    	}
	    		
	    	}
	    
	    	})
	    function clear()
	    {
	    	$('.phone').val(" ");
	    	$('.pwd').val("");
	    	$('.test').val(" ");
	    	$('.mesg').val(" ");
	    }
	
	
}
