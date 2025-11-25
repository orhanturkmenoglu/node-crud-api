# Node CRUD API

Basit bir **Node.js + Express + MongoDB (Mongoose)** CRUD API örneği.  
Ürün yönetimi (Products) üzerine kuruludur.

---

## Özellikler

- CRUD endpointleri:
  - `GET /api/products` → Tüm ürünler
  - `GET /api/products/:id` → Tek ürün
  - `POST /api/products` → Yeni ürün ekle
  - `PUT /api/products/:id` → Ürünü güncelle
  - `DELETE /api/products/:id` → Ürünü sil

- MVC yapısı: `models`, `controllers`, `routes`

---

## Kurulum

```bash
git clone https://github.com/orhanturkmenoglu/node-crud-api.git
cd node-crud-api
npm install
