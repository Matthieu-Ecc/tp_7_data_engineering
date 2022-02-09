const express = require("express");
const session = require('express-session');
const PORT = 3003;
const HOST = '0.0.0.0';
const app = express();


app.use(
    session({
        secret: 'secret string',
        resave: false,
        saveUninitialized:false,
        cookie:{/* can add cookie related info here*/}
    })
);

app.get('/api/', function(req, res){
    if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
        req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
    req.session.pageCountByCurrentUserOrAnyNameYouWant++;
    res.send({
        pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
    });
});

app.listen(PORT, () => {
    app.listen(PORT, HOST);
    if(HOST.match('0.0.0.0')){
    console.log(`Running on http://localhost:${PORT}`);}
});