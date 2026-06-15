"use client";

import { usePathname } from "next/navigation";
import Preloader from "@/layouts/Preloader";

export default function RoutePreloader() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return <Preloader />;
}
