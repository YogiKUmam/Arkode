# Arkode Labs Website

Website company profile untuk Arkode Labs, software house dan digital solution partner.

## Fitur

- Halaman publik: Home, Services, Case Studies, About, Pricing, Blog, Contact, Privacy, Terms.
- Admin dashboard lokal di `/admin` untuk mengelola case study dan blog.
- Case study preview dengan visual mockup dan live demo lokal.
- Tema brand Arkode Labs: navy, electric blue, cyan, soft blue.
- Konten awal mengikuti company profile Arkode Labs.

## Route Penting

- `/` - halaman utama
- `/services` - layanan
- `/case-studies` - portfolio dan case study
- `/case-studies/business-website-relaunch/demo` - live demo website relaunch
- `/case-studies/operations-dashboard-prototype/demo` - live demo dashboard prototype
- `/blog` - artikel/insight
- `/admin` - dashboard konten lokal
- `/contact` - form kontak

## Menjalankan Lokal

```bash
npm install
npm run dev -- --port 5173 --host 127.0.0.1
```

Buka `http://127.0.0.1:5173/`.

## Verifikasi

```bash
npm test
npm run build
```

## Catatan Admin

Dashboard admin saat ini memakai `localStorage`, sehingga data hanya tersimpan di browser yang digunakan. Untuk produksi, admin sebaiknya dipindahkan ke backend/CMS dengan autentikasi.
