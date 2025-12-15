# Szczegółowe Specyfikacje Projektów Portfolio

## Organizacja Projektu

### Struktura folderów
```
portfolio-site/
└── app/
    └── demos/                  # Folder z projektami demo
        ├── mechanik/           # Projekt 1 - PAKIET START
        │   └── page.tsx        # Single page
        ├── fotograf/           # Projekt 2 - PAKIET START
        │   └── page.tsx        # Single page
        ├── salon-beauty/       # Projekt 3 - PAKIET BIZNES
        │   ├── page.tsx        # Home
        │   ├── uslugi/page.tsx
        │   ├── galeria/page.tsx
        │   └── kontakt/page.tsx
        └── restauracja/        # Projekt 4 - PAKIET PRO
            ├── page.tsx        # Home
            ├── menu/page.tsx
            ├── galeria/page.tsx
            ├── o-nas/page.tsx
            └── kontakt/page.tsx
```

### Workflow budowy
Każdy projekt będzie budowany jako route w głównej aplikacji:
1. Utworzenie folderu w `/app/demos/[projekt]/`
2. Implementacja wszystkich stron/sekcji
3. Zrobienie screenshotów
4. Integracja z główną stroną portfolio (linki + constants.ts)

---

# PROJEKT 1: Warsztat Mechaniczny 🔧

## Pakiet: START (1,199 PLN)

### Ograniczenia pakietu
- ✅ 1 strona (scroll)
- ✅ Maksymalnie 4 sekcje
- ✅ Responsywny design
- ✅ Formularz kontaktowy
- ❌ BRAK animacji
- ❌ BRAK zaawansowanego SEO

---

## Design & Kolorystyka

**Styl:** Profesjonalny, praktyczny, buduje zaufanie  
**Paleta kolorów:**
- Primary: `#1E40AF` (niebieski - zaufanie, profesjonalizm)
- Secondary: `#6B7280` (szary - praktyczność)
- Accent: `#F59E0B` (pomarańczowy - energia, uwaga)
- Background: `#FFFFFF` (jasne tło)
- Text: `#111827` (ciemny tekst)

**Typografia:**
- Headings: `Inter` lub `Roboto` - Bold/Semibold
- Body: `Inter` lub `Roboto` - Regular
- Rozmiary: H1: 48px, H2: 36px, H3: 24px, Body: 16px

---

## Sekcje (4 max)

### SEKCJA 1: Hero
**Layout:** Full-width z zdjęciem warsztatu w tle (overlay z ciemnym gradientem)

**Zawartość:**
- Nagłówek: "Profesjonalny Serwis Samochodowy"
- Podtytuł: "Doświadczenie, jakość i rzetelność od 1995 roku"
- CTA Button: "Umów wizytę" (link do formularza - smooth scroll)
- Zaufanie: Krótkie ikony/badge: "20+ lat doświadczenia", "Certyfikowany serwis", "Gwarancja na usługi"

**Wymiary:** 100vh (pełna wysokość ekranu)

**Zdjęcie/Asset:** Warsztat samochodowy (wygenerowane lub stock photo)

---

### SEKCJA 2: Usługi
**Layout:** Grid 3 kolumny (desktop), 1 kolumna (mobile)

**Zawartość:** 6 głównych usług z ikonami i krótkimi opisami

1. **Diagnostyka komputerowa**
   - Ikona: laptop/diagnostic
   - Opis: "Kompleksowa diagnostyka elektroniki"

2. **Wymiana opon i wulkanizacja**
   - Ikona: tire/wheel
   - Opis: "Sezonowa wymiana i naprawa opon"

3. **Serwis olejowy**
   - Ikona: oil-can
   - Opis: "Wymiana oleju i filtrów"

4. **Naprawy mechaniczne**
   - Ikona: wrench/tools
   - Opis: "Naprawa silnika, skrzyni biegów, zawieszenia"

5. **Klimatyzacja**
   - Ikona: snowflake
   - Opis: "Serwis i naprawa klimatyzacji"

6. **Przeglądy okresowe**
   - Ikona: clipboard-check
   - Opis: "Przeglądy techniczne i rejestracyjne"

**Design kart usług:**
- Białe karty z subtelnym cieniem
- Ikona na górze (niebieski akcent)
- Tytuł (bold)
- Krótki opis (1 linia)
- Hover: lekki shadow + scale (UWAGA: bez animacji - tylko CSS :hover)

**Padding:** Section padding: 80px top/bottom

---

### SEKCJA 3: O warsztacie
**Layout:** Split layout - 50% tekst, 50% zdjęcie (desktop), stack (mobile)

**Zawartość tekst:**
- Nagłówek: "Twój zaufany partner w dbałości o auto"
- Paragraf 1: "Nasz warsztat działa nieprzerwanie od 1995 roku. Przez te lata obsłużyliśmy tysiące zadowolonych klientów, zarabiając na ich zaufanie dzięki rzetelności i profesjonalizmowi."
- Paragraf 2: "Dysponujemy nowoczesnym sprzętem diagnostycznym oraz doświadczonym zespołem mechaników. Każde auto traktujemy z należytą starannością."
- Lista zalet:
  - ✓ Certyfikowani mechanicy
  - ✓ Oryginalne części zamienne
  - ✓ Konkurencyjne ceny
  - ✓ Gwarancja na usługi

