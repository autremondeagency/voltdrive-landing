import ScrollHero from "@/components/ScrollHero";
import AnimatedSection from "@/components/AnimatedSection";

const brands = [
  {
    name: "Zeekr",
    logo: (
      <svg viewBox="0 0 120 28" fill="currentColor" className="h-6 md:h-7">
        <text x="0" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="24" letterSpacing="3">ZEEKR</text>
      </svg>
    ),
  },
  {
    name: "BYD",
    logo: (
      <svg viewBox="0 0 80 32" fill="currentColor" className="h-7 md:h-8">
        <text x="0" y="26" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="30" letterSpacing="2">BYD</text>
      </svg>
    ),
  },
  {
    name: "NIO",
    logo: (
      <svg viewBox="0 0 70 32" fill="currentColor" className="h-7 md:h-8">
        <text x="0" y="26" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="28" letterSpacing="4">NIO</text>
      </svg>
    ),
  },
  {
    name: "XPeng",
    logo: (
      <svg viewBox="0 0 110 28" fill="currentColor" className="h-6 md:h-7">
        <text x="0" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="24" letterSpacing="2">XPENG</text>
      </svg>
    ),
  },
  {
    name: "Li Auto",
    logo: (
      <svg viewBox="0 0 110 28" fill="currentColor" className="h-6 md:h-7">
        <text x="0" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="24" letterSpacing="2">Li Auto</text>
      </svg>
    ),
  },
];

const cars = [
  {
    name: "Zeekr 001",
    type: "Gran Tourer",
    range: "650 km",
    power: "544 KM",
    price: "od 189 000 PLN",
    gradient: "from-[#1a237e] via-[#0d47a1] to-[#01579b]",
    accent: "#42a5f5",
    silhouette: "shooting-brake",
  },
  {
    name: "BYD Seal",
    type: "Sedan",
    range: "570 km",
    power: "530 KM",
    price: "od 159 000 PLN",
    gradient: "from-[#1b5e20] via-[#2e7d32] to-[#1a237e]",
    accent: "#66bb6a",
    silhouette: "sedan",
  },
  {
    name: "NIO ET5",
    type: "Sedan",
    range: "580 km",
    power: "489 KM",
    price: "od 175 000 PLN",
    gradient: "from-[#4a148c] via-[#311b92] to-[#1a237e]",
    accent: "#ab47bc",
    silhouette: "sedan",
  },
  {
    name: "XPeng G6",
    type: "SUV",
    range: "570 km",
    power: "476 KM",
    price: "od 169 000 PLN",
    gradient: "from-[#bf360c] via-[#e65100] to-[#f57f17]",
    accent: "#ff7043",
    silhouette: "suv",
  },
];

