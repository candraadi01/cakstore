const whatsappNumber = "6281455124049";

const products = [
  {
    name: "Netflix Premium",
    price: "Tanya harga terbaru",
    desc: "Untuk nonton film dan series favorit dengan praktis.",
    emoji: "🎬",
    label: "Streaming",
  },
  {
    name: "Vidio Premium",
    price: "Tanya harga terbaru",
    desc: "Cocok untuk nonton olahraga, drama, dan hiburan lokal.",
    emoji: "📺",
    label: "Streaming",
  },
  {
    name: "Viu Premium",
    price: "Tanya harga terbaru",
    desc: "Nikmati drama Korea, anime, dan konten Asia favorit.",
    emoji: "💖",
    label: "Drama",
  },
  {
    name: "Prime Video",
    price: "Tanya harga terbaru",
    desc: "Streaming film dan series populer dengan mudah.",
    emoji: "🍿",
    label: "Movie",
  },
  {
    name: "Spotify Premium",
    price: "Tanya harga terbaru",
    desc: "Dengarkan musik favorit dengan pengalaman premium.",
    emoji: "🎧",
    label: "Music",
  },
  {
    name: "Canva Pro",
    price: "Tanya harga terbaru",
    desc: "Bikin desain lebih mudah untuk tugas, bisnis, dan konten.",
    emoji: "🎨",
    label: "Design",
  },
  {
    name: "YouTube Premium",
    price: "Tanya harga terbaru",
    desc: "Nonton video dan dengarkan musik dengan lebih nyaman.",
    emoji: "▶️",
    label: "Video",
  },
  {
    name: "CapCut Pro",
    price: "Tanya harga terbaru",
    desc: "Edit video lebih maksimal untuk konten TikTok dan Reels.",
    emoji: "✨",
    label: "Editor",
  },
];

const faqs = [
  {
    question: "Cara ordernya gimana?",
    answer: "Pilih layanan yang kamu mau, lalu klik tombol Pesan Sekarang. Nanti kamu langsung diarahkan ke WhatsApp admin CAKSTORE.",
  },
  {
    question: "Bisa tanya dulu sebelum beli?",
    answer: "Bisa banget. Kamu bisa tanya harga, stok, durasi, dan detail paket terlebih dahulu melalui WhatsApp.",
  },
  {
    question: "Prosesnya berapa lama?",
    answer: "Pesanan akan dibantu admin setelah pembayaran dikonfirmasi. Waktu proses menyesuaikan jenis layanan dan ketersediaan paket.",
  },
  {
    question: "Pembayaran lewat apa?",
    answer: "Metode pembayaran bisa langsung ditanyakan ke admin melalui WhatsApp supaya kamu mendapat info yang paling terbaru.",
  },
];

function createWhatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function ProductCard({ product }) {
  return (
    <article className="group rounded-[1.6rem] border border-pink-100 bg-white p-4 shadow-sm shadow-pink-100/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/70 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-3xl ring-1 ring-pink-100">
          {product.emoji}
        </div>
        <span className="rounded-full bg-pink-100 px-3 py-1 text-[11px] font-black text-pink-600">
          {product.label}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-black leading-tight text-[#24141c]">
        {product.name}
      </h3>
      <p className="mt-1 text-sm font-black text-pink-600">{product.price}</p>
      <p className="mt-3 min-h-12 text-sm leading-relaxed text-gray-600">
        {product.desc}
      </p>

      <a
        href={createWhatsappLink(`Halo kak, saya mau tanya paket ${product.name} di CAKSTORE.`)}
        target="_blank"
        rel="noreferrer"
        className="mt-5 block rounded-2xl bg-gradient-to-r from-pink-600 to-rose-400 px-5 py-3.5 text-center text-sm font-black text-white shadow-lg shadow-pink-200 active:scale-95"
      >
        Pesan Sekarang
      </a>
    </article>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF1F7] text-[#24141c]">
      <section className="relative px-4 pb-8 pt-5 sm:px-8 lg:px-20">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-pink-300/50 blur-3xl" />
        <div className="absolute -left-24 top-56 h-72 w-72 rounded-full bg-rose-200/70 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-pink-200 bg-white/80 px-3 py-3 shadow-sm backdrop-blur sm:px-4">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-600 to-rose-400 text-lg font-black text-white shadow-md shadow-pink-200">
              C
            </div>
            <div>
              <h1 className="text-base font-black tracking-tight text-pink-600">
                CAKSTORE
              </h1>
              <p className="text-[11px] font-semibold text-gray-500">
                Premium Digital Store
              </p>
            </div>
          </a>

          <a
            href={createWhatsappLink("Halo kak, saya mau tanya layanan premium di CAKSTORE.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-black text-white shadow-md shadow-green-200 active:scale-95"
          >
            WhatsApp
          </a>
        </nav>

        <div id="home" className="relative z-10 mx-auto mt-8 max-w-6xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:pt-10">
          <div className="text-center lg:text-left">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-2 text-xs font-black text-pink-600 shadow-sm lg:mx-0">
              <span>✨</span>
              <span>Cepat, praktis, dan mudah dipesan</span>
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#24141c] sm:text-5xl lg:text-6xl">
              Langganan Digital Premium Jadi{" "}
              <span className="bg-gradient-to-r from-pink-600 to-rose-400 bg-clip-text text-transparent">
                Lebih Mudah
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base lg:mx-0">
              CAKSTORE menyediakan berbagai layanan premium seperti Netflix,
              Vidio, Viu, Prime Video, Spotify, Canva, dan lainnya. Pilih
              layanan, klik WhatsApp, lalu admin akan bantu proses order kamu.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={createWhatsappLink("Halo kak, saya mau order layanan premium di CAKSTORE.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-gradient-to-r from-pink-600 to-rose-400 px-6 py-4 text-center text-sm font-black text-white shadow-xl shadow-pink-300/60 active:scale-95"
              >
                Pesan Sekarang via WhatsApp
              </a>

              <a
                href="#produk"
                className="rounded-2xl border border-pink-200 bg-white px-6 py-4 text-center text-sm font-black text-pink-600 shadow-sm active:scale-95"
              >
                Lihat Daftar Produk
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white p-3 text-center shadow-sm ring-1 ring-pink-100">
                <p className="text-lg font-black text-pink-600">8+</p>
                <p className="text-[11px] font-semibold text-gray-500">Layanan</p>
              </div>
              <div className="rounded-2xl bg-white p-3 text-center shadow-sm ring-1 ring-pink-100">
                <p className="text-lg font-black text-pink-600">Fast</p>
                <p className="text-[11px] font-semibold text-gray-500">Respon</p>
              </div>
              <div className="rounded-2xl bg-white p-3 text-center shadow-sm ring-1 ring-pink-100">
                <p className="text-lg font-black text-pink-600">WA</p>
                <p className="text-[11px] font-semibold text-gray-500">Order</p>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="mx-auto max-w-sm rounded-[2rem] border border-pink-200 bg-white p-4 shadow-2xl shadow-pink-200/70">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-pink-600 to-rose-400 p-5 text-white">
                <p className="text-sm font-bold opacity-90">Produk Populer</p>
                <h3 className="mt-2 text-3xl font-black">CAKSTORE</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-90">
                  Pilih paket favoritmu dan langsung chat admin.
                </p>
              </div>

              <div className="mt-4 space-y-3">
                {products.slice(0, 4).map((product) => (
                  <a
                    key={product.name}
                    href={createWhatsappLink(`Halo kak, saya mau tanya paket ${product.name} di CAKSTORE.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-pink-50 p-3 transition hover:bg-pink-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
                        {product.emoji}
                      </div>
                      <div>
                        <p className="text-sm font-black">{product.name}</p>
                        <p className="text-xs font-semibold text-pink-600">
                          {product.price}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-black text-pink-600">
                      Order
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="produk" className="px-4 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-pink-500">
              Daftar Produk
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Pilih Layanan Premium Kamu
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
              Klik tombol pesan pada produk yang kamu inginkan. Pesan otomatis
              akan masuk ke WhatsApp admin CAKSTORE.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-pink-100 sm:p-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-pink-500">
              Cara Order
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Cuma 3 Langkah
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["1", "Pilih Layanan", "Pilih produk premium yang kamu butuhkan."],
              ["2", "Klik WhatsApp", "Tekan tombol pesan pada produk pilihanmu."],
              ["3", "Dibantu Admin", "Admin akan bantu proses order sampai selesai."],
            ].map((step) => (
              <div
                key={step[0]}
                className="rounded-3xl border border-pink-100 bg-pink-50 p-5 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-lg font-black text-white">
                  {step[0]}
                </div>
                <h3 className="mt-4 text-lg font-black">{step[1]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {step[2]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            ["⚡", "Proses Cepat"],
            ["💬", "Bisa Tanya Dulu"],
            ["🎀", "Banyak Pilihan"],
            ["📱", "Order via WhatsApp"],
          ].map((item) => (
            <div
              key={item[1]}
              className="rounded-3xl border border-pink-100 bg-white p-5 text-center shadow-sm"
            >
              <p className="text-3xl">{item[0]}</p>
              <p className="mt-3 text-sm font-black">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-pink-500">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Pertanyaan Umum
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm"
              >
                <h3 className="font-black">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-pink-600 to-rose-400 p-7 text-center text-white shadow-xl shadow-pink-200 sm:p-10">
          <h2 className="text-3xl font-black tracking-tight">
            Bingung pilih paket?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed opacity-90">
            Langsung chat admin CAKSTORE. Kamu bisa tanya harga, stok, dan
            rekomendasi layanan yang cocok.
          </p>
          <a
            href={createWhatsappLink("Halo kak, saya mau tanya-tanya dulu tentang layanan premium di CAKSTORE.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-2xl bg-white px-6 py-4 text-sm font-black text-pink-600 shadow-md active:scale-95"
          >
            Chat Admin Sekarang
          </a>
        </div>
      </section>

      <footer className="px-4 pb-24 pt-6 text-center sm:px-8 lg:px-20">
        <h2 className="text-xl font-black text-pink-600">CAKSTORE</h2>
        <p className="mt-2 text-sm text-gray-600">
          Premium Digital Store — order mudah lewat WhatsApp.
        </p>
        <p className="mt-4 text-xs font-semibold text-gray-400">
          © 2026 CAKSTORE. All rights reserved.
        </p>
      </footer>

      <a
        href={createWhatsappLink("Halo kak, saya mau order layanan premium di CAKSTORE.")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 left-4 right-4 z-50 rounded-2xl bg-[#25D366] px-5 py-4 text-center text-sm font-black text-white shadow-2xl shadow-green-300/40 active:scale-95 sm:left-auto sm:right-6 sm:w-72"
      >
        💬 Pesan via WhatsApp
      </a>
    </main>
  );
}

export default App;
