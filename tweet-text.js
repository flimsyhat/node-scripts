const request = require('request');
const cheerio = require('cheerio');

const tweetlink = process.argv[2]

request(tweetlink, function(err, resp, html) {
        if (!err){
          $ = cheerio.load(html);
          let posts = $('.dir-ltr').text();
          console.log(posts); 
      }
});
