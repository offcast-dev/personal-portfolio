"use client";

import { useEffect, useState } from "react";

export function useAnchorTag() {
  const [anchorTag, setAnchorTag] = useState<string>("");

  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash.slice(1);
      setAnchorTag(hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return [anchorTag, setAnchorTag] as const;
}
