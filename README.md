# Node CRUD API

Bu proje, **Node.js**, **Express** ve **MongoDB (Mongoose)** kullanılarak geliştirilmiş bir CRUD API örneğidir.  
Ürün yönetimi (Products) üzerine kuruludur ve temel CRUD operasyonlarını destekler: oluşturma, okuma, güncelleme ve silme.

---

## 🚀 Özellikler

- Node.js ve Express tabanlı REST API
- MongoDB ile veri yönetimi
- MVC mimarisi (`models`, `controllers`, `routes`)
- CRUD endpointleri:
  - `GET /api/products` → Tüm ürünleri getirir
  - `GET /api/products/:id` → Belirli bir ürünü getirir
  - `POST /api/products` → Yeni ürün oluşturur
  - `PUT /api/products/:id` → Ürünü günceller
  - `DELETE /api/products/:id` → Ürünü siler

---

## 📂 Proje Yapısı
node-crud-api/
│
├─ controllers/
│ └─ product.controller.js # Controller fonksiyonları
├─ models/
│ └─ product.model.js # Mongoose Product modeli
├─ routes/
│ └─ product.route.js # Product route'ları
├─ index.js # Sunucu giriş noktası
├─ package.json
└─ README.md


---

## ⚙️ Kurulum

1. Repository’yi klonlayın:

```bash
git clone https://github.com/orhanturkmenoglu/node-crud-api.git
cd node-crud-api

---

## Bağımlılıkları yükleyin:

```bash
npm install

---

## Geliştirme sırasında nodemon ile sunucuyu çalıştırmak için:

```bash
npm run dev

Not: package.json içinde "dev": "nodemon index.js" script’i olmalıdır.

---

## Normal şekilde Node.js ile çalıştırmak için:

```bash
npm start


