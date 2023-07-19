console.log("Hello World");

// let's Create a Server in Node Js. To do so see the code below

const http = require('http');
const fs = require('fs');            // Importing File System Module.

function rqListner(req,res) {
    // console.log(req,'Aashish')
    // console.log(req.url,req.method,req.headers)
    const url = req.url;
    const method = req.method;
    console.log(url);
    res.setHeader('Content-Type','text/html');
    if (url==="/home") {
        res.write('<html>');
        res.write('<head><title>My Frist Page</title></head>');
        res.write('<body><h1>Welcome home Response My Node.js Server!</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (url==="/about") {
        res.write('<html>');
        res.write('<head><title>My Frist Page</title></head>');
        res.write('<body><h1>Welcome to About Us page Response My Node.js Server!</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (url==="/node") {
        res.write('<html>');
        res.write('<head><title>My Frist Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project Response My Node.js Server!</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else  {
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(data);
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<h1>${data}</h1>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
          });
    }
    if (url==="/message" && method==="POST") {
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message);
        })
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
   
    // res.write('<html>');
    // res.write('<head><title>My Frist Page</title></head>');
    // res.write('<body><h1>Hello From My Node.js Server!</h1></body>');
    // res.write('</html>');
    // return res.end();
}

const server = http.createServer(rqListner);  

server.listen(5000)

// we can do this alos like this


// http.createServer(function (req,res){        
    // node will exectute this function for each sent request to our server.
    // this is a event driven architecture
    
// }); 

//OR

// http.createServer((req,res)=>{
        //it is also same as above.
//});
