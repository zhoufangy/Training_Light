
App.registerView({
    path:"/reset",
    el:"#reset",
    home:true
});

App.registerView({
    path:"/captcha",
    el:"#captcha",
    home:false,
    async:"true"
});

App.registerView({
    path:"/resetpw",
    el:"#resetpw",
    home:false
});

App.registerView({
    path:"/reset/success",
    el:"#resetSuccess",
    home:false
});
