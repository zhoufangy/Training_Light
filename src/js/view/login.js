
;(function(){
  App.defineViewModel("#login",{
       data:{},
       watch:{},
       methods:{}
     },{
     beforeRender:function () {
     }
  });
    $(".reg-btn").click(function () {
        App.navigate("reg");
    })
})();
