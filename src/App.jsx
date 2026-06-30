import logoCakstore from './assets/logo-cakstore.jpg'

import netflixLogo from './assets/brands/netflix.svg'
import vidioLogo from './assets/brands/vidio.svg'
import viuLogo from './assets/brands/viu.svg'
import primeVideoLogo from './assets/brands/prime-video.svg'
import spotifyLogo from './assets/brands/spotify.svg'
import canvaLogo from './assets/brands/canva.svg'
import youtubeLogo from './assets/brands/youtube.svg'
import capcutLogo from './assets/brands/capcut.svg'
import disneyHotstarLogo from './assets/brands/disney-hotstar.svg'
import wetvLogo from './assets/brands/wetv.svg'
import iqiyiLogo from './assets/brands/iqiyi.svg'
import bstationLogo from './assets/brands/bstation.svg'

const whatsappNumber = '6281455124049'

const products = [
  {
    name: 'Netflix Premium',
    tag: 'Streaming',
    price: 'Cek paket via WA',
    desc: 'Nonton film dan series favorit dengan pilihan paket premium.',
    logo: netflixLogo,
  },
  {
    name: 'Vidio Premium',
    tag: 'Streaming',
    price: 'Cek paket via WA',
    desc: 'Cocok untuk nonton olahraga, series, dan hiburan lokal.',
    logo: vidioLogo,
  },
  {
    name: 'Viu Premium',
    tag: 'Drama Asia',
    price: 'Cek paket via WA',
    desc: 'Nikmati drama Korea, anime, dan konten Asia favorit.',
    logo: viuLogo,
  },
  {
    name: 'Prime Video',
    tag: 'Streaming',
    price: 'Cek paket via WA',
    desc: 'Streaming film dan series populer dengan proses order praktis.',
    logo: primeVideoLogo,
  },
  {
    name: 'Canva Pro',
    tag: 'Desain',
    price: 'Cek paket via WA',
    desc: 'Buat desain lebih mudah untuk tugas, bisnis, dan konten sosial media.',
    logo: canvaLogo,
  },
  {
    name: 'Spotify Premium',
    tag: 'Musik',
    price: 'Cek paket via WA',
    desc: 'Dengarkan musik favorit dengan pengalaman premium.',
    logo: spotifyLogo,
  },
  {
    name: 'YouTube Premium',
    tag: 'Video',
    price: 'Cek paket via WA',
    desc: 'Nikmati YouTube dengan fitur premium dan lebih nyaman dipakai.',
    logo: youtubeLogo,
  },
  {
    name: 'CapCut Pro',
    tag: 'Editing',
    price: 'Cek paket via WA',
    desc: 'Edit video lebih praktis untuk konten TikTok, Reels, dan lainnya.',
    logo: capcutLogo,
  },
  {
    name: 'Disney+ Hotstar',
    tag: 'Streaming',
    price: 'Cek paket via WA',
    desc: 'Pilihan hiburan keluarga, film, dan series populer.',
    logo: disneyHotstarLogo,
  },
  {
    name: 'WeTV Premium',
    tag: 'Drama Asia',
    price: 'Cek paket via WA',
    desc: 'Nonton drama dan variety show favorit dengan mudah.',
    logo: wetvLogo,
  },
  {
    name: 'iQIYI Premium',
    tag: 'Drama Asia',
    price: 'Cek paket via WA',
    desc: 'Pilihan drama, anime, dan konten Asia populer.',
    logo: iqiyiLogo,
  },
  {
    name: 'Bstation Premium',
    tag: 'Anime',
    price: 'Cek paket via WA',
    desc: 'Cocok untuk nonton anime dan konten hiburan favorit.',
    logo: bstationLogo,
  },
]

const faqs = [
  {
    question: 'Cara ordernya gimana?',
    answer: 'Pilih layanan yang kamu mau, lalu klik Pesan Sekarang. Nanti otomatis diarahkan ke WhatsApp admin CAKSTORE.',
  },
  {
    question: 'Bisa tanya harga dulu?',
    answer: 'Bisa. Kamu bisa langsung tanya harga, stok, durasi paket, dan detail layanan lewat WhatsApp.',
  },
  {
    question: 'Prosesnya berapa lama?',
    answer: 'Proses akan dibantu admin setelah pembayaran dikonfirmasi. Admin akan memberi instruksi sampai selesai.',
  },
  {
    question: 'Pembayaran lewat apa?',
    answer: 'Metode pembayaran bisa ditanyakan langsung melalui WhatsApp agar customer lebih mudah memilih.',
  },
]

function createWhatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

