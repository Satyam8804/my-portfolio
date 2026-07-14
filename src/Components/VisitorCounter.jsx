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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 text-accent-700 dark:text-accent-300 text-xs font-semibold px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg">
      🎉 You are visitor #{count}
    </div>
  );
}

export default VisitorCounter;
