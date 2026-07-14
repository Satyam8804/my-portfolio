import { useEffect, useState } from "react";

function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("/api/visitors", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  if (count === null) return null;
  return (
    <div className="inline-flex items-center gap-2 bg-accent-50 dark:bg-accent-600/10 text-accent-700 dark:text-accent-400 text-xs font-semibold px-4 py-2 rounded-full border border-accent-200 dark:border-accent-600/25 shadow-sm">
      🎉 You are visitor #{count}
    </div>
  );
}

export default VisitorCounter;
