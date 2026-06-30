# CAKSTORE Landing Page

Landing page React + Vite untuk CAKSTORE dengan desain mobile-first, tema pink/coral/emas, tombol WhatsApp, daftar produk premium, dan carousel metode pembayaran.

## Fitur

- Mobile-first untuk link bio TikTok
- Nomor WhatsApp: `6281455124049`
- Produk dengan logo aplikasi: Netflix, Vidio, Viu, Prime Video, Canva, Spotify, YouTube, CapCut, Disney+ Hotstar, WeTV, iQIYI, Bstation
- Section metode pembayaran geser kanan/kiri: QRIS, DANA, GoPay, OVO, ShopeePay, BRI, BCA
- Logo metode pembayaran memakai file resmi/Commons yang sudah disimpan di project + fallback lokal jika render bermasalah
- Tombol WhatsApp otomatis di hero, produk, CTA, dan sticky bottom
- `.gitignore` sudah disiapkan agar `node_modules`, `dist`, dan `.vercel` tidak ikut ke GitHub

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka alamat lokal yang muncul, biasanya:

```txt
http://localhost:5173
```

## Cara update ke GitHub + Vercel

```bash
git add .
git commit -m "Update official payment logos CAKSTORE"
git push
```

Vercel akan deploy otomatis jika repository GitHub sudah tersambung.

## Catatan brand

Logo/ikon aplikasi dan metode pembayaran di project ini dipakai sebagai representasi visual agar customer mudah mengenali layanan. Semua merek dagang tetap milik pemilik masing-masing brand. CAKSTORE bukan bagian dari brand tersebut.


## Sumber logo pembayaran

Detail sumber logo pembayaran ada di file `PAYMENT_LOGO_SOURCES.md`.
