var fs = require('fs');
var readstream = fs.createReadStream('welcome.txt');
readstream.on('data',(data)=>{
    console.log(data.toString())
})