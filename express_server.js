var express = require('express'),
    app = express(),
    port = 3000,
    router = express.Router();

app.use(router);
app.use('/public', express.static('public'));

app.use('/abis/AngelToken.json', express.static('abis/AngelToken.json'));
app.use('/public/index.html', express.static('public/index.html'));
app.use('/public/StoreFront/store_front.html', express.static('public/StoreFront/store_front.html'));
app.use('/public/StoreFront/ShoppingCart.html', express.static('public/StoreFront/ShoppingCart.html'));
app.use('/public/AngelsRoom/angels_room.html', express.static('public/StoreFront/angels_room.html'));

router.all('/', function (req, res, next) {
  var file = 'public/index.html';
  res.sendFile(file, '/#!/', function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', file);
            next();
        }
    });
});


app.post('/token_manifest_event', function (req, res) {
  console.log(req);
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Angel Tokens appearing in Heaven on port ${port}!`)

});

module.exports = app;
