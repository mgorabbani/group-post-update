const express = require('express');
const hbs = require('hbs');
const FB = require('fb');
const port = process.env.PORT || 3000;

FB.setAccessToken('EAACEdEose0cBALCy3bZBdLEL9DFyRP1GNvQv6f89mp7EKlZAQp7NGKuTl4QZAVZAAV0P7Pr5W6102H3JoLN9znaSwZCpU8p0bFAbFWZAlQSEZAWmS37yC9HGdXYIbbXMemPVJZBHxPpOko0Os1CFQY3iRuxL2pwIscZCjsZBKLF2hmSbZCo0U7RrQuCeg2VhrzQnMkZD');

var body = 'My first post using facebook-node-sdk';
FB.api(
  '/367870976752456/feed',
  'GET',
  {"fields":"message,updated_time"},
  function(response) {

    s = response.data

    app.get('/', (req,res)=>{
      res.render(__dirname+'/public/root.hbs',{
        title:'ClassRoom',
        post: s
      })
    })



  }
);
var app = express()

app.listen(port)
