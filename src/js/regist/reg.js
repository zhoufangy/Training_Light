
App.registerView({
    path:"/reg",
    el:"#reg",
    home:true
});

App.registerView({
    path:"/captcha",
    el:"#captcha",
    home:false,
    parent:"#reg",
    async:"true"
});

App.registerView({
    path:"/reginfo",
    el:"#reginfo",
    home:false,
    parent:"#reg"
});

App.registerView({
    path:"/reg/success",
    el:"#regSuccess",
    home:false,
    parent:"#reg"
});
