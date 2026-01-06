import { Metadata } from 'next';
import ContactContent from '@/components/contact/ContactContent';

export const metadata: Metadata = {
    title: "Kontakt | Zamów Stronę Internetową | M.DEV",
    description: "Skontaktuj się w sprawie nowej strony www. Bezpłatna wycena i konsultacja. Formularz kontaktowy, telefon i email.",
};

export default function ContactPage() {
    return <ContactContent />;
}
