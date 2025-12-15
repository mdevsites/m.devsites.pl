"use client";

import { ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';

export default function DemosLayout({ children }: { children: ReactNode }) {
    const searchParams = useSearchParams();
    const hideNav = searchParams.get('hideNav') === 'true';

    return <div className={hideNav ? "" : "mt-20"}>{children}</div>;
}
