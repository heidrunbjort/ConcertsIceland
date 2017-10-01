const app = require('express')();
const xRay = require('x-ray');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const x = xRay({
  filters: {
    trim: function (value) {
      return typeof value === 'string' ? value.trim() : value
    },
    reverse: function (value) {
      return typeof value === 'string' ? value.split('').reverse().join('') : value
    },
    slice: function (value, start , end) {
      return typeof value === 'string' ? value.slice(start, end) : value
    }
  }
});

app.get('/midi', (req, res)=> {
  res.header("Content-Type", "application/json; charset=utf-8");
  // http://apis.is/concerts

 /* const stream = x('http://www.mbl.is/frettir/', '.teaser', [{
    titill: 'h1 a',
    link: 'h1 a@href',
    mynd: 'img@src',
    shortText: '.texti | trim',
    fullText: x('h1 a@href', '.main-layout | trim')
  }]).stream();
  stream.pipe(res);*/
})

app.get('/tix', (req, res)=> {
  res.header("Content-Type", "application/json; charset=utf-8");
  const stream = x('https://www.tix.is/is/search/c/2/', '.events li', [{
    titill: '.info h1',
    location: '.info h2',
    date: '.info h3',
    linkInfo: '.more a@href', 
    linkBuy: '.more a:nth-child(2)@href',
    image: 'div.image@src'
  }]).stream();
  stream.pipe(res);
})

var serverPort = 3001
console.log('server started on port ' + serverPort)
app.listen(serverPort);