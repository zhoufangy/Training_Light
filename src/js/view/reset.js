
;(function(){
  App.defineViewModel("#reset",{
       data:{},
       watch:{
       },
       methods:{
       }
     },{
     beforeRender:function () {

     }
  });
    $(".captcha-btn").tap(function () {
        var resetNum=$("#resetNum").val();
        if(resetNum&&1){
            $("#reset .container").hide();
            App.navigate("captcha");
        }else{
            alert("手机号码不能为空！");
        }
    });
    $(".next-btn").tap(function () {
        var vcode=$("#vcode").val();
        if(vcode&&1){
            $("#captcha .container").hide();
            App.navigate("resetpw");
        }else{
            alert("验证码不能为空！");
        }
    });
})();