function ProductLogo({ src, alt, className = '' }) {
  return (
    <div className={`flex items-center justify-center rounded-2xl bg-white p-2 shadow-sm ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </div>
  )
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F9E3EE] text-[#2B2B2B]">
      <section className="relative px-5 pb-10 pt-5 sm:px-8 lg:px-20">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#FF5A6B]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 top-56 h-72 w-72 rounded-full bg-[#D8B000]/20 blur-3xl" />
        <div className="pointer-events-none absolute left-10 top-24 text-3xl text-[#FF5A6B]/40">✦</div>
        <div className="pointer-events-none absolute right-12 top-72 text-4xl text-[#D8B000]/40">✦</div>

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoCakstore}
              alt="Logo CAKSTORE"
              className="h-12 w-12 rounded-full border-2 border-[#D8B000] object-cover shadow-sm"
            />
            <div className="leading-tight">
              <h1 className="text-base font-black tracking-tight text-[#FF5A6B]">CAKSTORE</h1>
              <p className="text-[11px] font-semibold text-gray-500">Premium Digital Store</p>
            </div>
          </a>

          <a
            href={createWhatsappLink('Halo kak, saya mau tanya layanan premium di CAKSTORE.')}
            className="rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-black text-white shadow-md shadow-green-200 active:scale-95"
          >
            WhatsApp
          </a>
        </nav>

        <div id="top" className="relative z-10 mx-auto mt-9 max-w-6xl lg:grid lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-12">
          <div className="text-center lg:text-left">
            <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-[#FFD4DC] bg-white px-4 py-2 text-xs font-black text-[#FF5A6B] shadow-sm lg:mx-0">
              ⚡ Cepat, praktis, dan dibantu admin
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#2B2B2B] sm:text-5xl lg:text-6xl">
              Jual APK Premium{' '}
              <span className="bg-gradient-to-r from-[#FF5A6B] to-[#D8B000] bg-clip-text text-transparent">
                100% Amanah
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-0">
              CAKSTORE menyediakan berbagai layanan premium seperti Netflix, Vidio, Viu, Prime Video, Canva, Spotify, dan lainnya. Pesan mudah langsung lewat WhatsApp.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={createWhatsappLink('Halo kak, saya mau order layanan premium di CAKSTORE.')}
                className="rounded-2xl bg-gradient-to-r from-[#FF5A6B] to-[#FF7F8E] px-6 py-4 text-center text-sm font-black text-white shadow-lg shadow-[#FF5A6B]/25 active:scale-95"
              >
                Pesan Sekarang via WhatsApp
              </a>

              <a
                href="#produk"
                className="rounded-2xl border border-[#FFD4DC] bg-white px-6 py-4 text-center text-sm font-black text-[#FF5A6B] shadow-sm active:scale-95"
              >
                Lihat Daftar Produk
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/80 bg-white p-3 text-center shadow-sm">
                <p className="text-lg font-black text-[#FF5A6B]">12+</p>
                <p className="text-[11px] font-semibold text-gray-500">Layanan</p>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white p-3 text-center shadow-sm">
                <p className="text-lg font-black text-[#D8B000]">Fast</p>
                <p className="text-[11px] font-semibold text-gray-500">Respon</p>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white p-3 text-center shadow-sm">
                <p className="text-lg font-black text-[#25D366]">WA</p>
                <p className="text-[11px] font-semibold text-gray-500">Order</p>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="mx-auto max-w-sm rounded-[2rem] border border-white/80 bg-white p-4 shadow-2xl shadow-[#FF5A6B]/15">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-[#FF5A6B] via-[#FF7F8E] to-[#D8B000] p-5 text-white">
                <div className="flex items-center gap-3">
                  <img src={logoCakstore} alt="CAKSTORE" className="h-14 w-14 rounded-2xl border-2 border-white/70 object-cover" />
                  <div>
                    <p className="text-xs font-bold opacity-90">Produk Populer</p>
                    <h3 className="text-2xl font-black">CAKSTORE</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed opacity-95">
                  Pilih aplikasi favoritmu, lalu langsung chat admin.
                </p>
              </div>

              <div className="mt-4 space-y-3">
                {products.slice(0, 5).map((product) => (
                  <a
                    key={product.name}
                    href={createWhatsappLink(`Halo kak, saya mau tanya paket ${product.name} di CAKSTORE.`)}
                    className="flex items-center justify-between rounded-2xl bg-[#FFF7FA] p-3 transition active:scale-[.98]"
                  >
                    <div className="flex items-center gap-3">
                      <ProductLogo src={product.logo} alt={product.name} className="h-11 w-11 rounded-xl" />
                      <div className="text-left">
                        <p className="text-sm font-black">{product.name}</p>
                        <p className="text-xs font-semibold text-[#FF5A6B]">Tanya harga</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-black text-[#FF5A6B] shadow-sm">
                      Order
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="produk" className="px-5 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-[#FF5A6B]">Daftar Produk</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Pilih APK Premium Kamu</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              Semua tombol produk langsung mengarah ke WhatsApp admin CAKSTORE dengan pesan otomatis, jadi customer tidak bingung.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="rounded-[1.5rem] border border-white/80 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <ProductLogo src={product.logo} alt={product.name} className="h-16 w-16" />
                  <span className="rounded-full bg-[#FFF7D6] px-3 py-1 text-[11px] font-black text-[#B59600]">
                    {product.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black">{product.name}</h3>
                <p className="mt-1 text-sm font-black text-[#FF5A6B]">{product.price}</p>
                <p className="mt-3 min-h-[60px] text-sm leading-relaxed text-gray-600">{product.desc}</p>

                <a
                  href={createWhatsappLink(`Halo kak, saya mau tanya paket ${product.name} di CAKSTORE.`)}
                  className="mt-5 block rounded-2xl bg-gradient-to-r from-[#FF5A6B] to-[#FF7F8E] px-5 py-3.5 text-center text-sm font-black text-white shadow-md shadow-[#FF5A6B]/20 active:scale-95"
                >
                  Pesan Sekarang
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/80 bg-white p-6 shadow-sm sm:p-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-[#FF5A6B]">Cara Order</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Cuma 3 Langkah</h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ['1', 'Pilih Layanan', 'Pilih aplikasi premium yang kamu butuhkan dari daftar produk.'],
              ['2', 'Klik WhatsApp', 'Tekan tombol Pesan Sekarang pada produk pilihanmu.'],
              ['3', 'Dibantu Admin', 'Admin akan bantu cek paket, pembayaran, dan proses order.'],
            ].map((step) => (
              <div key={step[0]} className="rounded-3xl border border-[#FFD4DC] bg-[#FFF7FA] p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FF5A6B] text-lg font-black text-white shadow-md shadow-[#FF5A6B]/20">
                  {step[0]}
                </div>
                <h3 className="mt-4 text-lg font-black">{step[1]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{step[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
          {[
            ['⚡', 'Proses Cepat', 'Order langsung dibantu admin.'],
            ['💬', 'Bisa Tanya Dulu', 'Customer bisa chat sebelum pesan.'],
            ['🎀', 'Banyak Pilihan', 'Streaming, musik, desain, editing.'],
            ['📱', 'Mobile Friendly', 'Cocok untuk link bio TikTok.'],
          ].map((item) => (
            <div key={item[1]} className="rounded-3xl border border-white/80 bg-white p-5 text-center shadow-sm">
              <p className="text-3xl">{item[0]}</p>
              <p className="mt-3 text-sm font-black">{item[1]}</p>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-[#FF5A6B]">FAQ</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Pertanyaan Umum</h2>
          </div>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-white/80 bg-white p-5 shadow-sm">
                <h3 className="font-black">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-[#FF5A6B] via-[#FF7F8E] to-[#D8B000] p-7 text-center text-white shadow-xl shadow-[#FF5A6B]/20 sm:p-10">
          <h2 className="text-3xl font-black tracking-tight">Bingung pilih paket?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed opacity-95">
            Langsung chat admin CAKSTORE. Kamu bisa tanya harga, stok, durasi, dan rekomendasi layanan yang cocok.
          </p>
          <a
            href={createWhatsappLink('Halo kak, saya mau tanya-tanya dulu tentang layanan premium di CAKSTORE.')}
            className="mt-6 inline-block rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#FF5A6B] shadow-md active:scale-95"
          >
            Chat Admin Sekarang
          </a>
        </div>
      </section>

      <footer className="px-5 pb-24 pt-6 text-center sm:px-8 lg:px-20">
        <img src={logoCakstore} alt="Logo CAKSTORE" className="mx-auto h-16 w-16 rounded-2xl border-2 border-[#D8B000] object-cover shadow-sm" />
        <h2 className="mt-3 text-xl font-black text-[#FF5A6B]">CAKSTORE</h2>
        <p className="mt-2 text-sm text-gray-600">Premium Digital Store — order mudah lewat WhatsApp.</p>
        <p className="mx-auto mt-3 max-w-xl text-[11px] leading-relaxed text-gray-400">
          Semua logo dan merek dagang merupakan milik masing-masing pemilik brand. CAKSTORE bukan bagian dari Netflix, Vidio, Viu, Prime Video, Canva, Spotify, YouTube, CapCut, Disney+ Hotstar, WeTV, iQIYI, Bstation, atau brand terkait.
        </p>
        <p className="mt-4 text-xs font-semibold text-gray-400">© 2026 CAKSTORE. All rights reserved.</p>
      </footer>

      <a
        href={createWhatsappLink('Halo kak, saya mau order layanan premium di CAKSTORE.')}
        className="fixed bottom-5 left-5 right-5 z-50 rounded-2xl bg-[#25D366] px-5 py-4 text-center text-sm font-black text-white shadow-2xl shadow-green-300/40 active:scale-95 sm:left-auto sm:w-72"
      >
        💬 Pesan via WhatsApp
      </a>
    </main>
  )
}

export default App
