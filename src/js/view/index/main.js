
;(function(){
  App.defineViewModel("#indexMain",{
       data:{},
       watch:{},
       methods:{}
     },{
     beforeRender:function () {
         $.backstretch("../../../../images/bg.png");
     },
      beforeUnRender:function () {
          $.backstretch("../../../../images/bg1.jpg");
      }
  });
})();
