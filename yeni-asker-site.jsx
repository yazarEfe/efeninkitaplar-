import { useState } from "react";

export default function YeniAskerSite() {
  const [sayfa, setSayfa] = useState("giris");
  const [kullaniciAdi, setKullaniciAdi] = useState("");
  const [yorumMetni, setYorumMetni] = useState("");
  const [yorumlar, setYorumlar] = useState([]);

  const yorumGonder = () => {
    if (!kullaniciAdi.trim() || !yorumMetni.trim()) return;

    setYorumlar([
      ...yorumlar,
      `@${kullaniciAdi}: ${yorumMetni}`,
    ]);

    setKullaniciAdi("");
    setYorumMetni("");
  };

  const yorumSil = (indexSil) => {
    setYorumlar(yorumlar.filter((_, index) => index !== indexSil));
  };

  const girisMetni = `Merhaba! Ben Emir Ulukurt. Kendimi tanıtacak 3 kelime olsa Şebnem Ferah, müzik dinlemek ve askerlik. Evet! askerlik. Çünkü ben bordo bereli asker oldum. İlk görev yerim ise Iğdır. En çok ise Hakkâri olması isterdim ama buna da şükür. Bugünün akşamı ise yola çıkacağım.`;

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

          <button
            onClick={() => setSayfa("kitap")}
            style={{
              padding: "12px 24px",
              borderRadius: "12px",
              border: "1px solid #333",
              backgroundColor: "#181818",
              color: "white",
              cursor: "pointer",
            }}
          >
            OKU
          </button>
        </div>
      )}

      {sayfa === "kitap" && (
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <button
            onClick={() => setSayfa("giris")}
            style={{
              padding: "12px 24px",
              borderRadius: "12px",
              border: "1px solid #333",
              backgroundColor: "#181818",
              color: "white",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Geri Dön
          </button>

          <div
            style={{
              maxWidth: "340px",
              backgroundColor: "#111",
              border: "1px solid #333",
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <img
              src="https://via.placeholder.com/240x340?text=YENI+ASKER+KAPAK"
              alt="YENİ ASKER"
              style={{ width: "100%", borderRadius: "12px" }}
            />

            <h2>YENİ ASKER 1</h2>

            <div
              style={{
                backgroundColor: "#181818",
                border: "1px solid #333",
                borderRadius: "14px",
                padding: "18px",
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
                padding: "12px 24px",
                borderRadius: "12px",
                border: "1px solid #333",
                backgroundColor: "#181818",
                color: "white",
                cursor: "pointer",
                marginTop: "15px",
                marginRight: "10px",
              }}
            >
              Bilgiler
            </button>

            <button
              onClick={() => setSayfa("bolumler")}
              style={{
                padding: "12px 24px",
                borderRadius: "12px",
                border: "1px solid #333",
                backgroundColor: "#181818",
                color: "white",
                cursor: "pointer",
                marginTop: "15px",
              }}
            >
              OKU
            </button>
          </div>
        </div>
      )}

      {sayfa === "bilgiler" && (
        <div
          style={{
            backgroundColor: "#111",
            border: "1px solid #333",
            borderRadius: "16px",
            padding: "30px",
          }}
        >
          <button onClick={() => setSayfa("kitap")}>Geri Dön</button>
          <h1>Bilgiler</h1>
          <div>Her 2 haftaya bir yeni bölüm geliyor...</div>
        </div>
      )}

      {sayfa === "bolumler" && (
        <div
          style={{
            backgroundColor: "#111",
            border: "1px solid #333",
            borderRadius: "16px",
            padding: "30px",
          }}
        >
          <button onClick={() => setSayfa("kitap")}>Geri Dön</button>
          <h1>Bölümler</h1>
          <h2>GİRİŞ</h2>
          <button onClick={() => setSayfa("okuma")}>Oku</button>
        </div>
      )}

      {sayfa === "okuma" && (
        <div
          style={{
            backgroundColor: "#111",
            border: "1px solid #333",
            borderRadius: "16px",
            padding: "30px",
            whiteSpace: "pre-line",
          }}
        >
          <button onClick={() => setSayfa("bolumler")}>Geri Dön</button>
          <h1>GİRİŞ</h1>
          <p>{girisMetni}</p>

          <h3>Yorumlar</h3>

          <input
            type="text"
            placeholder="Kullanıcı adın"
            value={kullaniciAdi}
            onChange={(e) => setKullaniciAdi(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid #333",
              backgroundColor: "#181818",
              color: "white",
              marginTop: "15px",
            }}
          />

          <textarea
            placeholder="Yorumunu yaz..."
            value={yorumMetni}
            onChange={(e) => setYorumMetni(e.target.value)}
            style={{
              width: "100%",
              minHeight: "120px",
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid #333",
              backgroundColor: "#181818",
              color: "white",
              marginTop: "15px",
            }}
          />

          <button
            type="button"
            onClick={yorumGonder}
            style={{
              padding: "12px 24px",
              borderRadius: "12px",
              border: "1px solid #333",
              backgroundColor: "#181818",
              color: "white",
              cursor: "pointer",
              marginTop: "15px",
            }}
          >
            Yorumu Gönder
          </button>

          <div style={{ marginTop: "20px" }}>
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
      )}
    </div>
  );
}
