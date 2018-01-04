var fs = require('fs');
var data = 'Welcome to Cloud2torial';
var stream = fs.createWriteStream('welcome.txt');
stream.write(data,function(err){
    if(err){
        console.log(err.message)
    }
    else{
        console.log('file written')
    }
})
