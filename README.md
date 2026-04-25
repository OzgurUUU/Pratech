# 🚀 Pratech Personel İzin Yönetim Sistemi

Bu proje, **Pratech Yazılım stajyer görev paketi** kapsamında geliştirilmiş; personellerin izin talebi oluşturabildiği, yöneticilerin ise bu talepleri **gerçek zamanlı (real-time)** olarak yönetebildiği modern bir **Fullstack uygulamadır.**

---

## 🌌 Mimari ve Tema

Uygulama, kurumsal yazılım standartlarına uygun olarak tasarlanmış ve **Midnight Slate** (derin antrasit & indigo) dark tema paletiyle görselleştirilmiştir.

Kullanıcı deneyimini artırmak için:
- **Personnel (Talep Formu)**
- **Admin (Yönetim Paneli)**

ekranları **Angular Routing** ile ayrılmıştır.

---

## 🛠️ Teknik Yetkinlikler

### 🔧 Backend (NestJS & SQLite)

- ⚡ **Real-time Haberleşme**  
  Socket.io entegrasyonu sayesinde yeni bir talep geldiğinde tüm admin panelleri **sayfa yenilenmeden güncellenir**.

- 🔐 **Veri Güvenliği & Validasyon**  
  `class-validator` ve `ValidationPipe` kullanılarak hatalı/veri eksik girişleri engellenir.  
  Hatalı isteklerde **400 Bad Request** döndürülür.

- 💾 **Kalıcı Veri**  
  Hafif ve taşınabilir yapı için **SQLite** veritabanı kullanılmıştır.

---

### 🎨 Frontend (Angular & Tailwind CSS)

- 🧭 **Modern Routing**  
  - `/talep-olustur`
  - `/yonetici-paneli`

- 🧠 **Reaktif Formlar**  
  Gelişmiş validasyonlar:
  - "Başlangıç tarihi bitişten sonra olamaz" gibi özel kontroller

- 🌍 **Lokalizasyon**  
  Tarihler Angular `DatePipe` ve `tr` locale ile:  
  👉 **25 Nisan 2026** formatında gösterilir

- 📱 **Responsive Tasarım**  
  Tailwind CSS v3 ile mobil ve masaüstü uyumlu arayüz

---

## 🚀 Kurulum ve Çalıştırma

### 1️⃣ Backend Kurulumu

```bash
cd pratech-backend
npm install
npm run start:dev
