import { Header } from '@/components/Header';
import { MusicPlayer } from '@/components/MusicPlayer';
import { VideoPlayer } from '@/components/VideoPlayer';
import { InstagramMockup } from '@/components/InstagramMockup';
import { NewsletterForm } from '@/components/NewsletterForm';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Download, ArrowRight, Instagram } from 'lucide-react';
import albumCover from '@/assets/album-cover.jpg';
import bioPhoto from '@/assets/bio-photo.jpg';
import bgHero from '@/assets/bh-hero.mp4';
import artistPortrait from '@/assets/poster.jpg';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen w-full overflow-hidden pt-16 snap-start snap-always">
        {/* Video Background */}
        <video
          id="hero-video"
          autoPlay
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster={artistPortrait}
        >
          <source src={bgHero} type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Mute/Unmute Button */}
        <button
          onClick={(e) => {
            const video = document.getElementById('hero-video') as HTMLVideoElement;
            if (video) {
              video.muted = !video.muted;
              const btn = e.currentTarget;
              btn.innerHTML = video.muted 
                ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>' 
                : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M17.5 6a8 8 0 0 1 0 12"/></svg>';
            }
          }}
          className="absolute top-24 right-4 lg:right-8 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all hover:scale-110 z-[999]"
          aria-label="Toggle mute"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/></svg>
        </button>

        <div className="container relative z-10 mx-auto px-4 py-12 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 min-h-[calc(100vh-8rem)]">
            {/* Left Column - Poetic Text */}
            <div className="flex items-center justify-center">
              <div className="space-y-6 text-center lg:text-left max-w-xl backdrop-blur-md bg-black/30 p-8 rounded-lg">
                <p className="text-2xl leading-relaxed text-white font-bold lg:text-3xl">
                  Y EL FUEGO ARRASÓ CON LA SONRISA QUE UN DÍA FUE, SIENDO TODO...
                  CONVERTIDOS EN NADA, SIENDO NADA... TAN FALTOS DE TODO; ENTRE RASTROS DE
                  ABRAZOS, ENTRE AUSENCIA Y DOLOR.
                </p>
              </div>
            </div>

            {/* Right Column - New Release */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm space-y-6">
                <h2 className="text-xl font-bold tracking-[0.15em] text-white font-display text-center">
                  NUEVO LANZAMIENTO
                </h2>

                <div className="relative overflow-hidden rounded-lg border border-white/20 bg-black/50 p-6 backdrop-blur-lg">
                  <img
                    src={albumCover}
                    alt="Corazón Ceniza Album Cover"
                    className="mb-6 w-full rounded object-cover"
                  />

                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-black tracking-[0.15em] text-primary">
                      CORAZÓN CENIZA
                    </h3>

                    <div className="space-y-2 text-sm text-white/80">
                      <p>1. CON TUS MALETAS</p>
                      <p>2. TR3S SEMANAS</p>
                      <p>3. CICATRICES</p>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-background"
                      onClick={() => scrollToSection('musica')}
                    >
                      ESCUCHAR AHORA
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Música Section */}
      <section id="musica" className="relative min-h-screen py-20 lg:py-32 snap-start snap-always flex flex-col justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-8 font-display text-5xl font-black tracking-[0.2em] text-primary lg:text-7xl">
              MÚSICA
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Description */}
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="font-display text-3xl font-bold tracking-wide text-foreground lg:text-4xl">
                ESCUCHA CORAZÓN CENIZA, EL NUEVO EP DE PÁEZ
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                El artista colombiano nos presenta Corazón Ceniza, un EP de 3 canciones que nos
                sumerge en el universo del desamor, del recuerdo, del dolor y del olvido.
              </p>
            </div>

            {/* Spotify Player */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <iframe 
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/album/6UPeS2j512xRVCe3RpiLHu?utm_source=generator&theme=0" 
                  width="100%" 
                  height="370" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  title="PÁEZ - Corazón Ceniza en Spotify"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="relative lg:min-h-screen py-20 lg:py-32 snap-start snap-always flex flex-col justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-8 font-display text-5xl font-black tracking-[0.2em] text-primary lg:text-7xl">
              VIDEOS
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Video Title */}
            <div>
              <h3 className="font-display text-6xl font-black tracking-[0.15em] text-foreground lg:text-8xl">
                CON TUS MALETAS
              </h3>
            </div>

            {/* Video Player */}
            <div className="flex justify-center lg:justify-end">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* Fotos Section */}
      <section id="fotos" className="relative min-h-screen py-20 lg:py-32 snap-start snap-always flex flex-col justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-8 font-display text-5xl font-black tracking-[0.2em] text-primary lg:text-7xl">
              FOTOS
            </h2>
          </div>

          <InstagramMockup />

          {/* Instagram CTA */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-xl font-bold tracking-wide text-foreground">
              SIGUE A PÁEZ EN INSTAGRAM
            </p>
            <a
              href="https://instagram.com/paez.of"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-lg font-semibold text-primary transition-all hover:gap-4"
            >
              <Instagram className="h-6 w-6" />
              <span>@PAEZ.OF</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="relative min-h-screen py-20 lg:py-32 snap-start snap-always flex flex-col justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={bioPhoto}
                alt="PÁEZ performing live"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Bio Content */}
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="font-display text-5xl font-black tracking-[0.15em] text-primary lg:text-6xl">
                ¿QUIÉN ES PÁEZ?
              </h2>

              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Andrés Páez, o mejor, PÁEZ, es un cantautor, compositor y productor colombiano
                  nacido en la ciudad de Bogotá en 1990.
                </p>
                <p>
                  Su conexión con la música viene desde el vientre, cuando era parte de las giras
                  de su madre y su abuelo por el país.
                </p>
                <p>
                  Este artista, que abandera un nuevo Pop-Latino, rescata los valores románticos
                  perdidos y las letras de amor olvidadas.
                </p>
                <p>
                  Su más reciente trabajo, CORAZÓN CENIZA, es el primer EP de una trilogía que
                  revelará el ansiado debut discográfico del bogotano.
                </p>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-background sm:w-auto"
                onClick={() => scrollToSection('musica')}
              >
                ESCÚCHALO AHORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="relative min-h-screen py-20 lg:py-32 snap-start snap-always flex flex-col justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h2 className="font-display text-5xl font-black tracking-[0.15em] text-primary lg:text-6xl">
              HOLA, SOY PÁEZ
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Si has conectado con mi música y con mis historias contadas en canciones, te invito a
              suscribirte a esta especie de blog, donde te estaré contando en primicia lo que está
              sucediendo con este sueño, pero también estaré contándote experiencias personales,
              procesos y cualquier locura que crea que tal vez te pueda interesar.
            </p>

            <p className="text-xl font-semibold text-foreground">
              ¡Sé que te va a gustar! Nos vemos dentro.
            </p>

            <div className="pt-8">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contacto" className="relative border-t border-border/50 py-20 lg:py-32 snap-start snap-always">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-5xl font-black tracking-[0.2em] text-primary lg:text-7xl">
              CONTACTO
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Logo */}
            <div className="flex items-center">
              <h3 className="font-display text-7xl font-black tracking-[0.2em] text-primary lg:text-9xl">
                PÁEZ
              </h3>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <a
                href="mailto:oficialpaez@gmail.com"
                className="group flex items-center gap-4 transition-all hover:text-primary"
              >
                <Mail className="h-6 w-6" />
                <span className="text-lg font-medium">OFICIALPAEZ@GMAIL.COM</span>
              </a>

              <a
                href="tel:+573152238194"
                className="group flex items-center gap-4 transition-all hover:text-primary"
              >
                <Phone className="h-6 w-6" />
                <span className="text-lg font-medium">315 223 81 94</span>
              </a>

              <div className="space-y-4 border-t border-border/50 pt-8">
                <a
                  href="#"
                  className="group flex items-center gap-4 text-muted-foreground transition-all hover:text-primary"
                >
                  <Download className="h-5 w-5" />
                  <span className="text-sm font-medium">DESCARGA COMUNICADO DE PRENSA</span>
                </a>

                <a
                  href="#"
                  className="group flex items-center gap-4 text-muted-foreground transition-all hover:text-primary"
                >
                  <Download className="h-5 w-5" />
                  <span className="text-sm font-medium">DESCARGA EPK</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-20 border-t border-border/50 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PÁEZ. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
