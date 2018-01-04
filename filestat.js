const fs = require('fs');
const dir = '../filesystem';
let info = fs.stat(dir,function(err,stats){
  console.log(stats)  
})
let info1 = fs.statSync(dir)
  console.log(info1)  

 console.log(info1.isDirectory())
 console.log(info1.isFile())


