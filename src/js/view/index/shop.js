
;(function(){
  App.defineViewModel("#indexShop",{
       data:{},
       watch:{},
       methods:{}
     },{
     beforeRender:function () {
     	$("#main").removeClass("indexMain");
     	$("#main").addClass("indexShop");
     }
  });
})();
