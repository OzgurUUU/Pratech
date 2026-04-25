# 🚀 Pratech — Personel İzin Yönetim Sistemi

Pratech, personellerin izin talebinde bulunabildiği ve yöneticilerin bu talepleri **gerçek zamanlı** olarak yönetip onaylayabildiği modern bir fullstack web uygulamasıdır. Pratech Yazılım stajyer görev paketi kapsamında geliştirilmiştir.

---

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknoloji Yığını](#️-teknoloji-yığını)
- [Proje Yapısı](#-proje-yapısı)
- [Kurulum ve Çalıştırma](#-kurulum-ve-çalıştırma)
- [API Uç Noktaları](#-api-uç-noktaları)
- [Uygulama Ekranları](#-uygulama-ekranları)
- [Geliştirici](#-geliştirici)

---

## ✨ Özellikler

- 📝 **İzin Talebi Oluşturma** — Personeller ad, tarih aralığı ve izin türü girerek kolayca talep oluşturabilir
- ⚡ **Gerçek Zamanlı Bildirim** — Socket.io sayesinde yeni talepler admin paneline sayfa yenilenmeden anında yansır
- ✅ **Talep Yönetimi** — Yöneticiler gelen talepleri onaylayabilir veya reddedebilir
- 🔍 **Form Validasyonu** — Başlangıç tarihi bitiş tarihinden sonra olamaz gibi özel kontroller uygulanır; hatalı girişlerde `400 Bad Request` döner
- 📱 **Responsive Tasarım** — Mobil ve masaüstü cihazlarda tam uyumlu arayüz
- 🌙 **Dark Tema** — Midnight Slate (derin antrasit & indigo) renk paleti ile kurumsal görünüm
- 🌍 **Türkçe Lokalizasyon** — Tarihler `25 Nisan 2026` formatında Türkçe gösterilir

---

## 🛠️ Teknoloji Yığını

### Backend

| Teknoloji | Açıklama |
|-----------|----------|
| **Node.js** (CommonJS) | Sunucu tarafı çalışma ortamı |
| **NestJS** | Modüler ve ölçeklenebilir Node.js çerçevesi |
| **SQLite** | Hafif, taşınabilir ilişkisel veritabanı |
| **Socket.io** | Gerçek zamanlı, çift yönlü iletişim |
| **class-validator** | DTO tabanlı veri doğrulama ve `ValidationPipe` |

### Frontend

| Teknoloji | Açıklama |
|-----------|----------|
| **Angular** | Bileşen tabanlı SPA çerçevesi |
| **Tailwind CSS v3** | Utility-first CSS kütüphanesi |
| **Angular Reactive Forms** | Gelişmiş form doğrulama |
| **Angular DatePipe** (`tr` locale) | Türkçe tarih biçimlendirme |
| **Socket.io Client** | Gerçek zamanlı sunucu bağlantısı |

---

## 📁 Proje Yapısı

```
Pratech/
├── pratech-backend/                  # NestJS + SQLite sunucusu
│   ├── src/
│   │   ├── leave/                    # İzin modülü
│   │   │   ├── dto/
│   │   │   │   ├── create-leave.dto.ts   # Yeni talep DTO'su
│   │   │   │   └── update-leave.dto.ts   # Güncelleme DTO'su
│   │   │   ├── entities/
│   │   │   │   └── leave.entity.ts       # Veritabanı entity'si
│   │   │   ├── leave.controller.ts       # REST endpoint tanımları
│   │   │   ├── leave.gateway.ts          # Socket.io gateway (real-time)
│   │   │   ├── leave.module.ts           # Modül tanımı
│   │   │   └── leave.service.ts          # İş mantığı katmanı
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   └── main.ts
│   ├── leaves.sqlite                 # SQLite veritabanı dosyası
│   └── package.json
│
└── pratech-frontend/                 # Angular istemci uygulaması
    ├── src/
    │   ├── app/
    │   │   ├── Components/
    │   │   │   ├── admin/
    │   │   │   │   ├── admin.html        # Admin yönetim paneli şablonu
    │   │   │   │   └── admin.ts          # Admin bileşen mantığı
    │   │   │   └── personnel/
    │   │   │       ├── personnel.html    # İzin talebi formu şablonu
    │   │   │       └── personnel.ts      # Personel bileşen mantığı
    │   │   ├── Service/
    │   │   │   └── leave.ts             # HTTP + Socket.io servis katmanı
    │   │   ├── app.config.ts
    │   │   ├── app.routes.ts
    │   │   └── app.ts
    │   ├── index.html
    │   ├── main.ts
    │   └── styles.css
    ├── tailwind.config.js
    └── package.json
```

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- [Node.js](https://nodejs.org/) v18+
- [Angular CLI](https://angular.io/cli) v17+

---

### 1️⃣ Backend Kurulumu

```bash
cd pratech-backend
npm install
npm run start:dev
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışır.

---

### 2️⃣ Frontend Kurulumu

```bash
cd pratech-frontend
npm install
ng serve
```

Uygulama `http://localhost:4200` adresinde açılır.

---

## 🌐 API Uç Noktaları

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| `GET` | `/api/izinler` | Tüm izin taleplerini listeler |
| `POST` | `/api/izinler` | Yeni izin talebi oluşturur |
| `PATCH` | `/api/izinler/:id` | Talebi onayla / reddet |

### Örnek İstek Gövdesi (`POST /api/izinler`)

```json
{
  "ad": "Ahmet Yılmaz",
  "baslangicTarihi": "2026-05-01",
  "bitisTarihi": "2026-05-05",
  "izinTuru": "Yıllık İzin"
}
```

---

## 🖥️ Uygulama Ekranları

### `/talep-olustur` — Personel İzin Talebi Formu

- Personel adı, izin türü ve tarih aralığı girişi
- Reactive form ile anlık doğrulama (başlangıç > bitiş kontrolü)
- Başarılı gönderim sonrası admin paneli otomatik güncellenir

### `/yonetici-paneli` — Admin Yönetim Paneli

- Bekleyen / onaylanan / reddedilen taleplerin listelenmesi
- Socket.io ile gerçek zamanlı güncelleme (sayfa yenilemesiz)
- Tek tıkla onay / red işlemi

---

## 👨‍💻 Geliştirici

**Özgür Üçdağ**
[github.com/OzgurUUU](https://github.com/OzgurUUU)

---

> Bu proje **Pratech Yazılım** stajyer görev paketi kapsamında geliştirilmiştir.
