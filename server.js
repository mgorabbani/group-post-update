const express = require('express');
const hbs = require('hbs');
const FB = require('fb');
const port = process.env.PORT || 3000;

FB.setAccessToken('274539779641078|_8F-vZcJXFQSsrhEZTMWGtDr9r0');

var body = 'My first post using facebook-node-sdk';
FB.api(
  '/586400221495560/feed',
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
