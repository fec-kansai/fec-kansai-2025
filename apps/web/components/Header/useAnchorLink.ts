"use client";

import { useEffect, useState } from "react";

export function useAnchorLink() {
  const [anchor, setAnchor] = useState<string>("");

  useEffect(() => {
    const updateAnchor = () => {
      setAnchor(window.location.hash || "/");
    };

    // 初回設定
    updateAnchor();

    // イベントで監視
    window.addEventListener("hashchange", updateAnchor);

    return () => {
      window.removeEventListener("hashchange", updateAnchor);
    };
  }, []);

  return anchor;
}
