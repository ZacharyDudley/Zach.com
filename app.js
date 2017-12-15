const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  // res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT, function(){
  console.log('Listening');
});
