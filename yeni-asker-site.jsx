export default function YeniAskerSite() {
  sabit kitaplar = [
    {
      kimlik: 1,
      başlık: "YENİ ASKER 1",
      durum: "Devam Ediyor",
      tür: ["Asker Kurgusu", "Romantik"],
    },
  ];

  sabit bölümler = [
    "İ",
    "Fırtınanın Başlangıcı",
    "İlk Karşılaşma",
    "Çatışma",
    "İnat",
    "Sınır",
    "Yemin",
    "Kan ve Gurur",
  ];

  const FirstChapterText = `Merhaba! Ben Emir Ulukurt. kendimi üç kelimeyle tanıtacak olsam: Şebnem Ferah, müzik dinlemek ve askerlik derdim.

Evet, askerlik.

Çünkü ben bordo bereli bir asker oldum. İlk görev yerim ise Iğdır'dı. En çok Hakkâriliğin sağlanması ama buna da şükür.

Gitmeden önce yapılmaması gereken bazı şeyler vardı: Annemi ziyaret etmek, bavulumu saklamak ve babamın mezarına gitmek.

Babam, ben dokuzuncu sırada öldürüldü. Ve ben katilini listeledim.

Babama bir sözüm vardı: asker olmak.

Şimdi mezarının başında durmuştum.

"Baba... ben asker oldum. Bugün ilk görev yerine gidiyorum."

Sessiz.

Ama ben yine de söz verdi:

“Onun Ankara'ya geldiğimde geleceğim.”

Ardından annemi ziyaret ettim, eve döndüm ve en yakın arkadaşım Teoman ile bavulları hazırladık.

Otogara vardığımızda onu gördüm.

Güzelliği anlatılamayacak kadar etkileyiciydi.

Ve başarabildim, otobüste çapraz koltuğa oturdum.

Tam onu ​​izlerken telefonu çekme ve sinirli bir şekilde Karadeniz ağzıyla konuşmaya başladı.

O an yaşadı.

Bu kız sıradan biri değildi.

Ve belli ki benim hayatım tamamen değişecekti.`;

  geri dönmek (
    <div className="min-h-screen bg-black text-white font-serif">
      {/* Gezinme Çubuğu */}
      <header className="border-b border-zinc-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl tracking-[0.2em] font-bold">YENİ ASKER</h1>

          <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-zinc-300">
            <a href="#">Ana Sayfa</a>
            <a href="#kitaplar">Kitaplarım</a>
            <a href="#bolumler">Bölümler</a>
            <a href="#karakterler">Karakterler</a>
            <a href="#hakkinda">Hakkında</a>
          </nav>

          <button className="border border-red-700 px-5 py-2 rounded-xl hover:bg-red-900 transition">
            Yazar Paneli
          </button>
        </div>
      </header>

      {/* Kahraman */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-zinc-400 italic mb-4">
            “Bazı savaşlar cephede değil, kalpte kazanılır.”
          </p>

          <h2 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            YENİ <br /> ASKER
          </h2>

          <p className="text-red-500 text-xl tracking-wide mb-6">
            İNAT. GURUR. AŞK.
          </p>

          <p className="text-zinc-300 leading-8 mb-8 max-w-xl">
            İki engelleme askeri. İki farklı dünya. Aynı görevde yollar
            yaklaştıklarında, ne düşman olabilirler ne de vazgeçebilirler...
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-red-700 hover:bg-red-800 px-8 py-4 rounded-2xl text-lg">
              1. Bölüm Oku
            </button>
            <button className="border border-zinc-700 px-8 py-4 rounded-2xl text-lg">
              Fragmanı İzle
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 p-8 bg-zinc-950 shadow-2xl">
          <h3 className="text-2xl mb-6">Ana Karakterler</h3>

          <div className="space-y-6">
            <div>
              <p className="text-red-400 font-semibold">202 CM</p>
              <h4 className="text-2xl font-bold">Karan Demir</h4>
              <p className="text-zinc-400">
                Sakin, karizmatik, kontrollü. Ama onun herşeyinin kontrolünde.
              </p>
            </div>

            <div>
              <p className="text-red-400 font-semibold">185 CM</p>
              <h4 className="text-2xl font-bold">Defne Yılmaz</h4>
              <p className="text-zinc-400">
                Güzel, öfkeli, ilişkiler. Kimseye boyun eğmez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kitaplar */}
      <section id="kitaplar" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-4xl font-bold mb-10">Kitaplarım</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {kitaplar.harita((kitap) => (
            <div
              anahtar={kitap.id}
              className="border border-zinc-800 rounded-3xl p-6 bg-zinc-950 hover:border-red-700 transition"
            >
              <div className="h-72 rounded-2xl bg-zinc-900 flex items-center justify-center text-3xl font-bold mb-6">
                {kitap.başlığı}
              </div>

              <p className="text-sm text-red-400 mb-2">{book.status}</p>
              <h4 className="text-2xl font-bold mb-3">{kitap.başlığı}</h4>

              <div className="flex gap-2 flex-wrap mb-5">
                {kitap.tür.harita((öğe) => (
                  <span
                    anahtar={öğe}
                    className="text-xs border border-zinc-700 px-3 py-1 rounded-full"
                  >
                    {öğe}
                  </span>
                ))}
              </div>

              <button className="w-full bg-red-700 py-3 rounded-xl hover:bg-red-800 transition">
                Kitabı Aç
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bölümler */}
      <section id="bolumler" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-4xl font-bold mb-10">YENİ ASKER 1 — Bölümler</h3>

        <div className="border border-zinc-800 rounded-3xl overflow-hidden">
          {bölümler.harita((bölüm, indeks) => (
            <div
              anahtar={bölüm}
              className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 last:border-none hover:bg-zinc-950"
            >
              <div className="flex gap-6 items-center">
                <span className="text-zinc-500 w-10">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-lg">
                  {dizin === 0 ? "Giriş" : bölüm}
                </span>
              </div>

              <button className="text-red-400 hover:text-red-300">
                Oku →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Altbilgi */}
      <footer className="border-t border-zinc-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-zinc-400">
          <h4 className="text-white text-2xl mb-3">YENİ ASKER</h4>
          <p>İnat, gurur ve aşk... Hepsi tek bir yeminde.</p>
        </div>
      </footer>
    </div>
  );
} 
