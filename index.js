const request = require("request");

request(
  `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`,
  (err, res, body) => {
    let bodyJson = JSON.parse(body);
    let randomQuote = bodyJson[0]["content"];
    let quote = randomQuote.rendered;
    document.getElementById("quote").innerHTML = quote;
  }
);

setInterval(() => {
  request(
    `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`,
    (err, res, body) => {
      let bodyJson = JSON.parse(body);
      let randomQuote = bodyJson[0]["content"];
      let quote = randomQuote.rendered;
      document.getElementById("quote").innerHTML = quote;
    }
  );
}, 3000);
