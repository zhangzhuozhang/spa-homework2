
$(function(){
    var huoqu = $('#huoqu');
    var user = $('#user');
    var tel = $('#tel');
    var pwd = $('#pwd');
    var check = $('#check');
    var num=60;
    var pan1=false,
        pan2=false,
        pan3=false,
        pan4=false;
// 校验用户名
    user.focusout(function(){
        var reg= /^(?!(\d+)$)[\u4e00-\u9fff\w]+$/;;
        if(user.val()==''){
            $('#user1').html('用户名不能为空');
        }else if(!reg.test(user.val())){
            $('#user1').html('用户名仅支持中英文，数字和下划线且不能为纯数字')
        }else{
            $('#user1').html('');
            pan1=true;
        }
    })
    // 手机号码校验
    tel.focusout(function(){
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(tel.val()===''){
            $('#tel1').html('请输入手机号');
        }else if(!myreg.test(tel.val())){
            $('#tel1').html('手机号码格式不正确');
        }else{
            $('#tel1').html('');
            pan2=true;
        }
    })
    //密码校验
    pwd.focusout(function(){
        var msg=/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{6,20})$/;
        if(pwd.val()==''){
            $('#pwd1').html('请输入密码');
        }else if(!msg.test(pwd.val())){
            $('#pwd1').html('密码设置不符合要求')
        }else{
            $('#pwd1').html('');
            pan3=true;
        }
    })
    //验证码校验
    check.focusout(function(){
        if(check.val()==''){
            $('#check1').html('请输入正确的验证码');
        }else{
            $('#check1').html('');
            pan4=true;
        }
    })


    //获取验证码定时器
    huoqu.click(function(){
        huoqu.attr('disabled',true);
        var dev=setInterval(function(){
            huoqu.val(num);
            num--;
            if(num==0){
                $('#check1').html('请求超时，请稍后再试')
                clearInterval(dev)
                huoqu.val('重新获取');
                huoqu.attr('disabled',false);
                num=60;
            }
        },1000)
    })
    $('#sub').click(function(){
        var te=$('#te').prop('checked')
        // alert($('#te').prop('checked'));
        
        if(te&&pan1&&pan2&&pan3&&pan4){
            alert('注册成功');
        }
    })
})
