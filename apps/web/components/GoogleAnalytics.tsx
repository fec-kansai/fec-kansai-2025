"use client";

import { GTAG_ID } from "@/lib/gtag";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GTAG_ID) return;

    const url = `${pathname}${searchParams.toString()}`;
    window.gtag("config", GTAG_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTAG_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
