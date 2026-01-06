import { Metadata } from 'next';
import PortfolioContent from '@/components/portfolio/PortfolioContent';

export const metadata: Metadata = {
    title: "Portfolio Stron WWW | Wybrane Realizacje | M.DEV",
    description: "Zobacz moje portfolio stron internetowych. Nowoczesne projekty, unikalny design i skuteczne wdrożenia dla klientów z różnych branż.",
};

export default function PortfolioPage() {
    return <PortfolioContent />;
}
