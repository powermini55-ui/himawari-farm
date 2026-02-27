const IG_USERNAME = "himawari_farm17";

export default function Contact() {
  const igUrl = `https://www.instagram.com/${IG_USERNAME}/`;

  return (
    <main className="container">
      <div className="card" style={{ padding: 18 }}>
        <h1>お問い合わせ</h1>

        <p>
          お問い合わせは Instagram のメッセージ（DM）でお願いします。
          <br />
          下のボタンから「陽まわり農園」のInstagramへ移動できます。
        </p>

        <div style={{ marginTop: 16 }}>
          <a
            className="button"
            href={igUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagramでメッセージする
          </a>
        </div>

        <p style={{ marginTop: 14, color: "var(--muted)", fontSize: 12 }}>
          ※Instagramアプリが入っている場合はアプリで開きます。
        </p>

        <div style={{ marginTop: 18 }}>
          <a href="/">← トップへ戻る</a>
        </div>
      </div>
    </main>
  );
}
