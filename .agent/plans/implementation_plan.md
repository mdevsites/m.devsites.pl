# Plan Budowy Portfolio Projektów

## Cel
Stworzenie 4-6 **rzeczywistych, działających stron internetowych** jako projektów portfolio. Każda strona będzie:
- ✅ Pełnoprawną, responsywną stroną
- ✅ Zaprojektowana w nowoczesnym stylu
- ✅ Gotowa do pokazania klientom jako przykład pracy
- ✅ Z możliwością live preview

---

## 4 Projekty Dopasowane do Pakietów Cennikowych

Zbudujemy **4 różnorodne projekty**, które pokażą pakiety cennikowe w działaniu:

---

### 🔧 1. **Warsztat Mechaniczny** - PAKIET START (1,199 PLN)
**Typ:** Single Page (1 strona scroll)  
**Pakiet:** START - 1 strona scroll, Do 4 sekcji, Wersja mobilna, Formularz, Brak animacji  
**Style:** Profesjonalny, praktyczny, niebieski/szary  
**Sekcje (max 4):**
1. Hero z nagłówkiem i CTA
2. Usługi (lista głównych usług mechanicznych)
3. O warsztacie (krótki opis + zaufanie)
4. Formularz kontaktowy + Stopka

**Ograniczenia pakietu START:**
- ✅ Tylko 1 strona scroll
- ✅ Maksymalnie 4 sekcje
- ✅ Responsywny design
- ✅ Formularz kontaktowy
- ❌ Brak animacji
- ❌ Brak zaawansowanego SEO

**Tech Stack:** Next.js, Tailwind CSS (bez Framer Motion)  
**Czas realizacji:** ~1.5 godziny

---

### 📸 2. **Portfolio Fotografa** - PAKIET START (1,199 PLN)
**Typ:** Single Page (1 strona scroll)  
**Pakiet:** START - 1 strona scroll, Do 4 sekcji, Wersja mobilna, Formularz, Brak animacji  
**Style:** Minimalistyczny, czysty, jasny, focus na zdjęcia  
**Sekcje (max 4):**
1. Hero z dużym zdjęciem w tle
2. Galeria zdjęć (simple grid layout)
3. O mnie (krótka bio)
4. Formularz kontaktowy + Stopka

**Ograniczenia pakietu START:**
- ✅ Tylko 1 strona scroll
- ✅ Maksymalnie 4 sekcje
- ✅ Responsywny design
- ✅ Formularz kontaktowy
- ❌ Brak animacji
- ❌ Brak lightbox (proste zdjęcia w grid)

**Tech Stack:** Next.js, Tailwind CSS  
**Czas realizacji:** ~1.5 godziny

---

### 💅 3. **Salon Beauty** - PAKIET BIZNES (2,299 PLN)
**Typ:** Multi-page website (do 4 podstron)  
**Pakiet:** BIZNES - Do 4 podstron, Indywidualny layout, Lekkie animacje, SEO on-page, Google Analytics  
**Style:** Elegancki, kobiecy, różowy/złoty gradient  
**Podstrony (max 4):**
1. **Home** - Hero, Featured Services, CTA, Testimonials
2. **Usługi** - Lista usług beauty z opisami i cenami
3. **Galeria** - Galeria przed/po z prostym lightbox
4. **Kontakt** - Formularz kontaktowy, dane, mapa Google

**Funkcje pakietu BIZNES:**
- ✅ Do 4 podstron (routing Next.js)
- ✅ Indywidualny, dopracowany layout
- ✅ Lekkie animacje (fade-in, slide)
- ✅ SEO on-page (meta tags, headings)
- ✅ Google Analytics mockup
- ✅ 2 rundy poprawek → Premium design

**Tech Stack:** Next.js, Framer Motion (lekkie animacje), Tailwind CSS  
**Czas realizacji:** ~2.5-3 godziny

---

### 🍽️ 4. **Restauracja Premium** - PAKIET PRO (3,999 PLN)
**Typ:** Advanced multi-page website (do 5 podstron)  
**Pakiet:** PRO - Do 6 podstron, Dopracowany UX, Animacje premium, Optymalizacja szybkości, CTA i konwersja  
**Style:** Luksusowy, elegancki, ciemny z złotymi akcentami  
**Podstrony (5):**
1. **Home** - Hero z wysokiej jakości zdjęciem, Featured dishes, CTA do kontaktu
2. **Menu** - Kategorie menu (przystawki, dania główne, desery, napoje)
3. **Galeria** - Premium galeria dań i wnętrz restauracji
4. **O nas** - Historia restauracji, filozofia, zespół
5. **Kontakt** - Formularz kontaktowy z CTA, dane kontaktowe, mapa

**Funkcje pakietu PRO (TYLKO z cennika):**
- ✅ Do 5-6 podstron (robimy 5)
- ✅ Dopracowany UX (intuicyjna nawigacja, przemyślane user flows)
- ✅ Animacje premium (parallax, reveal animations, smooth transitions)
- ✅ Optymalizacja szybkości (Next.js Image optimization, lazy loading, code splitting)
- ✅ CTA i konwersja (strategicznie umieszczone przyciski kontaktu, wyróżnione CTA)
- ✅ 3 rundy poprawek → Perfekcyjny, dopracowany design

**Tech Stack:** Next.js 14, Framer Motion, Tailwind CSS  
**Czas realizacji:** ~3 godziny

---

## Struktura Organizacji Projektów ✅

### Wybrane rozwiązanie: Demo routes wewnątrz głównej aplikacji

