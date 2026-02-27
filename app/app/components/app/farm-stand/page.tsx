export default function FarmStand() {
  return (
    <main className="container">
      <div className="card" style={{ padding: 18 }}>
        <h1>直売所</h1>

        <p>
          営業期間：6月〜9月<br />
          営業日：月曜日〜日曜日<br />
          営業時間：10:00〜19:00
        </p>

        <h2>販売について</h2>
        <p>
          ・朝採り野菜を無人販売しています。<br />
          ・品目や数量は天候により変わります。<br />
          ・売り切れの際はご容赦ください。
        </p>

        <h2>お支払い</h2>
        <p>・現金（必要なら他の方法も追記できます）</p>

        <div style={{ marginTop: 18 }}>
          <a className="button" href="/">
            トップへ戻る
          </a>
        </div>
      </div>
    </main>
  );
}
