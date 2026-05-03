import { useState } from "react";

export default function YeniAskerSite() {
  const [sayfa, setSayfa] = useState("giris");
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [yorumMetni, setYorumMetni] = useState("");
  const [yorumlar, setYorumlar] = useState([]);

  const yorumSil = (indexSil) => {
    setYorumlar(yorumlar.filter((_, index) => index !== indexSil));
  };

  const yorumGonder = () => {
    if (!kullaniciAdi.trim() || !yorumMetni.trim()) return;

    setYorumlar([
      ...yorumlar,
      `@${kullaniciAdi}: ${yorumMetni}`,
    ]);

    setKullaniciAdi("");
    setYorumMetni("");
  };

  const girisMetni = `Merhaba! Ben Emir Ulukurt. Kendimi tanıtacak 3 kelime olsa Şebnem Ferah, müzik dinlemek ve askerlik. Evet! askerlik. Çünkü ben bordo bereli asker oldum. İlk görev yerim ise Iğdır. En çok ise Hakkâri olması isterdim ama buna da şükür. Bugünün akşamı ise yola çıkacağım. Yola çıkmadan ise yapacağım bazı görevler var. Görevlerim şunlar; Annemi ziyaret etmek, bavulumu hazırlamak ve babamın mezarına gitmek. Tabii ki ilk önce rahmetli babamın mezarına gidecektim. Babam ben 9 yaşında öldürüldü. Öldürüldü diyorum çünkü bir katili var ve ben katili biliyorum: Eski komşumuz Harun Uzun. Bu adam babamı öldürmüştü ve bunu sadece ben biliyorum. Çünkü o zamanlar babamın öldürüldü zamanlar o katil hâkime rüşvet verdiği için kimse gerçeği bilmiyordu. İçimde bu acı ile büyümüştüm. Zaten şimdi babamın yanındaydım. Babama bir sözüm vardı o da asker olmak. Evet, şu an asker olmuştum ama babam yanımda yoktu. Sanki babam cevap verebilecekmiş gibi seslendim: ‘’Baba, ben asker oldum Iğdır’a ilk görev yerime bugün gideceğim.’’ Tabii ki de ses gelmedi. Gözümden yanağıma doğru yaş geldiğini hissettim. Hemen sol elimin tersiyle sildim. ‘’Baba, ben gidiyorum ama her Ankara’ya geldiğimde yanına geleceğim söz’’ dedim ve mezarlıktan ayrıldım. Arabada arkada çalan Çakıl Taşları eşliğinde annemin yanına gidiyordum. Annem anneannem ile yaşıyor. Şarkı bittiğinde diğer bir en sevdiğim şarkı olan Benim Adım Orman şarkısı başladı. Tam en sevdiğim yerindeyken geldiğimi fark ettim ve evin kapısını çaldım. Kapıyı annem açtı. Hemen anneme sarıldım. O da bana sarılarak ‘’Oğlum, canım oğlum hoş geldin’’ dedi. Ben de anneme ‘’Hoş buldum annem. Maalesef burada çok duramayacağım. Biliyorsun bugün Iğdır’a gideceğim. Anneannemi görüp eşyalarımı hazırlamam gerekiyor.’’ dedim. Annem bana buruk bir tebessüm ile ‘’Tamam oğlum, ben anneanneni çağırıyım.’’ dedi ve evin içine girdi. Annemi görünce ‘’Ooo. Anneanne nasılsın?’’ dedim ve ona da sarıldım. Anneannem ise ‘’Kuzum. Hoş geldin.’’ dedi. Ben de aynı şeyleri anneanneme anlattıktan sonra geri arabaya bindim ve eve doğru yol aldım. Eve geldiğimde ev arkadaşımı gördüm. O da benim gibi Milli Savunma Üniversitesi’nden mezun oldu ve benim gibi Iğdır’a ve aynı bölüğe gidecekti. Bu durumda çok şanslıydım çünkü en yakın arkadaşımdı. O da işlerini bitirmiş eşyalarını toplayacaktı. Aslında bana benziyordu ama huy olarak. Ne demişler sonuçta üzüm üzüme baka baka kararırmış. Birlikte arkada Şebnem Ferah-Çakıl Taşları çalınca en sevdiğim şarkı yine çalıyordu ben bu şarkıyı ömrüm sonuna kadar dinlerim. Arkadaşım Teoman ismiyle tam bir Şebnem Ferah bağımlısıydı. Bağıra bağıra ‘’Sen hiç, hiç oldun mu, birden vuruldun mu bulanıkmış berrakmış her suyu içtin mi?’’ şarkı sözlerini söylerken bende ona eşlik ettim. 2 saat boyunca bavulları hazırladıktan sonra otobüsün kalkmasına yarım saat civarı kalmıştı. Arabayla 10 dakikalık süreyle otogara gittik. Tam otobüsü beklerken birini gördüm. Güzelliği anlatılmayacak kadar güzeldi. Tam onun güzelliğine dalmışken Teoman ‘’Ne oldu lan Emir, aşık mı oldun yoksa?’’ diye dalga geçerken ona göz devirdim o da ‘’Tamam tamam bir şey demiyorum.’’ dedi ve otobüse bindik. Şansa o güzel kadın yan tarafımızın çaprazındaki tekli yerde oturuyordu. Çok şanslıydım çünkü düz dursam bile onu görüyordum. Ben buna sevinirken muavin biletleri kontrol ediyordu. Bizim yanımıza geldi ve bizde biletleri gösterdik. Yolculuk başladı ve tabii Teoman hemen uyku moduna girdi bende o kıza bakıyordum. Kızın telefonu çaldı ve konuşmaya başladı: “Ula sen ne diyisun ha? Ben sana kaç kere söyledum, öyle kafana göre iş yapma diye! İnsan bi haber verir, bi danışur. Şimdi oturmuş beni arayisun, olmuş bitmiş şeyi anlatayisun. He mi? Yok öyle kolay! Vallahi sabrımı taşırdun. Ben burada kendimi paralayrum, sen keyfine göre hareket edeysun. Bundan sonra ha dikkat edesun, yoksa benimle işin zor, ona göre!” dedi ve ben şok oldum. Kız galiba Karadenizliydi. Sonra alttan sinsi sinsi gülen Teoman’a bakıyordum ve kaşlarım çatıktı. Sonra benden özür diledi ve arada Karadeniz şakaları yaparak ima yapmaya çalıştı ve o böyle yapınca onu dövesim geliyordu. Sanki ortaokul 6.sınıfızda yeni sevgili olmuşuz ve o da sınıfta ima yapıyor. 18 saat yolculuğun sonunda Iğdır’a gelmiştik ve asıl macera başlıyordu.`;

  return (
    <div
      style={{
        backgroundColor: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
        padding: "40px",
      }}
    >
      {sayfa === "giris" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "56px", marginBottom: "30px" }}>
            SİTEYE HOŞ GELDİNİZ
          </h1>

          <button onClick={() => setSayfa("kitap")}>OKU</button>
        </div>
      )}

      {sayfa === "kitap" && (
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <button onClick={() => setSayfa("giris")}>Geri Dön</button>

          <div style={{
            marginTop: "20px",
            maxWidth: "320px",
            backgroundColor: "#111",
            border: "1px solid #333",
            borderRadius: "16px",
            padding: "20px"
          }}>
            <img
              src="https://via.placeholder.com/240x340?text=YENI+ASKER+KAPAK"
              alt="YENİ ASKER"
              style={{ width: "100%", borderRadius: "12px" }}
            />

            <h2>YENİ ASKER 1</h2>

            <div>
              Yeni asker olan Emir'in hayatı, askerlik ve beklenmedik
              duygular arasında değişmeye başlar.
            </div>

            <button onClick={() => setSayfa("bilgiler")}>Bilgiler</button>
            <button onClick={() => setSayfa("bolumler")}>OKU</button>
          </div>
        </div>
      )}

      {sayfa === "bilgiler" && (
        <div>
          <button onClick={() => setSayfa("kitap")}>Geri Dön</button>
          <h1>Bilgiler</h1>
          <div style={{
            backgroundColor: "#111",
            border: "1px solid #333",
            borderRadius: "14px",
            padding: "24px",
            marginTop: "20px"
          }}>
            Her 2 haftaya bir yeni bölüm geliyor...
          </div>
        </div>
      )}

      {sayfa === "bolumler" && (
        <div>
          <button onClick={() => setSayfa("kitap")}>Geri Dön</button>
          <h1>Bölümler</h1>

          <div style={{
            backgroundColor: "#111",
            border: "1px solid #333",
            borderRadius: "14px",
            padding: "24px",
            marginTop: "20px"
          }}>
            <h2>GİRİŞ</h2>
            <button onClick={() => setSayfa("okuma")}>Oku</button>
          </div>
        </div>
      )}

      {sayfa === "okuma" && (
        <div>
          <button onClick={() => setSayfa("bolumler")}>Geri Dön</button>
          <h1>GİRİŞ</h1>

          <div style={{
            whiteSpace: "pre-line",
            backgroundColor: "#111",
            border: "1px solid #333",
            borderRadius: "16px",
            padding: "30px",
            marginTop: "20px"
          }}>
            {girisMetni}

            <div style={{ marginTop: "40px" }}>
              <h3>Yorumlar</h3>

              <input
                type="text"
                placeholder="Kullanıcı adın"
                value={kullaniciAdi}
                onChange={(e) => setKullaniciAdi(e.target.value)}
              />

              <textarea
                placeholder="Yorumunu yaz..."
                value={yorumMetni}
                onChange={(e) => setYorumMetni(e.target.value)}
              />

              <button type="button" onClick={yorumGonder}>
                Yorumu Gönder
              </button>

              <div style={{ marginTop: "20px" }}>
                <h4>Okuyucu Yorumları</h4>
                {yorumlar.map((yorum, index) => (
                  <div key={index} style={{ marginBottom: "12px" }}>
                    <p>{yorum}</p>
                    <button
                      type="button"
                      onClick={() => yorumSil(index)}
                    >
                      Yorumu Sil
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

