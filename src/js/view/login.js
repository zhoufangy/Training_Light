
;(function(){
  App.defineViewModel("#login",{
       data:{},
       watch:{},
       methods:{}
     },{
     beforeRender:function () {
     }
  });
    $(".login-btn").click(function () {
        var userName=$("#userName").val();
        var pwd=$("#pwd").val();
        if(userName&&pwd){
            API.login({
                userName:userName,
                pwd:pwd
            },function(data){
                if(data.err_no==0){
                    App.navigate("login/success");
                }
            })
        }else{
            alert("用户名或者密码不能为空！");
        }
    });
    /*turn to reg*/
    $(".reg-btn").click(function () {
        window.location.href="./reg.html";
    });
    /*trun to reset*/
    $(".reset-btn").click(function () {
        window.location.href="./reset.html";
    });
})();
