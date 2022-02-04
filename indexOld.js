const http = require('http');

const notes=[
    {id:1,title:'Express'},
    {id:2,title:'Mongo'},
    {id:3,title:'Docker'}
]
const app=http.createServer((request, response)=>{
 response.writeHead(200,{'Content-type':'application/json'})
 response.write(JSON.stringify(notes));
 response.end()
});
const PORT=8080;
app.listen(PORT,()=>{
    console.log("server is running on localhost:8080");
});
