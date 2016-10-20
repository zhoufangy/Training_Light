
;(function(){
  App.defineViewModel("#login",{
       data:{},
       watch:{},
       methods:{}
     },{
     beforeRender:function () {
     }
  });
    $(".reg-btn").tap(function () {
        App.navigate("reg");
    })
})();
