import React, { useEffect } from "react";
import copy from "copy-to-clipboard";

type useCopyToClipboardResult = [isCopied: boolean, handleCopy: (text: number | string) => void];

export default function useCopyToClipboard(resetInterval: number): useCopyToClipboardResult {
  const [isCopied, setCopied] = React.useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  // benefit of useCallback: if input (text) is not changed, the cached result will be return
  // instead of re-calculation
  // const handleCopy = React.useCallback((text: number | string) => {
  //   copy(text.toString());
  //   setCopied(true);
  // }, []);

  const handleCopy = React.useCallback((text: string) => {
    copy(text.toString());
    setCopied(true);
  },[]);

  return [isCopied, handleCopy];
}
