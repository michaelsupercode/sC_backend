const http = require("http");
const { readFile } = require("./filesystem.js");

const server = http.createServer((request, response) => {
  console.log("new request:", request.method, request.url);

  if (
    request.method === "GET" &&
    (request.url === "/" || request.url === "/home")
  ) {
    readFile("./public/pages/home.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error!");
      });
  } else if (request.method === "GET" && request.url === "/about") {
    readFile("./public/pages/about.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error!");
      });
  } else if (request.method === "GET" && request.url === "/doneNstyled") {
    readFile("./public/css/styles.css")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error!");
      });
  } else if (request.method === "GET" && request.url === "/images/tumblr_85e85a6beea78872013f1a248c6641fb_95852a96_1280.jpg") {
    readFile("./public//images/tumblr_85e85a6beea78872013f1a248c6641fb_95852a96_1280.jpg")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error!");
      });
  } else {
    readFile("./public/pages/error.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error!");
      });
  }
});

const PORT = 9013;
server.listen(PORT, () => console.log("..serving testFiles at..", PORT));
