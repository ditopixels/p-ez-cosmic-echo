import { useState } from 'react';
import { Menu, X, Music, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'MÚSICA', id: 'musica' },
    { label: 'VIDEOS', id: 'videos' },
    { label: 'FOTOS', id: 'fotos' },
    { label: 'QUIÉN ES PÁEZ', id: 'bio' },
    { label: 'CONTACTO', id: 'contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-black tracking-widest text-primary transition-all hover:scale-105 hover:text-primary/80"
          >
            PÁEZ
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium tracking-wider text-foreground/80 transition-all hover:text-primary"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Icons & Join Button */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110 hover:text-primary"
                aria-label="Spotify"
              >
                <Music className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/paez_of"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110 hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110 hover:text-primary"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="hidden border-primary text-primary hover:bg-primary hover:text-background md:inline-flex"
              onClick={() => scrollToSection('newsletter')}
            >
              JOIN
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border/50 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-sm font-medium tracking-wider text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="outline"
                className="mt-2 w-full border-primary text-primary hover:bg-primary hover:text-background"
                onClick={() => scrollToSection('newsletter')}
              >
                JOIN
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};