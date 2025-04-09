"use client";
import { useState } from "react";
import debounce from "@/lib/utils/debounce";

export default function useSearchPreviewInput() {
  const [isFocus, setIsFocus] = useState(false);

  const debouncedBlur = debounce(() => {
    setIsFocus(false);
  }, 100);

  return {
    onFocus: () => {
      setIsFocus(true);
    },
    onBlur: debouncedBlur,
    isFocus,
  };
}
