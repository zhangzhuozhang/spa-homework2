$(function(){var l=$("#huoqu"),t=$("#user"),c=$("#tel"),e=$("#pwd"),u=$("#check"),a=60,h=!1,n=!1,o=!1,f=!1;t.focusout(function(){""==t.val()?$("#user1").html("用户名不能为空"):/^(?!(\d+)$)[\u4e00-\u9fff\w]+$/.test(t.val())?($("#user1").html(""),h=!0):$("#user1").html("用户名仅支持中英文，数字和下划线且不能为纯数字")}),c.focusout(function(){""===c.val()?$("#tel1").html("请输入手机号"):/^[1][3,4,5,7,8][0-9]{9}$/.test(c.val())?($("#tel1").html(""),n=!0):$("#tel1").html("手机号码格式不正确")}),e.focusout(function(){""==e.val()?$("#pwd1").html("请输入密码"):/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,20})$/.test(e.val())?($("#pwd1").html(""),o=!0):$("#pwd1").html("密码设置不符合要求")}),u.focusout(function(){""==u.val()?$("#check1").html("请输入正确的验证码"):($("#check1").html(""),f=!0)}),l.click(function(){l.attr("disabled",!0);var t=setInterval(function(){l.val(a),0==--a&&($("#check1").html("请求超时，请稍后再试"),clearInterval(t),l.val("重新获取"),l.attr("disabled",!1),a=60)},1e3)}),$("#sub").click(function(){$("#te").prop("checked")&&h&&n&&o&&f&&alert("注册成功")})});