function CarSilhouette({ type, accent }: { type: string; accent: string }) {
  if (type === "suv") {
    return (
      <svg viewBox="0 0 240 100" fill="none" className="w-full h-auto drop-shadow-2xl" style={{ filter: `drop-shadow(0 8px 24px ${accent}30)` }}>
        <path
          d="M30 70 L45 70 L50 55 L70 35 L90 28 L160 28 L185 35 L195 50 L200 55 L210 70 L215 70"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M30 70 L215 70"
          stroke={accent}
          strokeWidth="1.5"
          opacity="0.4"
        />
        <circle cx="65" cy="72" r="10" stroke={accent} strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="65" cy="72" r="5" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="185" cy="72" r="10" stroke={accent} strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="185" cy="72" r="5" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.4" />
        <line x1="90" y1="28" x2="90" y2="55" stroke={accent} strokeWidth="1" opacity="0.3" />
        <line x1="160" y1="28" x2="165" y2="50" stroke={accent} strokeWidth="1" opacity="0.3" />
        <path d="M95 32 L155 32 L155 50 L93 50 Z" stroke={accent} strokeWidth="1" fill={accent} fillOpacity="0.05" opacity="0.5" />
      </svg>
    );
  }
  if (type === "shooting-brake") {
    return (
      <svg viewBox="0 0 240 100" fill="none" className="w-full h-auto drop-shadow-2xl" style={{ filter: `drop-shadow(0 8px 24px ${accent}30)` }}>
        <path
          d="M25 72 L40 72 L48 55 L75 30 L100 25 L175 25 L195 40 L205 60 L210 72 L220 72"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M25 72 L220 72"
          stroke={accent}
          strokeWidth="1.5"
          opacity="0.4"
        />
        <circle cx="60" cy="74" r="10" stroke={accent} strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="60" cy="74" r="5" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.4" />
        <circle cx="190" cy="74" r="10" stroke={accent} strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="190" cy="74" r="5" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.4" />
        <line x1="100" y1="25" x2="100" y2="55" stroke={accent} strokeWidth="1" opacity="0.3" />
        <line x1="175" y1="25" x2="180" y2="55" stroke={accent} strokeWidth="1" opacity="0.3" />
        <path d="M105 29 L170 29 L175 52 L102 52 Z" stroke={accent} strokeWidth="1" fill={accent} fillOpacity="0.05" opacity="0.5" />
      </svg>
    );
  }
  // sedan
  return (
    <svg viewBox="0 0 240 100" fill="none" className="w-full h-auto drop-shadow-2xl" style={{ filter: `drop-shadow(0 8px 24px ${accent}30)` }}>
      <path
        d="M25 72 L40 72 L48 58 L80 32 L105 26 L165 26 L185 38 L200 58 L210 72 L220 72"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M25 72 L220 72"
        stroke={accent}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <circle cx="60" cy="74" r="10" stroke={accent} strokeWidth="2" fill="none" opacity="0.6" />
      <circle cx="60" cy="74" r="5" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx="192" cy="74" r="10" stroke={accent} strokeWidth="2" fill="none" opacity="0.6" />
      <circle cx="192" cy="74" r="5" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.4" />
      <line x1="105" y1="26" x2="105" y2="55" stroke={accent} strokeWidth="1" opacity="0.3" />
      <line x1="165" y1="26" x2="170" y2="52" stroke={accent} strokeWidth="1" opacity="0.3" />
      <path d="M110 30 L160 30 L166 50 L107 50 Z" stroke={accent} strokeWidth="1" fill={accent} fillOpacity="0.05" opacity="0.5" />
    </svg>
  );
}

const valueProps = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Bezposredni import",
    description:
      "Importujemy bezposrednio od producenta. Bez posrednikow, bez ukrytych kosztow.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Pelna gwarancja",
    description:
      "Kazdy samochod objety pelna gwarancja i wsparciem serwisowym w Polsce.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 10V3L4 14h7v7l9-11h-7z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Najnowsza technologia",
    description:
      "Chinskie EV to liderzy innowacji. Najlepsze baterie, najlepsze oprogramowanie.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Konkurencyjne ceny",
    description:
      "Do 30% taniej niz europejskie odpowiedniki. Premium nie musi kosztowac fortuny.",
  },
];

