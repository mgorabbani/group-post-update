const express = require('express');
const hbs = require('hbs');
const FB = require('fb');
const port = process.env.PORT || 3000;

FB.setAccessToken('EAACEdEose0cBAJLrllMzoteam5xJr38JpDsz4czjoWO0Hj8swbpwLq45Vg5SAUrLE4p4O08y8rQv7ejW9snZCxpZAFHTyWrxFZBFBsj8O1LncE5W3xfXbZAA9VvtrDCVLEpUG3X7qIQ1aJdg18gL6iQfh8lRlBnjAjoHjZA4gW3qrIJBQGZAeN');


var app = express()

app.get('/', (req,res)=>{

  FB.api(
    '/367870976752456/feed',
    'GET',
    {"fields":"message,updated_time,link"},
    function(response) {
      s = response.data
      console.log(s);
      res.render(__dirname+'/public/root.hbs',{
        title:'Alpha Softwarian\'s Latest Post',
        post: s
      })
    }
  );



})




app.listen(port)
