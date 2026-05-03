import { useState } from "react";

export default function YeniAskerSite() {
  const [sayfa, setSayfa] = useState("giris");

  const girisMetni = `Merhaba! Ben Emir Ulukurt.
Kendimi üç kelimeyle tanıtacak olsam;
Şebnem Ferah, müzik dinlemek ve askerlik derdim.
Hayat bazen insanı hiç beklemediği savaşların içine sürükler.
Ve bazı savaşlar, kalpte başlar.`;

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
          </div>
        </div>
      )}
    </div>
  );
}
