
App.registerView({
    path:"/reset",
    el:"#reset",
    home:true
});

App.registerView({
    path:"/captcha",
    el:"#captcha",
    home:false,
    parent:"#reset",
    async:"true"
});

App.registerView({
    path:"/resetpw",
    el:"#resetpw",
    home:false,
    parent:"#reset"
});

App.registerView({
    path:"/reset/success",
    el:"#resetSuccess",
    home:false,
    parent:"#reset"
});