const steps = [
  {
    number: "01",
    title: "Wybierz samochod",
    description:
      "Przegladaj nasz katalog lub powiedz nam, czego szukasz. Doradzimy najlepsza opcje.",
  },
  {
    number: "02",
    title: "Zloz zamowienie",
    description:
      "Podpisujesz umowe, wplacasz zaliczke. My zajmujemy sie importem i homologacja.",
  },
  {
    number: "03",
    title: "Odbierz kluczyki",
    description:
      "Samochod dostarczony pod Twoje drzwi, zarejestrowany i gotowy do jazdy.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero with scroll animation */}
      <ScrollHero />

      {/* Brand Showcase */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-center text-white/40 text-sm tracking-[0.3em] uppercase mb-12">
              Zaufane marki
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {brands.map((brand, i) => (
              <AnimatedSection key={brand.name} delay={i * 0.1}>
                <div className="flex items-center justify-center px-6 py-4 md:px-8 md:py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-electric-blue/50 hover:bg-electric-blue/5 transition-all duration-300 group">
                  <div className="text-white/40 group-hover:text-electric-blue transition-colors duration-300">
                    {brand.logo}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section id="cars" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-electric-blue text-sm tracking-[0.3em] uppercase mb-4">
                Nasza oferta
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Wyrozniajace sie modele
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map((car, i) => (
              <AnimatedSection key={car.name} delay={i * 0.1}>
                <div className="group rounded-2xl bg-charcoal border border-white/10 overflow-hidden hover:border-electric-blue/30 transition-all duration-300 hover:-translate-y-1">
                  {/* Car showcase area with gradient + silhouette */}
                  <div className={`aspect-[4/3] bg-gradient-to-br ${car.gradient} flex flex-col items-center justify-center relative overflow-hidden p-6`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    {/* Decorative grid lines */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                      backgroundImage: `linear-gradient(${car.accent}40 1px, transparent 1px), linear-gradient(90deg, ${car.accent}40 1px, transparent 1px)`,
                      backgroundSize: '30px 30px',
                    }} />
                    {/* Glow orb */}
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{ backgroundColor: car.accent }} />
                    {/* Silhouette */}
                    <div className="relative z-10 w-full px-2 mt-4 group-hover:scale-105 transition-transform duration-500">
                      <CarSilhouette type={car.silhouette} accent={car.accent} />
                    </div>
                    {/* Model name overlay */}
                    <p className="relative z-10 text-[10px] tracking-[0.25em] uppercase mt-3 font-medium" style={{ color: `${car.accent}99` }}>
                      {car.type}
                    </p>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {car.name}
                        </h3>
                        <p className="text-white/40 text-sm">{car.type}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-4">
                      <div className="flex items-center gap-1.5 text-sm text-white/60">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                        {car.range}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-white/60">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                        {car.power}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <span className="text-electric-blue font-semibold">
                        {car.price}
                      </span>
                      <button className="text-sm text-white/50 hover:text-electric-blue transition-colors">
                        Szczegoly &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-electric-blue text-sm tracking-[0.3em] uppercase mb-4">
                Dlaczego my
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Twoj zaufany partner
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, i) => (
              <AnimatedSection key={prop.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-electric-blue/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-5">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-electric-blue text-sm tracking-[0.3em] uppercase mb-4">
                Proces
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Jak to dziala
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.15}>
                <div className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-electric-blue/30 to-transparent" />
                  )}
                  <div className="text-6xl font-bold text-electric-blue/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-24 bg-charcoal relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric-blue/5 blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Gotowy na{" "}
              <span className="text-electric-blue">elektryczna przyszlosc</span>
              ?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Umow sie na konsultacje. Pomozemy Ci wybrac idealny samochod
              elektryczny i zajmiemy sie calym procesem importu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kontakt@voltdrive.pl"
                className="px-10 py-5 bg-electric-blue text-white font-semibold rounded-xl hover:bg-accent-blue transition-colors text-lg inline-flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Napisz do nas
              </a>
              <a
                href="tel:+48123456789"
                className="px-10 py-5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-lg inline-flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Zadzwon
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0a12] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-electric-blue flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">VoltDrive</span>
            </div>

            <nav className="flex gap-8 text-sm text-white/40">
              <a
                href="#cars"
                className="hover:text-electric-blue transition-colors"
              >
                Samochody
              </a>
              <a
                href="#contact"
                className="hover:text-electric-blue transition-colors"
              >
                Kontakt
              </a>
              <span>Polityka prywatnosci</span>
            </nav>

            <p className="text-sm text-white/30">
              &copy; 2026 VoltDrive. Wszystkie prawa zastrzezone.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
