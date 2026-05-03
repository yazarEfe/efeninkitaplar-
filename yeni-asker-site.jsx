export default function YeniAskerSite() {
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
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
            YENİ ASKER 1
          </h2>

          <p style={{ fontSize: "20px", marginBottom: "20px" }}>
            Bölüm 1 — Giriş
          </p>

          <p
            style={{
              lineHeight: "1.9",
              fontSize: "18px",
              color: "#d0d0d0",
              maxWidth: "800px",
            }}
          >
            Merhaba! Ben Emir Ulukurt.
            Kendimi üç kelimeyle tanıtacak olsam;
            Şebnem Ferah, müzik dinlemek ve askerlik derdim.
            Hayat bazen insanı hiç beklemediği savaşların içine sürükler.
            Ve bazı savaşlar, kalpte başlar.
          </p>
        </div>
      </div>
    </div>
  );
}
