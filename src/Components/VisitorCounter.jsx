import { useEffect, useState } from 'react';

function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('/api/visitors', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  if (count === null) return null;
  return <div className="visitor-badge">🎉 You are visitor #{count}</div>;
}

export default VisitorCounter;