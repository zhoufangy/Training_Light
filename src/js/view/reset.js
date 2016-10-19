
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
    $(".captcha-btn").click(function () {
        $("#reset .container").hide();
        App.navigate("captcha");
    });
    $(".next-btn").click(function () {
        $("#captcha .container").hide();
        App.navigate("resetpw");
    });
})();
