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

  const girisMetni = `Merhaba! Ben Emir Ulukurt. Kendimi tanıtacak 3 kelime olsa Şebnem Ferah, müzik dinlemek ve askerlik. Evet! askerlik. Çünkü ben bordo bereli asker oldum. İlk görev yerim ise Iğdır. En çok ise Hakkâri olması isterdim ama buna da şükür.`;

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
