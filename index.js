// express: api oluşturmak için kullanılan popüler bir Node.js framework'üdür.

const express = require("express");

// mongoose: MongoDB ile etkileşimde bulunmak için kullanılan bir Node.js kütüphanesidir.
const mongoose = require("mongoose");

// Product modelini içe aktarır. Bu model, ürün verilerini MongoDB veritabanında saklamak için kullanılır.
const Product = require("./models/product.model");

// product route dosyasını içe aktarır.
const productRoute = require("./routes/product.route");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middleware: uygulama genelinde kullanılacak işlevlerdir. ara katman olarak da adlandırılır.
// app.use metodu, uygulamaya ara katman (middleware) eklemek için kullanılır.
// express.json() middleware'i, gelen isteklerin gövdesini JSON formatında ayrıştırmak için kullanılır.
app.use(express.json());

// express.urlencoded() middleware'i, URL kodlu verileri ayrıştırmak için kullanılır. request olarak da form verilerini işler,
//  yanıt olarak form verilerini işler.
app.use(express.urlencoded({ extended: true }));

// product route dosyasını içe aktarır. Bu, ürünlerle ilgili tüm route işlemlerini içerir.
// "/api/products" yolu ile productRoute dosyasındaki route'ları ilişkilendirir.
app.use("/api/products", productRoute);

// app.get metodu, belirli bir rota için GET isteklerini işler.
// req : istemciden gelen isteği temsil eder.
// res : sunucunun istemciye göndereceği yanıtı temsil eder.

app.get("/", (req, res) => {
  res.send("Hello World");
});

// ************************* routes dosyasına taşındı PRODUCT ENDPOINTLER *************************

/* // Tüm ürünleri getiren API endpoint'i
// async/await yapısı, asenkron işlemleri daha okunabilir hale getirmek için kullanılır.
// try/catch bloğu, hata yönetimi için kullanılır.
// Burada Product.find({}) metodu, MongoDB veritabanındaki tüm ürünleri getirir.
// find metodu, belirtilen kriterlere uyan belgeleri bulmak için kullanılır. Boş bir nesne ({}) tüm belgeleri getirir.
app.get("/api/products", async (req, res) => {
  console.log("Get all products");
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Belirli bir ürünü ID'ye göre getiren API endpoint'i
app.get("/api/products/:id", async (req, res) => {
  console.log("Get single product");

  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Belirli bir ürünü ID'ye göre güncelleyen API endpoint'i
app.put("/api/products/:id", async (req, res) => {
  console.log("Update product");

  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Belirli bir ürünü ID'ye göre silen API endpoint'i
app.delete("/api/products/:id", async (req, res) => {
  console.log("Delete product");

  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Yeni bir ürün ekleyen API endpoint'i
app.post("/api/products", async (req, res) => {
  console.log(req.body);

  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// ************************* routes dosyasına taşındı PRODUCT ENDPOINTLER *************************



 */
// mongoose.connect metodu, MongoDB veritabanına bağlanmak için kullanılır.
// Bağlantı başarılı olursa then bloğu çalışır, başarısız olursa catch bloğu çalışır.
// Bağlantı dizesi, MongoDB sunucusunun adresini ve kimlik doğrulama bilgilerini içerir.
// then bloğunda, veritabanına bağlandıktan sonra sunucunun 5173 portunda dinlemeye başlaması sağlanır.
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected successfully");

    app.listen(process.env.PORT || 5173, () => {
      console.log(`Server is running on port ${process.env.PORT || 5173}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });

// listen metodu, belirli bir port üzerinde gelen istekleri dinlemeye başlar.
/* app.listen(5173,()=>{
    console.log("Server is running on port 5173");
})
 */
