"use client";

import { useEffect } from "react";

// The old HashRouter site served the policy at /#/privacy, and external links (e.g. store listings) may still point there.
const LegacyHashRedirect = () => {
  useEffect(() => {
    if (window.location.hash.startsWith("#/privacy")) {
      window.location.replace("/privacy/");
    }
  }, []);

  return null;
};

export default LegacyHashRedirect;
