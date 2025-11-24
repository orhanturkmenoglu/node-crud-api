// express: api oluşturmak için kullanılan popüler bir Node.js framework'üdür.

const express = require("express");

// mongoose: MongoDB ile etkileşimde bulunmak için kullanılan bir Node.js kütüphanesidir.
const mongoose = require("mongoose");

// Product modelini içe aktarır. Bu model, ürün verilerini MongoDB veritabanında saklamak için kullanılır.
const Product = require("./models/product.model");

const app = express();

// middleware: uygulama genelinde kullanılacak işlevlerdir. ara katman olarak da adlandırılır.
// app.use metodu, uygulamaya ara katman (middleware) eklemek için kullanılır.
// express.json() middleware'i, gelen isteklerin gövdesini JSON formatında ayrıştırmak için kullanılır.
app.use(express.json());


// app.get metodu, belirli bir rota için GET isteklerini işler.
// req : istemciden gelen isteği temsil eder.
// res : sunucunun istemciye göndereceği yanıtı temsil eder.
app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.post("/api/products",async(req,res)=>{
    console.log(req.body);

    try {
         const product = await Product.create(req.body);
         res.status(201).json(product);

    }catch (error) {
        res.status(500).json({message: error.message});
    }

})


// mongoose.connect metodu, MongoDB veritabanına bağlanmak için kullanılır.
// Bağlantı başarılı olursa then bloğu çalışır, başarısız olursa catch bloğu çalışır.
// Bağlantı dizesi, MongoDB sunucusunun adresini ve kimlik doğrulama bilgilerini içerir.
// Burada "orhantrkmn749_db_user" kullanıcı adı ve "bAEBArjOH5pHuigH" şifresi kullanılmıştır.
// then bloğunda, veritabanına bağlandıktan sonra sunucunun 5173 portunda dinlemeye başlaması sağlanır.
mongoose.connect("mongodb+srv://orhantrkmn749_db_user:bAEBArjOH5pHuigH@backend.mm1wtp7.mongodb.net/?appName=Backend")
.then(()=>{
     app.listen(5173,()=>{
        console.log("Database connected and Server is running on port 5173");
    });
})
.catch((error)=>{
    console.log("Database connection failed:", error);
});



// listen metodu, belirli bir port üzerinde gelen istekleri dinlemeye başlar.
/* app.listen(5173,()=>{
    console.log("Server is running on port 5173");
})
 */

