var fs = require('fs');
var dir = 'sample.txt';
var data = 'hello world';
var buf = Buffer.from(data,'utf8');
var offset=0;
fs.open(dir,'w',function(err,fd){
    if(err){
        console.log(err.message)
    }else{
    fs.write(fd,buf,offset,buf.byteLength,0,function(err,bytes){
        if(err){
            console.log(err.message)
        }else{
            console.log(bytes + 'written')
        }
    })
}
})