**Zawartość zdjęcie:**
- Zdjęcie zespołu lub wnętrza warsztatu
- Alt text: "Zespół warsztatu mechanicznego"

**Padding:** Section padding: 80px top/bottom

---

### SEKCJA 4: Kontakt + Formularz
**Layout:** Split - 40% info kontaktowe, 60% formularz (desktop), stack (mobile)

**Info kontaktowe:**
- Nagłówek: "Skontaktuj się z nami"
- Adres: "ul. Mechaniczna 15, 00-001 Warszawa"
- Telefon: "+48 123 456 789"
- Email: "kontakt@warsztat-auto.pl"
- Godziny otwarcia:
  - Pn-Pt: 8:00 - 18:00
  - Sobota: 9:00 - 14:00
  - Niedziela: Nieczynne

**Formularz:**
Pola:
1. Imię i nazwisko (required)
2. Email (required, type="email")
3. Telefon (required, type="tel")
4. Marka i model auta (optional)
5. Wiadomość (textarea, required)
6. Przycisk: "Wyślij zapytanie" (niebieski, pełna szerokość)

**Walidacja:** HTML5 validation (required, type)

**Funkcjonalność:** Email wysyłka przez Next.js API route (podobnie jak w portfolio-site)

**Stopka:**
- Prosta stopka: Copyright © 2024 Warsztat Auto. Wszystkie prawa zastrzeżone.
- Background: ciemny szary (#1F2937)
- Tekst: jasny szary

**Padding:** Section padding: 80px top/bottom

---

## Responsywność

**Breakpoints:**
- Mobile: < 768px (1 kolumna, stackowane sekcje)
- Tablet: 768px - 1024px (2 kolumny dla usług)
- Desktop: > 1024px (3 kolumny dla usług, split layouts)

**Mobile adjustments:**
- Hero: 60vh zamiast 100vh
- Headings: zmniejszone o 30% (H1: 32px)
- Padding sekcji: 40px zamiast 80px
- Grid usług: 1 kolumna
- Split layouts: stack vertical

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Google Fonts - Inter
- **Images:** Next/Image component
- **Form:** React Hook Form (optional) lub native HTML5

**Bez:**
- ❌ Framer Motion (brak animacji w pakiecie START)
- ❌ Complex state management
- ❌ SEO zaawansowane (tylko `<title>` i basic meta)

---

## Screenshoty do zrobienia

1. Full page screenshot (desktop)
2. Hero section (desktop)
3. Usługi section (desktop)
4. Mobile view (pełna strona)
5. Formularz kontaktowy (desktop)

---

---

# PROJEKT 2: Portfolio Fotografa 📸

## Pakiet: START (1,199 PLN)

### Ograniczenia pakietu
- ✅ 1 strona (scroll)
- ✅ Maksymalnie 4 sekcje
- ✅ Responsywny design
- ✅ Formularz kontaktowy
- ❌ BRAK animacji
- ❌ BRAK lightbox (simple grid)

---

## Design & Kolorystyka

**Styl:** Minimalistyczny, czysty, focus na zdjęcia  
**Paleta kolorów:**
- Primary: `#000000` (czarny - elegancja, minimalizm)
- Secondary: `#FFFFFF` (białe tło - czystość)
- Accent: `#F5F5F5` (jasny szary - subtelne kontrast)
- Text: `#111827` na białym, `#FFFFFF` na czarnym
- Hover accent: `#3B82F6` (niebieski)

**Typografia:**
- Headings: `Playfair Display` lub `Lora` - klasyczna, elegancka
- Body: `Inter` - czytelna, nowoczesna
- Rozmiary: H1: 56px, H2: 40px, H3: 28px, Body: 18px

---

## Sekcje (4 max)

### SEKCJA 1: Hero
**Layout:** Full-screen zdjęcie w tle z centered text overlay

**Zawartość:**
- Nagłówek: "Anna Kowalska"
- Podtytuł: "Fotografia Portretowa & Ślubna"
- CTA Button: "Zobacz portfolio" (smooth scroll do galerii)
- Minimalistyczny design - dużo białej przestrzeni

**Wymiary:** 100vh

**Zdjęcie/Asset:** Portret fotografa lub artystyczne zdjęcie (wygenerowane)
- Overlay: subtelny gradient lub lekkie przyciemnienie

**Text positioning:** Centered (vertical & horizontal)

---

### SEKCJA 2: Galeria Zdjęć
**Layout:** Masonry grid / Pinterest-style layout (3 kolumny desktop, 2 tablet, 1 mobile)

**Zawartość:** 12 zdjęć przedstawiających różne style fotografii

**Kategorie zdjęć** (mix):
- Portrety (4 zdjęcia)
- Śluby (4 zdjęcia)
- Natura/lifestyle (4 zdjęcia)

**Design:**
- Proste zdjęcia w grid bez ramek
- Gap między: 16px
- Hover: lekkie przyciemnienie + opacity (CSS :hover, bez animacji)
- **BRAK LIGHTBOX** (zgodnie z pakietem START - proste wyświetlanie)

**Image optimization:** Next/Image z lazy loading

**Padding:** Section padding: 60px top/bottom

---

### SEKCJA 3: O mnie
**Layout:** Centered text column (max-width: 700px)

**Zawartość:**
- Nagłówek: "Cześć, jestem Anna"
- Bio (2-3 paragrafy):
  - Paragraf 1: "Fotografią zajmuję się od ponad 10 lat. To, co kocham najbardziej, to uchwycenie prawdziwych emocji i autentycznych momentów."
  - Paragraf 2: "Specjalizuję się w fotografii portretowej i ślubnej. Każda sesja to dla mnie wyjątkowa historia do opowiedzenia."
  - Paragraf 3: "Pracuję na profesjonalnym sprzęcie Canon i wykorzystuję naturalne światło, aby stworzyć ponadczasowe, piękne zdjęcia."

**Design:**
- Center aligned text
- Duże line-height dla czytelności (1.8)
- Subtelne separatory między paragrafami

**Optional:** Małe zdjęcie portretu (okrągłe, 150px) nad tekstem

**Padding:** Section padding: 100px top/bottom

---

### SEKCJA 4: Kontakt + Formularz
**Layout:** Centered form (max-width: 600px)

**Zawartość powyżej formularza:**
- Nagłówek: "Zarezerwuj sesję"
- Podtytuł: "Skontaktuj się ze mną, aby omówić szczegóły Twojej sesji zdjęciowej"

**Formularz:**
Pola:
1. Imię i nazwisko (required)
2. Email (required, type="email")
3. Telefon (optional, type="tel")
4. Typ sesji (select: Portret, Ślub, Rodzinna, Inna)
5. Wiadomość (textarea, required) - "Opowiedz mi o swojej wizji"
6. Przycisk: "Wyślij zapytanie" (czarny przycisk, biały tekst)

**Info kontaktowe poniżej formularza:**
- Email: anna@fotografia.pl
- Instagram: @anna.kowalska.photo
- Tel: +48 600 700 800

**Stopka:**
- Minimalistyczna stopka
- Copyright © 2024 Anna Kowalska Photography
- Background: czarny (#000000)
- Tekst: biały

**Padding:** Section padding: 100px top/bottom

---

## Responsywność

**Breakpoints:**
- Mobile: < 768px (1 kolumna galerii, zmniejszone headingi)
- Tablet: 768px - 1024px (2 kolumny galerii)
- Desktop: > 1024px (3 kolumny galerii)

**Mobile adjustments:**
- Hero: 70vh
- Headings: H1: 36px, H2: 28px
- Padding: 40px zamiast 60-100px
- Galeria: 1 kolumna, gap: 12px

---

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React (minimal usage)
- **Fonts:** Google Fonts - Playfair Display + Inter
- **Images:** Next/Image + wygenerowane AI images
- **Gallery:** CSS Grid + Masonry (bez bibliotek)

**Bez:**
- ❌ Framer Motion
- ❌ Lightbox library
- ❌ Complex galleries

---

## Screenshoty do zrobienia

1. Full page screenshot
2. Hero section
3. Galeria (pokazująca grid)
4. Mobile view
5. Sekcja "O mnie"

---

---

# PROJEKT 3: Salon Beauty 💅

## Pakiet: BIZNES (2,299 PLN)

### Funkcje pakietu
- ✅ Do 4 podstron
- ✅ Indywidualny layout
- ✅ Lekkie animacje (fade-in, slide)
- ✅ SEO on-page
- ✅ Google Analytics mockup

---

## Design & Kolorystyka

**Styl:** Elegancki, kobiecy, premium, soft  
**Paleta kolorów:**
- Primary: `#E91E63` (różowy - kobiecość, energia)
- Secondary: `#F8BBD0` (jasny różowy - delikatność)
- Accent: `#FFD700` (złoty - luksus)
- Background: `#FAFAFA` (bardzo jasny szary)
- Text: `#212121` (ciemny)
- Cards: `#FFFFFF` (białe karty)

**Typografia:**
- Headings: `Montserrat` - Bold/Semibold (nowoczesna, elegancka)
- Body: `Open Sans` - Regular
- Rozmiary: H1: 48px, H2: 36px, H3: 24px, Body: 16px

**Animacje (lekkie):**
- Fade in on scroll (opacity 0 → 1)
- Slide up (translateY)
- Timing: 0.6s ease-out
- Używamy: Framer Motion z `whileInView`

---

## Struktura Podstron (4)

### 1. HOME - Strona główna
### 2. USŁUGI - Lista usług z cenami
### 3. GALERIA - Przed/po + prace
### 4. KONTAKT - Formularz + dane

---

## PODSTRONA 1: HOME

### Header/Navbar (na wszystkich stronach)
**Layout:** Fixed top, transparent na hero, solid white po scroll

**Zawartość:**
- Logo: "Beauty Salon" (elegancka czcionka)
- Menu: Home | Usługi | Galeria | Kontakt
- CTA Button: "Umów wizytę" (różowy)

**Mobile:** Hamburger menu

---

### Sekcja 1: Hero
**Layout:** Full-width background image z overlay

**Zawartość:**
- Nagłówek: "Piękno, które podkreśla Twoją wyjątkowość"
- Podtytuł: "Profesjonalne usługi beauty w sercu miasta"
- CTA Buttons:
  - Primary: "Nasze usługi" (link do /uslugi)
  - Secondary: "Umów wizytę" (link do /kontakt)

**Wymiary:** 80vh

**Image:** Salon beauty interior lub model (wygenerowane)

**Animation:** Hero content fade-in + slide up (0.8s delay)

---

### Sekcja 2: Featured Services (3 główne usługi)
**Layout:** 3 kolumny grid (desktop), stack (mobile)

**Zawartość:**
1. **Stylizacja paznokci**
   - Ikona: hand/sparkles
   - Krótki opis: "Manicure, pedicure, hybryda"
   - Link: "Zobacz więcej →" (link do /uslugi#paznokcie)

2. **Zabiegi na twarz**
   - Ikona: face/spa
   - Opis: "Pielęgnacja, oczyszczanie, masaże"
   - Link: "Zobacz więcej →"

3. **Makijaż**
   - Ikona: makeup/brush
   - Opis: "Makijaż dzienny, wieczorowy, ślubny"
   - Link: "Zobacz więcej →"

**Design kart:**
- Białe karty z różowym akcentem (border-top)
- Icon w różowym circle
- Shadow on hover
- Animation: stagger fade-in (każda karta po kolei)

**Padding:** 80px

---

### Sekcja 3: Testimonials (opinie)
**Layout:** Slider/carousel (3 opinie, pokazane po 1)

**Zawartość:** 3 opinie klientek

Opinia 1:
- Tekst: "Najlepszy salon w mieście! Profesjonalna obsługa i piękne wnętrze."
- Autor: "Magdalena K."
- Rating: 5 gwiazdek

Opinia 2:
- Tekst: "Stylizacja paznokci wykonana perfekcyjnie. Na pewno wrócę!"
- Autor: "Karolina W."
- Rating: 5 gwiazdek

Opinia 3:
- Tekst: "Zabieg na twarz był cudowny. Czuję się świeżo i wypoczęta."
- Autor:"Anna S."
- Rating: 5 gwiazdek

**Design:**
- Centered quote text (italic)
- Avatar (placeholder lub inicjały)
- Różowy background sekcji
- Navigation dots

**Animation:** Slide animation między opiniami

**Padding:** 80px

---

### Sekcja 4: CTA
**Layout:** Full-width, różowy gradient background

**Zawartość:**
- Heading: "Gotowa na metamorfozę?"
- Subheading: "Umów się na wizytę już dziś"
- CTA Button: "Skontaktuj się" (duży, white button)

**Padding:** 60px

**Animation:** Fade in on scroll

---

### Footer (na wszystkich stronach)
**Zawartość:**
- Kolumna 1: Logo + krótki opis
- Kolumna 2: Linki (Home, Usługi, Galeria, Kontakt)
- Kolumna 3: Kontakt (adres, tel, email)
- Kolumna 4: Social media icons (Instagram, Facebook)
- Copyright: © 2024 Beauty Salon

**Background:** Ciemny (#212121), tekst jasny

---

## PODSTRONA 2: USŁUGI (/uslugi)

### Hero
**Krótkie hero:**
- Heading: "Nasze Usługi"
- Breadcrumb: Home > Usługi

**Height:** 40vh

---

### Sekcja: Lista usług z cenami
**Layout:** Accordion lub kategorie z kartami

**Kategorie usług:**

**1. Stylizacja paznokci**
- Manicure klasyczny - od 60 PLN
- Manicure hybrydowy - od 100 PLN
- Pedicure - od 80 PLN
- Przedłużanie paznokci - od 150 PLN

**2. Zabiegi na twarz**
- Oczyszczanie wodorowe - 150 PLN
- Peeling kawitacyjny - 120 PLN
- Mezoterapia - 200 PLN
- Masaż kobido - 180 PLN

**3. Makijaż**
- Makijaż dzienny - 100 PLN
- Makijaż wieczorowy - 150 PLN
- Makijaż ślubny - od 300 PLN

**4. Inne usługi**
- Stylizacja brwi i rzęs - od 50 PLN
- Depilacja woskiem - od 40 PLN

**Design:**
- Każda kategoria to osobna sekcja/card
- Usługa: nazwa po lewej, cena po prawej
- Separator lines
- Różowy akcent

**Animation:** Fade-in on scroll

**Padding:** 80px

---

## PODSTRONA 3: GALERIA (/galeria)

### Hero
- Heading: "Galeria"
- Breadcrumb: Home > Galeria

---

### Sekcja: Galeria przed/po
**Layout:** 2 kolumny grid (desktop), 1 kolumna (mobile)

**Zawartość:** 8-10 zdjęć przed/po (slider lub split image)

**Kategorie:**
- Stylizacja paznokci (4 zdjęcia)
- Zabiegi na twarz (3 zdjęcia)
- Makijaż (3 zdjęcia)

**Design:**
- Image comparison slider (before/after) LUB
- Dwa zdjęcia obok siebie z "Przed" i "Po" labels
- Lightbox on click (można użyć prostej biblioteki)

**Animation:** Stagger grid animation

**Padding:** 80px

---

## PODSTRONA 4: KONTAKT (/kontakt)

### Hero
- Heading: "Kontakt"
- Breadcrumb: Home > Kontakt

---

### Sekcja: Split - Info + Formularz
**Layout:** 40% info, 60% formularz

**Info kontaktowe:**
- Adres: ul. Piękna 10, 00-001 Warszawa
- Telefon: +48 500 600 700
- Email: kontakt@beautysalon.pl
- Godziny otwarcia:
  - Pn-Pt: 9:00 - 20:00
  - Sobota: 10:00 - 18:00
  - Niedziela: Nieczynne

- Google Maps mockup (iframe lub placeholder)

**Formularz:**
1. Imię i nazwisko (required)
2. Telefon (required)
3. Email (required)
4. Usługa (select dropdown z opcjami)
5. Preferowany termin (date picker - możliwy placeholder)
6. Wiadomość (textarea)
7. Button: "Wyślij zapytanie" (różowy)

**Animation:** Form fields slide in

**Padding:** 80px

---

## SEO on-page

**Każda podstrona zawiera:**
- Unique `<title>` tag
- Meta description
- Meta keywords (optional)
- Proper heading hierarchy (H1, H2, H3)
- Alt text dla wszystkich obrazów
- Semantic HTML (header, nav, main, section, footer)

**Example:**
```html
<title>Beauty Salon - Salon kosmetyczny w Warszawie</title>
<meta name="description" content="Profesjonalny salon beauty w Warszawie. Stylizacja paznokci, zabiegi na twarz, makijaż." />
```

---

## Google Analytics Mockup

**Implementacja:**
- Dodanie Google Analytics script do `_app.tsx` lub `layout.tsx`
- Użycie placeholder tracking ID (wymienić na prawdziwy przy deployment)
- Event tracking na CTA buttons (mockup konsola)

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (lekkie animacje)
- **Icons:** Lucide React
- **Fonts:** Google Fonts - Montserrat + Open Sans
- **Gallery:** Before/After slider library (react-compare-image)
- **Forms:** React Hook Form
- **SEO:** next-seo library

---

## Responsywność

**Mobile:**
- Hamburger menu
- Stack wszystkie grid layouts
- Hero: 60vh
- Padding: 40px
- Font sizes: -30%

---

## Screenshoty

1. Home - full page
2. Home - hero
3. Usługi - lista cennik
4. Galeria - przed/po
5. Kontakt - formularz
6. Mobile - home page

---

---

# PROJEKT 4: Restauracja Premium 🍽️

## Pakiet: PRO (3,999 PLN)

### Funkcje pakietu
- ✅ Do 5-6 podstron (robimy 5)
- ✅ Dopracowany UX
- ✅ Animacje premium (parallax, reveal)
- ✅ Optymalizacja szybkości
- ✅ CTA i konwersja
- ✅ 3 rundy poprawek → perfekcyjny design

---

## Design & Kolorystyka

**Styl:** Luksusowy, elegancki, premium, dark theme  
**Paleta kolorów:**
- Primary: `#1A1A1A` (prawie czarny - elegancja)
- Secondary: `#2D2D2D` (ciemny szary)
- Accent: `#D4AF37` (złoty - luksus)
- Text: `#FFFFFF` (biały na ciemnym)
- Background sections: `#0F0F0F` (bardzo ciemny)
- Cards: `#232323` z złotym border

**Typografia:**
- Headings: `Cormorant Garamond` - Elegant, serif, luksusowa
- Body: `Lato` - Clean, readable
- Accent font: `Great Vibes` (dla logo lub specjalnych headingów)
- Rozmiary: H1: 64px, H2: 48px, H3: 32px, Body: 18px

**Animacje Premium:**
- Parallax scrolling na hero
- Reveal animations (slide, fade, scale)
- Hover effects z smooth transitions
- Stagger animations
- Scroll-triggered animations
- Page transitions
- Używamy: Framer Motion zaawansowane

---

## Struktura Podstron (5)

### 1. HOME - Strona główna
### 2. MENU - Menu restauracji
### 3. GALERIA - Zdjęcia dań i wnętrz
### 4. O NAS - Historia i zespół
### 5. KONTAKT - Formularz i dane

---

## PODSTRONA 1: HOME

### Header/Navbar (na wszystkich stronach)
**Layout:** Fixed top, transparent początkowo, ciemne tło po scroll, złote akcenty

**Zawartość:**
- Logo: "La Maison" (elegancki font)
- Menu: Home | Menu | Galeria | O nas | Kontakt
- CTA Button: "Rezerwuj stolik" (złoty button) → link do kontakt

**Effects:**
- Smooth backdrop blur on scroll
- Logo fade in
- Menu items stagger fade in
- Hover underline animation (złoty)

**Mobile:** Premium hamburger menu z full-screen overlay

---

### Sekcja 1: Hero
**Layout:** Full-screen z zdjęciem/video w tle + parallax effect

**Zawartość:**
- Pretitle: "Witamy w" (mały, złoty)
- Main Heading: "La Maison" (duży, elegancki font, 72px)
- Subtitle: "Wyjątkowa kuchnia francuska w sercu Warszawy"
- CTA Buttons:
  - Primary: "Zobacz menu" (złoty, filled)
  - Secondary: "Rezerwuj stolik" (transparent z borderrem)

**Wymiary:** 100vh

**Background:**
- Hero image: Elegant plated dish lub wnętrze restauracji
- Parallax scroll effect (image moves slower)
- Dark gradient overlay (bottom to top)
- Optional: Subtle video background

**Scroll indicator:** Animated down arrow (złoty)

**Animation:**
- Hero content: stagger fade + slide up
- Parallax background
- Button hover: glow effect

**Padding:** Full height

---

### Sekcja 2: Featured Dishes (Polecane dania)
**Layout:** Horizontal scroll/carousel, 3 karty widoczne (desktop)

**Zawartość:** 5 dań signature

Każde danie:
- Zdjęcie wysokiej jakości (wygenerowane lub stock)
- Nazwa dania: np. "Coq au Vin"
- Krótki opis: "Kurczak duszony w czerwonym winie z grzybami"
- Cena: "95 PLN"
- Tag: "Chef's recommendation" (złoty badge)

**Design kart:**
- Ciemne karty (#232323)
- Złoty border top
- Image hover: scale + brightness
- Glassmorphism effect possible

**Animation:**
- Cards slide in on scroll (stagger)
- Carousel auto-scroll (optional)

**Padding:** 100px

---

### Sekcja 3: O restauracji (krótka)
**Layout:** Split - 50% image, 50% text

**Zawartość:**
- Heading: "Smak Francji w Polsce"
- Tekst:
  - "Od 2005 roku serwujemy autentyczną kuchnię francuską, łącząc tradycyjne receptury z nowoczesnymi technikami kulinarnymi."
  - "Nasz szef kuchni, absolwent Le Cordon Bleu, tworzy dania z najwyższej jakości składników."
- CTA: "Poznaj naszą historię →" (link do /o-nas)

**Image:** Chef lub eleganckie wnętrze

**Animation:**
- Parallax slight shift
- Text reveal from left
- Image zoom subtle on scroll

**Padding:** 100px

---

### Sekcja 4: Testimonials Premium
**Layout:** Full-width, centered carousel

**Zawartość:** 3 opinie

Opinia 1:
- Quote: "Najlepsza kolacja w moim życiu. Perfekcyjnie przygotowane dania i nieskazitelna obsługa."
- Autor: "Jakub Adamski"
- Sub: "Krytyk kulinarny"
- Rating: 5 stars (złote)

Opinia 2:
- Quote: "Wyjątkowa atmosfera i wykwintne smaki.Polecam każdemu, kto ceni sobie luksus."
- Autor: "Magdalena Wolska"
- Rating: 5 stars

Opinia 3:
- Quote: "Niesamowite połączenie tradycji i nowoczesności. Każda wizyta to nowa przygoda."
- Autor: "Piotr Kowalczyk"
- Rating: 5 stars

**Design:**
- Duży quote text (italic, elegant font)
- Avatar okrągłe (lub placeholder)
- Navigation with smooth transition
- Dark background z subtelnym pattern

**Animation:**
- Smooth carousel transition
- Quote fade in + scale

**Padding:** 120px

---

### Sekcja 5: CTA Final
**Layout:** Full-width, ciemne tło, centered

**Zawartość:**
- Heading: "Zarezerwuj niezapomniane doświadczenie"
- Subheading: "Czekamy na Ciebie każdego wieczoru"
- CTA Button: "Skontaktuj się" (duży, złoty button)

**Background:** Dark z subtelnym pattern lub image overlay

**Animation:**
- Button pulse/glow effect
- Section reveal

**Padding:** 80px

---

### Footer Premium (wszystkie strony)
**Layout:** 4 kolumny (desktop), stack (mobile)

**Zawartość:**
- Kolumna 1:
  - Logo "La Maison"
  - Tagline: "Wyjątkowa kuchnia francuska"
  
- Kolumna 2: Nawigacja
  - Home, Menu, Galeria, O nas, Kontakt

- Kolumna 3: Kontakt
  - Adres: ul. Francuska 5, Warszawa
  - Tel: +48 22 123 4567
  - Email: rezerwacje@lamaison.pl

- Kolumna 4: Godziny
  - Wt-Czw: 17:00 - 23:00
  - Pt-Sob: 17:00 - 00:00
  - Nd-Pn: Zamknięte

- Social media icons (Instagram, Facebook) - złote
- Copyright: © 2024 La Maison. All rights reserved.

**Background:** Bardzo ciemny (#0A0A0A)
**Text:** Biały/szary
**Separators:** Złote linie

---

## PODSTRONA 2: MENU (/menu)

### Hero
**Heading:** "Nasze Menu"
**Breadcrumb:** Home > Menu
**Height:** 50vh
**Background:** Elegant image z przyborami

---

### Sekcja: Menu Categories

**Layout:** Tabs lub sections z smooth scroll

**Kategorie:**

**PRZYSTAWKI**
1. Foie Gras - 85 PLN
   - Pasztet z gęsiej wątróbki z konfiturą figową
2. Tatar wołowy - 65 PLN
   - Świeże mięso z kaparami i jajkiem
3. Ostrygi - 120 PLN (6 szt)
   - Świeże ostrygi z cytryną i sosem mignonette

**DANIA GŁÓWNE**
1. Coq au Vin - 95 PLN
   - Kurczak duszony w czerwonym winie
2. Boeuf Bourguignon - 110 PLN
   - Wołowina w sosie winnym z warzywami
3. Magret de Canard - 105 PLN
   - Pierś z kaczki z sosem pomarańczowym
4. Stek z rostbefu - 135 PLN
   - 200g, z grillowanymi warzywami

**DESERY**
1. Crème Brûlée - 35 PLN
   - Klasyczny deser z wanilią
2. Tarte Tatin - 40 PLN
   - Tarta z karmelizowanymi jabłkami
3. Profiteroles - 38 PLN
   - Ptyśki z lodami i sosem czekoladowym

**NAPOJE**
- Wina (karta win) - od 120 PLN/butelka
- Koktajle - od 35 PLN
- Kawa - od 12 PLN

**Design:**
- Każda kategoria to sekcja
- Items w elegant list
- Nazwa po lewej, cena po prawej
- Opis mniejszym fontem pod nazwą
- Złote separatory
- Zdjęcia dla featured dishes

**Animation:**
- Reveal on scroll
- Hover effect na item (subtle glow)

**Padding:** 100px

---

## PODSTRONA 3: GALERIA (/galeria)

### Hero
**Heading:** "Galeria"
**Subheading:** "Odkryj nasze kulinarne arcydzieła"

---

### Sekcja: Masonry Gallery
**Layout:** Pinterest-style masonry grid (3 kolumny desktop, 2 tablet, 1 mobile)

**Kategorie zdjęć:**
- Dania (8 zdjęć)
- Wnętrza restauracji (4 zdjęcia)
- Zespół/chef (2 zdjęcia)
- Fine dining experience (2 zdjęcia)

**Total:** 16 high-quality images

**Design:**
- Masonry layout z różnymi aspect ratios
- Hover: overlay z ciemnym gradient + zoom
- Click: Lightbox/modal z full image
- Navigation w lightbox (prev/next)

**Animation:**
- Stagger fade-in grid
- Hover zoom smooth
- Lightbox fade in

**Padding:** 80px

---

## PODSTRONA 4: O NAS (/o-nas)

### Hero
**Heading:** "Nasza Historia"
**Background:** Vintage photo restauracji

---

### Sekcja 1: Historia
**Layout:** Centered text column (max-width: 800px)

**Zawartość:**
- Paragraf 1: Historia założenia (2005)
- Paragraf 2: Filozofia kuchni
- Paragraf 3: Osiągnięcia i nagrody

**Animation:** Text reveal line by line

**Padding:** 100px

---

### Sekcja 2: Szef Kuchni
**Layout:** Split - 50% image, 50% text

**Zawartość:**
- Zdjęcie: Chef portrait (professional)
- Heading: "Chef Pierre Dubois"
- Bio:
  - Absolwent Le Cordon Bleu
  - 20 lat doświadczenia
  - Praca w restauracjach Michelin
  - Filozofia: "Gotowanie to sztuka łączenia smaków i emocji"

**Animation:** Parallax + reveal

**Padding:** 100px

---

### Sekcja 3: Zespół (Optional)
**Layout:** Grid 3 kolumny

**Zawartość:** 3-4 członków zespołu
- Zdjęcie + imię + rola

**Animation:** Stagger cards

**Padding:** 80px

---

## PODSTRONA 5: KONTAKT (/kontakt)

### Hero
**Heading:** "Kontakt"
**Subheading:** "Zarezerwuj stolik lub skontaktuj się z nami"

---

### Sekcja: Split Layout
**Layout:** 40% info, 60% formularz

**Info kontaktowe:**
- Adres: ul. Francuska 5, 00-001 Warszawa
- Telefon: +48 22 123 4567
- Email: rezerwacje@lamaison.pl
- Godziny otwarcia:
  - Wt-Czw: 17:00 - 23:00
  - Pt-Sob: 17:00 - 00:00
  - Nd-Pn: Zamknięte

**Google Maps:** Embed iframe

**Formularz Rezerwacji:**
1. Imię i nazwisko (required)
2. Email (required)
3. Telefon (required)
4. Data wizyty (date picker, required)
5. Godzina (select: 17:00, 18:00, 19:00, 20:00, 21:00)
6. Liczba osób (select: 1-10)
7. Dodatkowe uwagi (textarea, optional)
8. Button: "Wyślij rezerwację" (złoty, large)

**Walidacja:** Full validation
**Success message:** Elegant modal potwierdzający

**Animation:**
- Form fields slide in (stagger)
- Button hover glow

**Padding:** 100px

---

## Optymalizacja Szybkości

**Next.js Image Optimization:**
- Wszystkie obrazy przez `<Image>` component
- Lazy loading
- Proper sizing (responsive images)
- WebP format
- Placeholder blur

**Code Splitting:**
- Dynamic imports dla heavy components
- Route-based code splitting (automatic w Next.js)

**Performance:**
- Minimize bundle size
- Tree shaking
- CSS purging (Tailwind)
- Font optimization (next/font)

**Lighthouse target:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## CTA i Konwersja

**Strategiczne CTA placement:**
1. Hero: "Zobacz menu" + "Rezerwuj stolik"
2. Featured Dishes: "Zobacz pełne menu"
3. About section: "Poznaj naszą historię"
4. Testimonials → Final CTA: "Skontaktuj się"
5. Każda podstrona ma CTA do rezerwacji

**Design CTA buttons:**
- Złote (primary)
- Duże (min 48px height)
- Clear labels
- Hover effects (glow, scale)
- High contrast

**Tracking:**
- Google Analytics events na każdy CTA click
- Conversion funnels

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (advanced)
- **Parallax:** react-scroll-parallax
- **Icons:** Lucide React
- **Fonts:** Google Fonts - Cormorant Garamond + Lato
- **Gallery:** Lightbox (react-image-lightbox lub photoswipe)
- **Forms:** React Hook Form + Zod validation
- **Maps:** Google Maps embed
- **SEO:** next-seo
- **Analytics:** Google Analytics 4

---

## Responsywność Premium

**Mobile-first approach**
**Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Mobile optimizations:**
- Touch-friendly (min 44px touch targets)
- Simplified animations (reduced motion)
- Optimized images (smaller sizes)
- Collapsible sections
- Bottom-fixed CTA na mobile

---

## Screenshoty

1. Home - full page
2. Home - hero parallax
3. Menu - kategorie
4. Galeria - masonry grid
5. O nas - chef section
6. Kontakt - formularz
7. Mobile - home
8. Mobile - menu

---

---

# INTEGRACJA Z GŁÓWNĄ STRONĄ PORTFOLIO

## Aktualizacja constants.ts

Dodamy nowe projekty do `PORTFOLIO_PROJECTS`:

```typescript
export const PORTFOLIO_PROJECTS = [
  {
    id: 'mechanik-auto',
    title: 'Warsztat Mechaniczny',
    shortDescription: 'Profesjonalna strona dla warsztatu samochodowego. Pakiet START - prosta, funkcjonalna strona wizytówka z formularzem kontaktowym.',
    fullDescription: '...',
    tags: ['Next.js', 'Tailwind CSS', 'Pakiet START'],
    imageSrc: '/assets/projects/mechanik-hero.png',
    link: 'https://mechanik-demo.vercel.app', // lub relative path
    packageType: 'START',
    packagePrice: '1,199 PLN',
    features: ['1 strona scroll', '4 sekcje', 'Formularz kontaktowy', 'Responsywny'],
  },
  {
    id: 'fotograf-portfolio',
    title: 'Portfolio Fotografa',
    shortDescription: 'Minimalistyczne portfolio dla fotografa. Pakiet START - czysty design z galerią zdjęć i sekcją "O mnie".',
    // ...
    packageType: 'START',
  },
  {
    id: 'salon-beauty',
    title: 'Salon Beauty',
    shortDescription: 'Elegancka strona dla salonu kosmetycznego. Pakiet BIZNES - 4 podstrony, lekkie animacje, galeria przed/po.',
    // ...
    packageType: 'BIZNES',
    packagePrice: '2,299 PLN',
    features: ['4 podstrony', 'Lekkie animacje', 'SEO', 'Google Analytics'],
  },
  {
    id: 'restauracja-premium',
    title: 'Restauracja Premium',
    shortDescription: 'Luksusowa strona dla restauracji francuskiej. Pakiet PRO - 5 podstron, animacje premium, optymalizacja szybkości.',
    // ...
    packageType: 'PRO',
    packagePrice: '3,999 PLN',
    features: ['5 podstron', 'Animacje premium', 'Optymalizacja', 'Dopracowany UX'],
  },
];
```

---

## Prezentacja: Bento Grid

**Layout idea:**
- Asymetryczny grid
- Niektóre projekty większe (featured)
- Hover: reveal więcej info
- Click: link do projektu lub detail page

**Implementacja:**
- CSS Grid z różnymi `grid-column` spans
- Framer Motion animations
- Responsive (mobile stack)

**Example grid areas:**
```
Desktop:
[Mechanik] [Fotograf] [Fotograf]
[Salon   ] [Salon   ] [Restaur.]
[Restaur.] [Restaur.] [Restaur.]

Mobile:
[Mechanik]
[Fotograf]
[Salon]
[Restauracja]
```

---

## Strony szczegółów projektu

Dla każdego projektu opional: `/portfolio/[id]/page.tsx`

**Zawartość:**
- Hero z main screenshot
- Opis projektu
- Pakiet i funkcje
- Galeria screenshotów (carousel)
- Technologie użyte
- CTA: "Zobacz live demo" + "Wybierz ten pakiet" (link do cennik/kontakt)

---

# PODSUMOWANIE

## Łączny czas realizacji: ~8-10 godzin

**Breakdown:**
- Mechanik: 1.5h
- Fotograf: 1.5h
- Salon Beauty: 2.5-3h
- Restauracja Premium: 3-4h
- Integracja z portfolio: 1h

---

## Następne kroki

1. ✅ Zapoznanie się ze specyfikacjami (ten dokument)
2. [ ] Utworzenie struktury folderów (`/demo-projects/`)
3. [ ] Budowa Projekt 1: Mechanik
4. [ ] Screenshoty Mechanik
5. [ ] Budowa Projekt 2: Fotograf
6. [ ] Screenshoty Fotograf
7. [ ] Budowa Projekt 3: Salon Beauty
8. [ ] Screenshoty Salon
9. [ ] Budowa Projekt 4: Restauracja Premium
10. [ ] Screenshoty Restauracja
11. [ ] Aktualizacja głównej strony portfolio
12. [ ] Implementacja Bento Grid
13. [ ] Deployment wszystkich projektów

---

**GOTOWE DO STARTU! 🚀**
