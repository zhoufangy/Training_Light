
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
      $("#reg .container").hide();
      App.navigate("captcha");
  });
    $(".next-btn").tap(function () {
        $("#captcha .container").hide();
        App.navigate("reginfo");
    });
})();
