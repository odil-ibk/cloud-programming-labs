const parseLine = (line) => {
  const m = String(line).match(/^(\w+):\s*(.*)$/);
  return m ? { level: m[1], msg: m[2] } : null;
};

const extractUserId = (msg) => {
  const m = String(msg).match(/\buser=(\d+)\b/);
  return m ? Number(m[1]) : null;
};

const infoUserIds = pipe(
  (lines) => lines.map(parseLine).filter(Boolean),
  (items) => items.filter((it) => it.level === "INFO"),
  (items) =>
    items.map((it) => extractUserId(it.msg)).filter((id) => id !== null),
);
