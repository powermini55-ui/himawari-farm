"use client";

import { useEffect, useMemo, useState } from "react";

type Hours = {
  openTime: string; // "10:00"
  closeTime: string; // "19:00"
  seasonStartMonth: number; // 6
  seasonEndMonth: number; // 9
};

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function isInSeason(month1to12: number, start: number, end: number) {
  // 6〜9 のような同一年内
  if (start <= end) return month1to12 >= start && month1to12 <= end;
  // 例: 11〜3 のような年またぎ
  return month1to12 >= start || month1to12 <= end;
}

export default function OpeningBadge({
  hours = {
    openTime: "10:00",
    closeTime: "19:00",
    seasonStartMonth: 6,
    seasonEndMonth: 9,
  },
}: {
  hours?: Hours;
}) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const status = useMemo(() => {
    if (!now) return { label: "確認中", sub: "" };

    const month = now.getMonth() + 1;
    const inSeason = isInSeason(month, hours.seasonStartMonth, hours.seasonEndMonth);

    if (!inSeason) {
      return { label: "営業期間外", sub: `${hours.seasonStartMonth}月〜${hours.seasonEndMonth}月` };
    }

    const cur = now.getHours() * 60 + now.getMinutes();
    const open = toMinutes(hours.openTime);
    const close = toMinutes(hours.closeTime);

    if (cur >= open && cur < close) {
      return { label: "現在開店中", sub: `${hours.openTime}〜${hours.closeTime}` };
    }

    return { label: "現在閉店中", sub: `${hours.openTime}〜${hours.closeTime}` };
  }, [now, hours]);

  return (
    <div className="badge" aria-label={status.label}>
      {status.label}
      {status.sub ? (
        <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>
          <small>{status.sub}</small>
        </div>
      ) : null}
    </div>
  );
}
