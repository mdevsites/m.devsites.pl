import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

export default function PhotographerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${playfair.variable} font-sans`}>
            {children}
        </div>
    );
}
