import { useEffect, useState } from "react";

interface SlowLoadingHintProps {
  loading: boolean;
  className?: string;
}

// Shows a reassuring note only when a request takes a while — the backend runs
// on a free tier that can cold-start (~1 min) after a period of inactivity.
function SlowLoadingHint({ loading, className = "" }: SlowLoadingHintProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!loading) {
      setShow(false);
      return;
    }

    const timer = window.setTimeout(() => setShow(true), 3000);
    return () => window.clearTimeout(timer);
  }, [loading]);

  if (!loading || !show) {
    return null;
  }

  return (
    <div
      className={`rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3 text-sm text-cyan-300 ${className}`}
    >
      Waking up the server — the first request after a while can take up to a
      minute.
    </div>
  );
}

export default SlowLoadingHint;
