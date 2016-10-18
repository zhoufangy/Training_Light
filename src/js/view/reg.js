
;(function(){
  App.defineViewModel("#reg",{
       data:{},
       watch:{},
       methods:{}
     }, {
      beforeRender: function () {
      }
  });
  $(".captcha-btn").click(function () {
      $("#reg .container").hide();
      App.navigate("captcha");
  });
    $(".next-btn").click(function () {
        $("#captcha .container").hide();
        App.navigate("reginfo");
    });
})();
