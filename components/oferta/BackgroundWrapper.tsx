'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const AuroraBackground = dynamic(() => import('@/components/ui/AuroraBackground'), {
    ssr: false,
});

export default function BackgroundWrapper() {
    return <AuroraBackground />;
}
