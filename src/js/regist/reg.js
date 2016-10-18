
App.registerView({
    path:"/reg",
    el:"#reg",
    home:true
});

App.registerView({
    path:"/captcha",
    el:"#captcha",
    home:false,
    async:"true"
});

App.registerView({
    path:"/reginfo",
    el:"#reginfo",
    home:false
});

App.registerView({
    path:"/reg/success",
    el:"#regSuccess",
    home:false
});
