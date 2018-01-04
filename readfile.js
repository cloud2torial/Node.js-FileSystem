var fs = require('fs');
var dir = 'welcome.txt';
fs.readFile('welcome.txt',{encoding:'utf8'},(err,data)=>{
if(err){
    console.log(err.message)
}
else{
    console.log(data)
}
});