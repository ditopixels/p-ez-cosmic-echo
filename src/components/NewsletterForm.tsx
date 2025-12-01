import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

export const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    country: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-newsletter-welcome', {
        body: formData,
      });

      if (error) {
        console.error('Error subscribing:', error);
        toast.error(error.message || 'Error al procesar la suscripción');
        return;
      }

      console.log('Newsletter subscription successful:', data);
      toast.success('¡Gracias por suscribirte!', {
        description: 'Revisa tu correo para confirmar tu suscripción.',
      });
      setFormData({ email: '', name: '', country: '' });
    } catch (error: any) {
      console.error('Error in newsletter submission:', error);
      toast.error('Error de conexión. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl space-y-8">
      <div className="space-y-6">
        {/* Email */}
        <div className="group">
          <input
            type="email"
            placeholder="E-MAIL*"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border-b-2 border-border/50 bg-transparent py-3 text-sm tracking-wider text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>

        {/* Name */}
        <div className="group">
          <input
            type="text"
            placeholder="NOMBRE*"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border-b-2 border-border/50 bg-transparent py-3 text-sm tracking-wider text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>

        {/* Country */}
        <div className="group">
          <input
            type="text"
            placeholder="PAÍS*"
            required
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full border-b-2 border-border/50 bg-transparent py-3 text-sm tracking-wider text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="outline"
        disabled={isSubmitting}
        className="w-full border-2 border-primary bg-transparent py-6 text-sm font-bold tracking-widest text-primary transition-all hover:bg-primary hover:text-background disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto sm:px-12"
      >
        {isSubmitting ? 'ENVIANDO...' : 'SUSCRÍBETE'}
      </Button>
    </form>
  );
};
