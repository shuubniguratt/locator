"use client";

import type { LightboxExternalProps } from "yet-another-react-lightbox";
import * as React from "react";
import dynamic from "next/dynamic";

const Lightbox = dynamic(() => import("~/components/lightbox"));

export default function useLightbox() {
  const [open, setOpen] = React.useState(false);
  const [interactive, setInteractive] = React.useState(false);

  const openLightbox = React.useCallback(() => {
    setOpen(true);
    setInteractive(true);
  }, []);

  const renderLightbox = React.useCallback(
    (props?: Omit<LightboxExternalProps, "open" | "close">) =>
      interactive ? (
        <Lightbox open={open} close={() => setOpen(false)} {...props} />
      ) : null,
    [open, interactive],
  );

  return { openLightbox, renderLightbox };
}
