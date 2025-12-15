import { ReactNode } from 'react';

export default function DemosLayout({ children }: { children: ReactNode }) {
    return <div className="mt-20">{children}</div>;
}
