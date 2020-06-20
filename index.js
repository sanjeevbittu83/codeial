const express= require('express');
const app=express();
const port=8001;

app.use('/',require('./routes'));

app.listen(port,function(err){
if(err){
    console.log('error in running server:${err}');
}
console.log('server is runnig on port:${port}');
});