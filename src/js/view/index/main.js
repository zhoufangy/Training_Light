
;(function(){
  App.defineViewModel("#indexMain",{
       data:{},
       watch:{},
       methods:{}
     },{
     beforeRender:function () {
     	$("#main").removeClass("indexShop");
     	$("#main").addClass("indexMain");
     }
  });
})();
