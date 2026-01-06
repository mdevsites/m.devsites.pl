import { Metadata } from 'next';
import PricingContent from '@/components/pricing/PricingContent';

export const metadata: Metadata = {
    title: "Cennik Stron Internetowych | Pakiety i Koszty | M.DEV",
    description: "Sprawdź ceny stron internetowych. Przejrzyste pakiety: Start, Biznes, Pro. Profesjonalne strony www od 1399 PLN. Bez ukrytych kosztów.",
};

export default function PricingPage() {
    return <PricingContent />;
}
