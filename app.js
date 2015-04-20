var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000 + Math.floor(Math.random() * 100);

app.use(function (req, res, next) {
    res.set('X-Powered-By', 'mnet-io');
    next();
});

app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || port, function () {
    console.log('Listening for connections on :%s', port);
});