```
portfolio-site/
└── app/
    └── demos/
        ├── mechanik/
        │   └── page.tsx          # Pełna strona warsztatu
        ├── fotograf/
        │   └── page.tsx          # Pełna strona fotografa
        ├── salon-beauty/
        │   ├── page.tsx          # Home
        │   ├── uslugi/
        │   ├── galeria/
        │   └── kontakt/
        └── restauracja/
            ├── page.tsx          # Home
            ├── menu/
            ├── galeria/
            ├── o-nas/
            └── kontakt/
```

**Zalety:**
- ✅ Wszystko w jednej aplikacji
- ✅ Jeden deployment (łatwiejsze zarządzanie)
- ✅ Wspólne komponenty i style (możemy reużywać)
- ✅ Szybsze ładowanie (shared bundle)
- ✅ Łatwe pokazanie klientom (link: twoja-strona.com/demos/mechanik)

**Jak to będzie działać:**
1. Na stronie `/portfolio` pokazujemy **screenshoty** projektów
2. Klient klika "Zobacz live demo" → przekierowanie do `/demos/mechanik`
3. Może przeglądać pełną, działającą stronę
4. Może wrócić do portfolio lub kontaktu

---

## Workflow dla Każdego Projektu

Dla każdego projektu będziemy postępować wg schematu:

1. **Implementacja** (1.5-4h - zależnie od pakietu)
   - Utworzenie folderu w `/app/demos/[projekt]/`
   - Implementacja wszystkich sekcji/podstron
   - Responsywność
   - Animacje (jeśli pakiet na to pozwala)

2. **Screenshots** (30 min)
   - Uruchomienie dev server
   - Zrobienie screenshotów (desktop + mobile)
   - Zapisanie do `/public/assets/projects/[projekt]/`
   - Optymalizacja obrazów

3. **Integracja z Portfolio** (20 min)
   - Aktualizacja `constants.ts` (dodanie projektu)
   - Link "Zobacz live demo" → `/demos/[projekt]`
   - Aktualizacja karty projektu w Bento Grid

---

## Nowoczesna Prezentacja Portfolio

Proponuję **3 opcje prezentacji** projektów na głównej stronie `/portfolio`:

### 🎨 Opcja 1: **Bento Grid** (NOWOCZESNE!)
- Asymetryczny grid layout
- Projekty w różnych rozmiarach (featured większe)
- Hover effects z reveal details
- Very trendy w 2024/2025

### 🎡 Opcja 2: **3D Carousel / Slider**
- Projekty w 3D przestrzeni
- Swipe/drag functionality
- Smooth transitions
- Wow effect!

### 📱 Opcja 3: **Interactive Cards Gallery**
- Karty z flip effect
- Click to expand detail view
- Parallax scroll effects
- Clean & professional

**Moja rekomendacja:** Opcja 1 (Bento Grid) lub Opcja 2 (3D Carousel) - najbardziej nowoczesne!

---

## Timeline

Przy intensywnej pracy możemy zbudować:
- **1 projekt dziennie** = 4 dni
- **2 projekty dziennie** (START + BIZNES/PRO) = 2 dni
- **All-in** = 1 dzień pracy ciągłej (9-10 godzin)

**Łączny czas realizacji:** ~8-10 godzin dla wszystkich 4 projektów.

---

## Decyzje Finalne ✅

### 1. Organizacja projektów
**Wybrano: Demo routes wewnątrz głównej aplikacji portfolio**

Projekty jako routes w `/app/demos/`:
```
portfolio-site/app/demos/
├── mechanik/page.tsx          # PAKIET START
├── fotograf/page.tsx          # PAKIET START  
├── salon-beauty/              # PAKIET BIZNES (4 podstrony)
│   ├── page.tsx
│   ├── uslugi/page.tsx
│   ├── galeria/page.tsx
│   └── kontakt/page.tsx
└── restauracja/               # PAKIET PRO (5 podstron)
    ├── page.tsx
    ├── menu/page.tsx
    ├── galeria/page.tsx
    ├── o-nas/page.tsx
    └── kontakt/page.tsx
```

**Zalety:**
- Wszystko w jednej aplikacji (jeden deployment)
- Wspólne komponenty i style
- Łatwe pokazanie klientom (link na Twojej stronie)
- Szybsze i prostsze zarządzanie

---

### 2. Prezentacja Portfolio
**Wybrano: Bento Grid (asymetryczny, nowoczesny)**

- Asymetryczny grid layout
- Projekty w różnych rozmiarach
- Featured projekty większe
- Hover effects z reveal szczegółów
- Bardzo trendy w 2024/2025
- Responsywny (mobile: stack)

---

### 3. Kolejność budowy
**Wybrano: Od najprostszego do najbardziej zaawansowanego**

1. 🔧 **Mechanik** (PAKIET START) - 1.5h
2. 📸 **Fotograf** (PAKIET START) - 1.5h  
3. 💅 **Salon Beauty** (PAKIET BIZNES) - 2.5-3h
4. 🍽️ **Restauracja** (PAKIET PRO) - 3-4h

**Łączny czas:** ~8-10 godzin

---

## Następne Kroki

**Gotowe do budowy!**

1. ✅ Utworzenie struktury `/app/demos/`
2. ✅ Budowa Projekt 1: Mechanik (`/demos/mechanik/page.tsx`)
3. ✅ Screenshoty Mechanika
4. ✅ Integracja z portfolio (constants.ts + link)
5. ✅ Powtórzenie dla pozostałych projektów
6. ✅ Implementacja Bento Grid na stronie `/portfolio`
7. ✅ Finalne testy i deployment

**Zaczynamy od Mechanika!** 🔧
