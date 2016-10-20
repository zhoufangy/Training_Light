
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
        $("#reset .container").hide();
        App.navigate("captcha");
    });
    $(".next-btn").tap(function () {
        $("#captcha .container").hide();
        App.navigate("resetpw");
    });
})();
