
;(function(){
  App.defineViewModel("#reginfo",{
       data:{},
       watch:{},
       methods:{}
     },{
     beforeRender:function () {
     }
  });
    $(".reg-btn").click(function () {
        var nickName=$("#nickName").val();
        var regPwd=$("#regPwd").val();
        var rRegPwd=$("#rRegPwd").val();
        if(nickName&&regPwd&&rRegPwd){
            alert("注册成功请登录！");
            window.location.href="./#/login";
        }else{
            alert("昵称或者密码不能为空！");
        }
    });
})();
