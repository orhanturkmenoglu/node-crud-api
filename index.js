// express: api oluşturmak için kullanılan popüler bir Node.js framework'üdür.

const express = require("express");
const app = express();

// app.get metodu, belirli bir rota için GET isteklerini işler.
// req : istemciden gelen isteği temsil eder.
// res : sunucunun istemciye göndereceği yanıtı temsil eder.
app.get("/",(req,res)=>{
    res.send("Hello World");
})


// listen metodu, belirli bir port üzerinde gelen istekleri dinlemeye başlar.
app.listen(5173,()=>{
    console.log("Server is running on port 5173");
})


