import OpeningBadge from "./components/OpeningBadge";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="headerInner">
          <div className="brand">
            <div className="logo" />
            <b>陽まわり農園</b>
          </div>
          <nav className="nav">
            <a href="/">ホーム</a>
            <a href="/farm-stand">直売所</a>
            <a href="/contact">お問い合わせ</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <div className="card" style={{ position: "relative" }}>
          <OpeningBadge />
          <img
            className="cardImg"
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=60"
            alt="朝採り野菜"
          />
        </div>

        <h1>6月〜9月の直売所</h1>
        <p>
          営業期間：6月〜9月<br />
          営業日：月曜日〜日曜日<br />
          営業時間：10:00〜19:00
        </p>

        <a className="button" href="/farm-stand">
          直売所の詳細を見る
        </a>

        <footer className="footer">© 陽まわり農園</footer>
      </main>
    </>
  );
}
