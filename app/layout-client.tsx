"use client";

import { Logo } from "@/components/ui/Logo";

import { useSearchParams, usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyButtons from "@/components/layout/StickyButtons";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const hideNav = searchParams.get("hideNav") === "true";
    const isDemo = pathname?.startsWith("/demos");

    return (
        <>
            {!hideNav && !isDemo && (
                <div className="fixed top-8 left-8 z-[60]">
                    <Logo />
                </div>
            )}
            {!hideNav && !isDemo && <Navbar />}
            <main>{children}</main>
            {!hideNav && !isDemo && <Footer />}
            {!hideNav && !isDemo && <StickyButtons />}
        </>
    );
}
