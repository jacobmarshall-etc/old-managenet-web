var express = require('express'),
    app = express();

app.use(function (req, res, next) {
    res.set('X-Powered-By', 'mnet-io');
    next();
});

app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT, function () {
    console.log('Listening for connections on :%s', process.env.PORT);
});
