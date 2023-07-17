console.log("Hello World");

// let's Create a Server in Node Js. To do so see the code below

const http = require('http');

function rqListner(req,res) {
    console.log(req,'Aashish')
}

const server = http.createServer(rqListner);  

server.listen(5git000)

// we can do this alos like this


// http.createServer(function (req,res){        
    // node will exectute this function for each sent request to our server.
    // this is a event driven architecture
    
// }); 

//OR

// http.createServer((req,res)=>{
        //it is also same as above.
//});
