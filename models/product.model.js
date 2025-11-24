/* 
import mongoose from './../node_modules/mongoose/types/index.d';
    Product Modelimiz burada tanımlanıyor.
    mongoose kütüphanesi kullanılarak bir şema (schema) oluşturuluyor.
    Şema, ürünlerin sahip olması gereken alanları ve bu alanların veri tiplerini belirtiyor.
    name: String türünde bir alan, ürünün adını temsil eder.
    price: Number türünde bir alan, ürünün fiyatını temsil eder.
    inStock: Boolean türünde bir alan, ürünün stokta olup olmadığını belirtir.
    Daha sonra bu şema kullanılarak bir Mongoose modeli (Product) oluşturuluyor ve dışa aktarılıyor.
    Model, MongoDB veritabanında "products" koleksiyonunu temsil eder.
    Model, uygulamanın diğer bölümlerinde ürün verileriyle etkileşimde bulunmak için kullanılabilir.

    { timestamps: true } ifadesi, her ürün belgesi oluşturulduğunda veya güncellendiğinde otomatik olarak "createdAt" ve "updatedAt" alanlarının eklenmesini sağlar.
    
    kısa amaç : Bu dosya, ürün verilerini MongoDB veritabanında saklamak için kullanılan bir Mongoose modelini tanımlar.
*/

const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      required: [true, "Please enter product quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);


// mongoose.model metodu, belirtilen şema kullanılarak bir Mongoose modeli oluşturur.
// "Product" modeli, "products" koleksiyonunu temsil eder.
const Product = mongoose.model("Product", ProductSchema);

module.exports=Product;