import { useState } from "react";

export default function YeniAskerSite() {
  const [kitapAcik, setKitapAcik] = useState(false);
  const [seciliBolum, setSeciliBolum] = useState(null);
  const [yorumAcik, setYorumAcik] = useState(false);

  const bolumler = [
    "GİRİŞ",
    "1. BÖLÜM",
    "2. BÖLÜM",
    "3. BÖLÜM",
    "4. BÖLÜM",
  ];

  const yorumlar = []; // Kullanıcı yorumları burada görünecek, hazır yorum yok

  return (
    <div
      style={{
        backgroundColor: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
        padding: "50px 30px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Hoş Geldiniz */}
        <h1 style={{ fontSize: "72px", marginBottom: "20px", textAlign: "right" }}>
          YAZAREFE
        </h1>

        <button
          style={{
            padding: "14px 28px",
            fontSize: "18px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            marginBottom: "50px",
          }}
          onClick={() => setKitapAcik(true)}
        >
          Kitap Okumaya Başla
        </button>

        {/* Kitaplarım */}
        {kitapAcik && (
        <>
        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          Kitaplarım
        </h2>

        <div
          style={{
            backgroundColor: "#111",
            border: "1px solid #333",
            borderRadius: "16px",
            padding: "30px",
          }}
        >
          <img
            src="https://via.placeholder.com/300x420?text=YENI+ASKER+KAPAK"
            alt="YENİ ASKER 1"
            style={{ width: "220px", borderRadius: "16px", marginBottom: "20px" }}
          />

          <h3 style={{ fontSize: "32px", marginBottom: "20px" }}>
            YENİ ASKER 1
          </h3>

          <button
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              marginBottom: "25px",
            }}
            onClick={() => setKitapAcik(!kitapAcik)}
          >
            Oku
          </button>

          {kitapAcik && (
            <div>
              {bolumler.map((bolum, index) => (
                <p
                  key={index}
                  onClick={() => setSeciliBolum(bolum)}
                  style={{
                    fontSize: "20px",
                    marginBottom: "14px",
                    cursor: "pointer",
                  }}
                >
                  {bolum}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Bölüm İçeriği */}
                </>
        )}

        {seciliBolum && (
          <div
            style={{
              marginTop: "50px",
              backgroundColor: "#111",
              border: "1px solid #333",
              borderRadius: "16px",
              padding: "30px",
            }}
          >
            <h2 style={{ fontSize: "34px" }}>{seciliBolum}</h2>

            <p style={{ fontSize: "19px", lineHeight: "1.9" }}>
              Merhaba! Ben Emir Ulukurt. Kendimi üç kelimeyle tanıtacak
              olsam; Şebnem Ferah, müzik dinlemek ve askerlik derdim.
              Hayat bazen insanı hiç beklemediği savaşların içine sürükler.
            </p>

            {/* Yorum Alanı */}
            <div style={{ marginTop: "30px" }}>
              <button
                onClick={() => setYorumAcik(!yorumAcik)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                💬 Yorum Yap
              </button>

              {yorumAcik && (
                <div style={{ marginTop: "20px" }}>
                  <button
                    style={{
                      padding: "10px 18px",
                      borderRadius: "10px",
                      border: "none",
                      cursor: "pointer",
                      marginBottom: "15px",
                    }}
                  >
                    Yorumu Gönder
                  </button>

                  <textarea
                    placeholder="Yorum yaz..."
                    style={{
                      width: "100%",
                      minHeight: "100px",
                      borderRadius: "12px",
                      padding: "15px",
                      fontSize: "16px",
                    }}
                  />

                  <div style={{ marginTop: "20px" }}>
                    <h4>Diğer Yorumlar</h4>
                    {yorumlar.map((yorum, index) => (
                      <p key={index} style={{ marginBottom: "10px" }}>
                        • {yorum}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
