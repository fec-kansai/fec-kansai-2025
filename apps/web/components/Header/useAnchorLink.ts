"use client";

import { useEffect, useState } from "react";

export function useAnchorLink() {
  const [anchor, setAnchor] = useState<string>("");

  useEffect(() => {
    const checkHash = () => {
      const currentHash = window.location.hash;
      setAnchor(currentHash || "/");
    };

    const interval = setInterval(checkHash, 100);

    return () => clearInterval(interval);
  }, []);

  return anchor;
}
