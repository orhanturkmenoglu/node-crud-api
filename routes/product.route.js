/* 
    Product ile ilgili tüm route işlemleri bu dosyada yapılacak.
    Amaç controller dosyasındaki fonksiyonları burada route'lara bağlamak.

    daha basit tanım : controllerden gelen fonksiyonları belirli URL yollarına atamak.

*/
const express = require("express");

const {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller");

const router = express.Router();


// Tüm ürünleri getiren route
router.get("/", getProducts);


// Belirli bir ürünü ID'ye göre getiren route
router.get("/:id", getProductById);


// Belirli bir ürünü ID'ye göre güncelleyen route
router.put("/:id", updateProduct);


// Belirli bir ürünü ID'ye göre silen route
router.delete("/:id", deleteProduct);


module.exports = router;
