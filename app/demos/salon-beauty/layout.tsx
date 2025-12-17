import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Elegance Salon - Nowoczesne Studio Urody | Demo',
    description: 'Odkryj demo strony dla salonu piękności. Luksusowy design, sekcja usług, opinie klientów i formularz umawiania wizyt. Stwórz taką stronę dla swojego biznesu.',
};

export default function SalonBeautyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
