const express = require("express");
const PORT = 3003;
const HOST = '0.0.0.0';
const app = express();

app.listen(PORT, () => {
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
});

const session = require('express-session');

app.get('/', function(req, res){
    if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
        req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
    req.session.pageCountByCurrentUserOrAnyNameYouWant++;
    res.send({
        pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
    });
});
    