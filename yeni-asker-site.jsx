import { useState } from "react";

export default function YeniAskerSite() {
  const [acikMi, setAcikMi] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
        padding: "60px 40px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            color: "#c9a96e",
            letterSpacing: "4px",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          ROMAN SERİSİ
        </p>

        <h1
          style={{
            fontSize: "72px",
            margin: 0,
            fontWeight: "bold",
          }}
        >
          YENİ ASKER
        </h1>

        <p
          style={{
            fontSize: "24px",
            marginTop: "20px",
            color: "#d6d6d6",
          }}
        >
          Yeni asker olan Emir'in macerası...
        </p>

        <div
          style={{
            marginTop: "60px",
            padding: "30px",
            border: "1px solid #333",
            borderRadius: "16px",
            backgroundColor: "#111",
          }}
        >
          <div
            onClick={() => setAcikMi(!acikMi)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <h2 style={{ fontSize: "36px", margin: 0 }}>
              YENİ ASKER 1
            </h2>

            <span style={{ fontSize: "28px" }}>
              {acikMi ? "▲" : "▼"}
            </span>
          </div>

          {acikMi && (
            <div style={{ marginTop: "30px" }}>
              <p style={{ fontSize: "20px", marginBottom: "15px" }}>
                GİRİŞ
              </p>

              <p style={{ fontSize: "20px", marginBottom: "15px" }}>
                1. BÖLÜM
              </p>

              <p style={{ fontSize: "20px", marginBottom: "15px" }}>
                2. BÖLÜM
              </p>

              <p style={{ fontSize: "20px", marginBottom: "15px" }}>
                3. BÖLÜM
              </p>

              <p style={{ fontSize: "20px", marginBottom: "15px" }}>
                4. BÖLÜM
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
