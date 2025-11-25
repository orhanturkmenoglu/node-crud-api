# Node CRUD API (Detaylı)

Basit ve öğretici bir **Node.js + Express + MongoDB (Mongoose)** CRUD API örneğidir. Ürün yönetimi (Products) amacıyla yapılandırılmıştır. Bu README, proje yapısı, çalışma talimatları, endpoint ayrıntıları ve geliştirme notlarını içerir.

Öne çıkan dosyalar
- API giriş noktası: `index.js`
- Router: `routes/product.route.js`
- Controller: `controllers/product.controller.js`
  - createProduct, getProducts, getProductById, updateProduct, deleteProduct
- Model: `models/product.model.js` (`Product` schema: name, quantity, price, image)
- Çevresel değişkenler: `.env`
- Paket tanımı: `package.json`

Kurulum
1. Depoyu klonlayın:
```sh
git clone <repo-url>
cd "d:\FRONTEND 2025\node-crud-api"
npm install
```
2. `.env` dosyasını oluşturun (örnek):
```
MONGODB_URL=mongodb://kullanici:parola@host:port/dbname
PORT=5173
```

Çalıştırma
- Geliştirme (nodemon): `npm run dev`
- Üretim: `npm start`
- Test (varsa): `npm test`

API Endpoints (Detaylı)
- GET /api/products
  - Açıklama: Tüm ürünleri getirir.
  - Başarılı yanıt (200):
  ```json
  [
    { "_id":"...", "name":"Ürün A", "quantity":10, "price":99.9, "image":"" },
    ...
  ]
  ```
- GET /api/products/:id
  - Açıklama: ID ile tek ürün getirir.
  - Hatalar: 404 (bulunamadı), 500 (sunucu hatası)
  - Örnek başarılı yanıt (200):
  ```json
  { "_id":"...", "name":"Ürün A", "quantity":10, "price":99.9, "image":"" }
  ```
- POST /api/products
  - Açıklama: Yeni ürün oluşturur.
  - Body (JSON): `{ "name": "Test Ürün", "quantity": 10, "price": 99.9, "image": "" }`
  - Başarılı yanıt: 201 — oluşturulan ürün objesi
  - Örnek curl:
  ```sh
  curl -X POST http://localhost:5173/api/products \
    -H "Content-Type: application/json" \
    -d '{"name":"Test Ürün","quantity":10,"price":99.9,"image":""}'
  ```
- PUT /api/products/:id
  - Açıklama: Varolan ürünü günceller (tüm veya kısmi alanlar).
  - Başarılı yanıt: 200 — güncellenmiş ürün
  - Hatalar: 404 (bulunamadı), 500
- DELETE /api/products/:id
  - Açıklama: Ürünü siler.
  - Başarılı yanıt: 200 — silme mesajı
  - Hatalar: 404, 500

Mevcut controller davranışı (kısa notlar)
- `controllers/product.controller.js` içinde CRUD işlemleri doğrudan Mongoose metotları (`create`, `find`, `findById`, `findByIdAndUpdate`, `findByIdAndDelete`) ile yapılır.
- Hata durumlarında genel olarak 500 döndürülür; bulunamayan kaynaklar için 404 döndürülür.
- update işlemi `findByIdAndUpdate(id, req.body)` kullanıp ardından `findById` ile güncel belgeyi getirir.

Önerilen geliştirmeler / dikkat edilmesi gerekenler
- İstemci tarafı verisi için doğrulama ekleyin (ör. Joi veya express-validator).
- update için `new: true` ve `runValidators: true` kullanarak tek çağrıda güncelleme ve validasyon uygulanabilir:
  - Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
- Hata yönetimini merkezilaştırmak için Express hata middleware'i oluşturun.
- İstek loglama için morgan veya benzeri bir middleware ekleyin.
- Kimlik doğrulama / yetkilendirme gerekiyorsa JWT veya OAuth entegre edin.
- Testler: controller fonksiyonları ve route'lar için birim/integrasyon testleri ekleyin (Jest + Supertest).

Yerel geliştirme ipuçları
- MongoDB bağlantı hatası alıyorsanız `.env` içindeki `MONGODB_URL` değerini doğrulayın.
- Port çakışmasında `.env` içindeki `PORT` değerini değiştirin.
- Kod değişikliklerinde otomatik yeniden başlatma için `nodemon` kullanın (npm run dev).

Katkıda bulunma
- Yeni özellikler veya düzeltmeler için pull request açın.
- Kodlama standartları: ESLint/Prettier eklenmesi tavsiye edilir.

Lisans
- Proje `package.json` içindeki lisans alanına göre lisanslanmıştır (ör. ISC).

İletişim / Daha fazla bilgi
- Kod yapısı ya da belirli bir dosya hakkında daha detaylı açıklama isterseniz, hangi dosyayı incelememi istediğinizi belirtin (ör. `controllers/product.controller.js`).
