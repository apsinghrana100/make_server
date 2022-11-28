
const http=require('http');

http.createServer((request,resp)=>{
    resp.writeHead(200,{'content-type':'application\json'});
    resp.write("Ajay pratap");
    resp.end();
}).listen(4000);