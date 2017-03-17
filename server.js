const express = require('express');
const hbs = require('hbs');
const FB = require('fb');
const port = process.env.PORT || 3000;

FB.setAccessToken('EAAD5sUYKzvYBAGlIHYQfTPXbeqmM3Ym3XBmuuFpxlEZBnaC8UKmcmryruAPs6VDiygwZCWEefO2tBHBronrcHJrXOu1oWblNOyqnO4eYB5UvcsT72dvFm0d6NB9WR2yc9VYyhAhaZCLU8T4iFD1fSRDDQlfZBI8ZD');


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

// https://graph.facebook.com/oauth/access_token?client_id=274539779641078&client_secret=5efa7829c00b823e4085ffe2b5cf562b&grant_type=fb_exchange_token&fb_exchange_token=EAAD5sUYKzvYBAOpgNQQuHPMl5JspMM59wdraskpjb9k59SnOklkf4lpJItdQRjBgoIbFggKFyNysGK1QBIpqsnPD6QsXUJO0ZBvEqO8dPfphReXYx3OPx2POGQSC80KD8yBkaJWd0aqITrWrMrWbAlrZBGZA1DPnXC5qkV0VzZCZCttZAHiMhWIweFoqczkZAkZD


app.listen(port)
