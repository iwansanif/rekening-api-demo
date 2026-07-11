# Rekening API Demo v1.0.0

Demo REST API untuk validasi rekening bank.

Aplikasi ini mensimulasikan proses pengecekan nomor rekening dengan input:

- Kode bank
- Nomor rekening

Output yang diberikan:

- Status validasi rekening
- Nama bank
- Nama pemilik rekening (demo)
- Informasi rekening ditemukan atau tidak

Project ini dibuat sebagai prototype/demo integrasi API validasi rekening.

---

# Fitur

## API

- REST API menggunakan Express.js
- API Key Authentication
- Request Validation
- Rate Limiting
- Access Logging
- Error Handling
- Swagger API Documentation


## Web Demo

- Form pengecekan rekening
- Tampilan hasil validasi
- Terintegrasi langsung dengan backend API


---

# Teknologi

Backend:

- Node.js
- Express.js

Security:

- Helmet
- CORS
- API Key Middleware

Documentation:

- Swagger UI


Frontend:

- HTML
- JavaScript


---

# Struktur Project
📌 Rekening API Demo

REST API sederhana untuk validasi rekening bank Indonesia menggunakan Node.js (Express).

🚀 Fitur
Validasi API Key
Validasi input (Joi)
Service Layer (mock provider)
Logging request & error
Swagger Documentation
Postman Collection
Struktur proyek modular (production-ready pattern)
🏗️ Tech Stack
Node.js
Express.js
Joi
Swagger (swagger-ui-express)
Morgan
UUID
Helmet
CORS
Express Rate Limit
📁 Struktur Project
src/
 ├── config/
 ├── controllers/
 ├── middlewares/
 ├── models/
 ├── routes/
 ├── services/
 ├── utils/
 ├── validators/
 └── app.js / server.js
⚙️ Instalasi
git clone <repo-url>
cd rekening-api-demo
npm install
▶️ Menjalankan Server
Development
npm run dev
Production
npm start

Server berjalan di:

http://127.0.0.1:3000
🔐 API Key

Gunakan header:

x-api-key: demo123
📡 Endpoint API
🔹 Health Check
GET /health

Response:

{
  "success": true,
  "message": "API is running"
}
🔹 Check Bank Account
POST /api/check-account

Headers:

Content-Type: application/json
x-api-key: demo123

Request Body:

{
  "bank_code": "bca",
  "account_number": "1234567890"
}

Response (found):

{
  "success": true,
  "message": "Account found",
  "data": {
    "bank_code": "bca",
    "account_number": "1234567890",
    "bank_name": "Bank Central Asia",
    "account_name": "BUDI SANTOSO",
    "valid": true
  }
}

Response (not found):

{
  "success": true,
  "message": "Account not found",
  "data": {
    "valid": false
  }
}
📄 Dokumentasi API (Swagger)

Akses:

http://127.0.0.1:3000/api-docs
📬 Postman Collection

File tersedia:

postman/Rekening-API-Demo.postman_collection.json

Import ke Postman untuk testing cepat.

📊 Logging

Log tersimpan di:

logs/access.log
logs/error.log
🧪 Testing Flow
Jalankan server
Test /health
Test /api/check-account
Cek Swagger
Cek Postman
🧠 Arsi
