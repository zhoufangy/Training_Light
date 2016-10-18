
;(function(){
  App.defineViewModel("#login",{
       data:{},
       watch:{},
       methods:{}
     },{
     beforeRender:function () {
     	$("#main").removeClass("indexShop");
     	$("#main").removeClass("indexMain");
     }
  });
})();
