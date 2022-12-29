const express = require("express");
 
const https = require("https");
const app = express();

app.get("/",function(req,res){
 
    const url = "https://api.openweathermap.org/data/2.5/weather?q=visakhapatnam&appid=8f3ae138ee27979732f0e51f79d99af2&units=metric";
 https.get(url,function(response,request){
    console.log(response.statusCode);

    response.on("data",function(data){
         const weatherdata=JSON.parse(data)
         console.log(weatherdata);
         const temp = weatherdata.main.temp;
         console.log(temp);
         const desp =  weatherdata.weather[0].description;
         console.log(desp);
         const icon =weatherdata.weather[0].icon;
         const imageurl =  "http://openweathermap.org/img/wn/"+icon+"@2x.png";
         res.write("<h1>The temperature in vizag is :"+temp+"degree</h1>");
         res.write("<h2>the weather is currently in "+desp+" condition</h2>");
         res.write("<img src=" + imageurl + ">");
     
         res.send()
    })
 })
});




app.listen(3000,function(req,res){
    console.log("server is runing in port 3000");

});