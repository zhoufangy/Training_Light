
App.registerView({
    path:"/index",
    el:"#index",
    home:false
});

App.registerView({
    path:"/index/main",
    el:"#indexMain",
    home:true,
    parent:"#index"
});

App.registerView({
    path:"/index/shop",
    el:"#indexShop",
    home:false,
    parent:"#index"
});

App.registerView({
    path:"/index/user",
    el:"#indexUser",
    home:false,
    parent:"#index"
});

App.registerView({
    path:"/login",
    el:"#login",
    home:false
});

App.registerView({
    path:"/login/success",
    el:"#loginSuccess",
    home:false
});
