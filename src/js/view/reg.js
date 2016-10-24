
;(function(){
  App.defineViewModel("#reg",{
       data:{},
       watch:{},
       methods:{}
     }, {
      beforeRender: function () {
      }
  });
  $(".captcha-btn").tap(function () {
      var phoneNum=$("#phoneNum").val();
      if(phoneNum&&1){
          $("#reg .container").hide();
          App.navigate("captcha");
      }else{
          alert("手机号码不能为空！");
      }
  });
    $(".next-btn").tap(function () {
        var vcode=$("#vcode").val();
        if(vcode&&1){
            $("#captcha .container").hide();
            App.navigate("reginfo");
        }else{
            alert("验证码不能为空！");
        }
    });
})();
