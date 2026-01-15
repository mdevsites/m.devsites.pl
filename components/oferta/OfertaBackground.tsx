"use client";

import dynamic from "next/dynamic";

const AuroraBackground = dynamic(() => import("@/components/ui/AuroraBackground"), {
    ssr: false,
});

export default function OfertaBackground() {
    return <AuroraBackground />;
}
