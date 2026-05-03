
          import { useState } from "react";

export default function YeniAskerSite() {
  const [sayfa, setSayfa] = useState("giris");

  const girisMetni = `Merhaba! Ben Emir Ulukurt. Kendimi tanıtacak 3 kelime olsa Şebnem Ferah, müzik dinlemek ve askerlik. Evet! askerlik. Çünkü ben bordo bereli asker oldum. İlk görev yerim ise Iğdır. En çok ise Hakkâri olması isterdim ama buna da şükür. Bugünün akşamı ise yola çıkacağım. Yola çıkmadan ise yapacağım bazı görevler var. Görevlerim şunlar; Annemi ziyaret etmek, bavulumu hazırlamak ve babamın mezarına gitmek. Tabii ki ilk önce rahmetli babamın mezarına gidecektim. Babam ben 9 yaşında öldürüldü. Öldürüldü diyorum çünkü bir katili var ve ben katili biliyorum: Eski komşumuz Harun Uzun. Bu adam babamı öldürmüştü ve bunu sadece ben biliyorum. Çünkü o zamanlar babamın öldürüldü zamanlar o katil hâkime rüşvet verdiği için kimse gerçeği bilmiyordu. İçimde bu acı ile büyümüştüm. Zaten şimdi babamın yanındaydım. Babama bir sözüm vardı o da asker olmak. Evet, şu an asker olmuştum ama babam yanımda yoktu. Sanki babam cevap verebilecekmiş gibi seslendim: ''Baba, ben asker oldum Iğdır’a ilk görev yerime bugün gideceğim.'' Tabii ki de ses gelmedi. Gözümden yanağıma doğru yaş geldiğini hissettim. Hemen sol elimin tersiyle sildim. ''Baba, ben gidiyorum ama her Ankara’ya geldiğimde yanına geleceğim söz'' dedim ve mezarlıktan ayrıldım. Arabada arkada çalan Çakıl Taşları eşliğinde annemin yanına gidiyordum. Annem anneannem ile yaşıyor. Şarkı bittiğinde diğer bir en sevdiğim şarkı olan Benim Adım Orman şarkısı başladı. Tam en sevdiğim yerindeyken geldiğimi fark ettim ve evin kapısını çaldım. Kapıyı annem açtı. Hemen anneme sarıldım. O da bana sarılarak ''Oğlum, canım oğlum hoş geldin'' dedi. Ben de anneme ''Hoş buldum annem. Maalesef burada çok duramayacağım. Biliyorsun bugün Iğdır’a gideceğim. Anneannemi görüp eşyalarımı hazırlamam gerekiyor.'' dedim. Annem bana buruk bir tebessüm ile ''Tamam oğlum, ben anneanneni çağırıyım.'' dedi ve evin içine girdi. Annemi görünce ''Ooo. Anneanne nasılsın?'' dedim ve ona da sarıldım. Anneannem ise ''Kuzum. Hoş geldin.'' dedi. Ben de aynı şeyleri anneanneme anlattıktan sonra geri arabaya bindim ve eve doğru yol aldım. Eve geldiğimde ev arkadaşımı gördüm. O da benim gibi Milli Savunma Üniversitesi’nden mezun oldu ve benim gibi Iğdır’a ve aynı bölüğe gidecekti. Bu durumda çok şanslıydım çünkü en yakın arkadaşımdı. O da işlerini bitirmiş eşyalarını toplayacaktı. Aslında bana benziyordu ama huy olarak. Ne demişler sonuçta üzüm üzüme baka baka kararırmış. Birlikte arkada Şebnem Ferah-Çakıl Taşları çalınca en sevdiğim şarkı yine çalıyordu ben bu şarkıyı ömrüm sonuna kadar dinlerim. Arkadaşım Teoman ismiyle tam bir Şebnem Ferah bağımlısıydı. 2 saat boyunca bavulları hazırladıktan sonra otobüsün kalkmasına yarım saat civarı kalmıştı. Arabayla 10 dakikalık süreyle otogara gittik. Tam otobüsü beklerken birini gördüm. Güzelliği anlatılmayacak kadar güzeldi. Tam onun güzelliğine dalmışken Teoman ''Ne oldu lan Emir, aşık mı oldun yoksa?'' diye dalga geçti. 18 saat yolculuğun sonunda Iğdır’a gelmiştik ve asıl macera başlıyordu.`;

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
      {/* 1. Sayfa */}
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

          <button
            onClick={() => setSayfa("kitap")}
            style={{
              padding: "14px 34px",
              fontSize: "18px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            OKU
          </button>
        </div>
      )}

      {/* 2. Sayfa */}
      {sayfa === "kitap" && (
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div
              style={{
                width: "280px",
                backgroundColor: "#111",
                border: "1px solid #333",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <img
                src="https://via.placeholder.com/240x340?text=YENI+ASKER"
                alt="YENİ ASKER"
                style={{ width: "100%", borderRadius: "12px" }}
              />

              <h2 style={{ marginTop: "20px", fontSize: "30px" }}>
                YENİ ASKER 1
              </h2>

              <div
                style={{
                  backgroundColor: "#181818",
                  padding: "16px",
                  borderRadius: "12px",
                  marginTop: "15px",
                  lineHeight: "1.7",
                }}
              >
                Yeni asker olan Emir'in hayatı, askerlik ve beklenmedik
                duygular arasında değişmeye başlar.
              </div>

              <button
                onClick={() => setSayfa("bilgiler")}
                style={{
                  marginTop: "12px",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Bilgiler
              </button>

              <button
                onClick={() => setSayfa("bolumler")}
                style={{
                  marginTop: "20px",
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                OKU
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bilgiler Sayfası */}
      {sayfa === "bilgiler" && (
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ marginBottom: "30px" }}>Bilgiler</h1>
          <div
            style={{
              backgroundColor: "#111",
              border: "1px solid #333",
              borderRadius: "16px",
              padding: "30px",
              lineHeight: "1.8",
              fontSize: "20px",
            }}
          >
            Her 2 haftaya bir yeni bölüm geliyor...
          </div>

          <button
            onClick={() => setSayfa("kitap")}
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Geri Dön
          </button>
        </div>
      )}

      {/* 3. Sayfa */}
      {sayfa === "bolumler" && (
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ marginBottom: "30px" }}>Bölümler</h1>

          <div
            style={{
              backgroundColor: "#111",
              border: "1px solid #333",
              borderRadius: "14px",
              padding: "24px",
            }}
          >
            <h2>GİRİŞ</h2>

            <button
              onClick={() => setSayfa("okuma")}
              style={{
                marginTop: "15px",
                padding: "12px 24px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Oku
            </button>
          </div>
        </div>
      )}

      {/* 4. Sayfa */}
      {sayfa === "okuma" && (
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ marginBottom: "30px" }}>GİRİŞ</h1>

          <div
            style={{
              backgroundColor: "#111",
              border: "1px solid #333",
              borderRadius: "16px",
              padding: "30px",
              lineHeight: "2",
              fontSize: "18px",
              whiteSpace: "pre-line",
            }}
          >
            {girisMetni}

            <div style={{ marginTop: "40px" }}>
              <h3>Yorumlar</h3>

              <input
                type="text"
                placeholder="Kullanıcı adın"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  fontSize: "16px",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              />

              <textarea
                placeholder="Yorumunu yaz..."
                style={{
                  width: "100%",
                  minHeight: "120px",
                  padding: "15px",
                  borderRadius: "12px",
                  fontSize: "16px",
                  marginTop: "15px",
                }}
              />

              <button
                style={{
                  marginTop: "15px",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Yorumu Gönder
              </button>

              <div style={{ marginTop: "25px" }}>
                <h4>Diğer Okuyucu Yorumları</h4>
                <p>@okuyucu1: Giriş bölümü çok sürükleyici olmuş.</p>
                <p>@kitapsever: Emir karakteri gerçekten dikkat çekiyor.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
