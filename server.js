
const http = require('http');
const path = require('path');
const fs = require('fs');
const colors = require('colors');
const dotenv = require('dotenv');


// envairenment variabl
dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;


// create a ,server
http.createServer((res, req) => {
   
 
    // routing
    if (req.url === '/'){

        const homepage = fs.readFileSync('public/index.html'); 


        res.writeHead(200, {"Content-Type" : "text/html" });
        res.write(homepage);
        res.end();
        
    }else if (req.url === '/about'){

        const aboutpage = fs.readFileSync(path.join(__dirname,'public/about.html'));


        res.writeHead(200, {"Content-Type" : "text/html" });
        res.write(aboutpage);
        res.end();
         
    }

}).listen(PORT, () => {

    console.log(`server runing on port ${PORT}`.bgYellow.black);
}); 
 
 