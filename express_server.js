const express = require('express'),
      app = express(),
      port = 3000,
      router = express.Router(),
      ipfsClient = require('ipfs-http-client'),
      bodyParser = require('body-parser'),
      fileUpload = require('express-fileupload'),
      ipfs = new ipfsClient({host: 'localhost', port:'5001', protocol: 'http'});

app.use(router);
app.use('/public', express.static('public'));

app.use('/abis/AngelToken.json', express.static('abis/AngelToken.json'));
app.use('/abis/AT_X.json', express.static('abis/AT_X.json'));

app.use('/public/index.html', express.static('public/index.html'));
app.use('/public/StoreFront/store_front.html', express.static('public/StoreFront/store_front.html'));
app.use('/public/StoreFront/ShoppingCart.html', express.static('public/StoreFront/ShoppingCart.html'));
app.use('/public/AngelsRoom/angels_room.html', express.static('public/AngelsRoom/angels_room.html'));
app.use('/public/AngelsRoom/this_round.html.html', express.static('public/AngelsRoom/this_round.html'));
app.use('/public/BehindTheCounter/whats_it_about.html', express.static('public/BehindTheCounter/whats_it_about.html'));

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

app.post('/token_manifest_event', async function (req, res) {

  const file = req.files.file;
  const fileName = req.body.fileName;
  const filePath = 'files/' + fileName;
  file.mv(filePath, async (err) => {
      if (err) {
        console.log("Error: failed to save token json!");
        return res.status(500).send(err);
      }
      const fileHash = await addFile(fileName, filePath);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
        }
      });

      res.render('upload', { fileName, fileHash });
  });
});

const addFile = async (fileName, filePath)=> {
  const file = fs.readFileSync(filePath);
  const fileAdded = await ipfs.add({path: fileName, content: file});
  const fileHash = fileAdded[0].hash;

  return fileHash;
};

app.listen(port, () => {
  console.log(`Angel Tokens appearing in Heaven on port ${port}!`)

});

module.exports = app;
