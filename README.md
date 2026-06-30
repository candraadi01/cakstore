# CAKSTORE Landing Page

Landing page React untuk CAKSTORE dengan tampilan mobile-first, warna pink cerah, dan tombol order ke WhatsApp.

## Cara menjalankan

```bash
npm install
npm run dev
```

Lalu buka alamat yang muncul di terminal, biasanya:

```txt
http://localhost:5173
```

## Cara build untuk deploy

```bash
npm run build
```

## Nomor WhatsApp

Nomor WhatsApp sudah diatur di file:

```txt
src/App.jsx
```

Bagian:

```js
const whatsappNumber = "6282338184217";
```

## Deploy ke Vercel

1. Upload project ke GitHub.
2. Masuk ke Vercel.
3. Import repository.
4. Framework otomatis terdeteksi sebagai Vite.
5. Klik Deploy.
