
;(function(){
  App.defineViewModel("#resetpw",{
       data:{},
       watch:{},
       methods:{}
     },{
     beforeRender:function () {
     }
  });
    $(".reset-btn").click(function () {
        var resetPwd=$("#resetPwd").val();
        var rResetPwd=$("#rResetPwd").val();
        if(resetPwd&&rResetPwd){
            alert("修改成功请重新登录！");
            window.location.href="./#/login";
        }else{
            alert("密码不能为空！");
        }
    });
})();
