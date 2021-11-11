$(function() {
	$("#callBtn").click(function() {
		var isget = $(this).attr("isget");
		if(isget == 1) {
			return;
		}
		var site = "学慧网-3";
		var c1 = $("#users").val();
        var c2 = $("#s_province option:selected").val();
        var c3 = $("#s_city option:selected").val();
		var local = document.location.href;
		var tel = $("#phone").val();
        var xiangmu="04A-健康-直播";//接口参数xiangmu 代表项目
        var source="百度搜索推广";//接口参数source 代表百度搜索推广
        var type="移动搜索";//接口参数type 代表移动搜索

		if(c1 == "") {
			alert("请输入姓名");
			return;
		}
        if(!/^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/i.test(tel)) {
            alert('请输入正确的手机号码！');
            return;
        }
        if(c2 == "请选择省") {
            alert("请选择您所在省");
            return;
        }
        if(c3 == "请选择市") {
            alert("请选择您所在市");
            return;
        }

		$(this).attr("isget", "1");
		alert("已经成功留言，请等待我们的回复！");
        var oUrl=encodeURI("//crm.xuehuiwang.com/consultMessage/addMessage?brand="+site+"&xiangmu="+xiangmu+"&url="+local+"&name="+c1+"&phone="+tel+"&sheng="+c2+"&shi="+c3+"&source="+source+"&type="+type);
        $.ajax({
            type: "get",
            dataType: "jsonp",
            url:oUrl,
            jsonp: 'callbackparam',
            success: function(json) {
                $(this).attr("isget", "0");
                if(json[0].error == 0) {
                    alert("已经成功留言，请等待我们的回复！");
                } else {
                    alert('服务器返回一个错误，请稍候重试！');
                }
            }
        });
        $("#limit-form")[0].reset();
    });
});