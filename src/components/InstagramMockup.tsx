import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import igPost from '@/assets/ig-post.jpg';

const instagramPhotos = [
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1520256409361-fa4f074c1d5e?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=250&h=250&fit=crop',
  'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=250&h=250&fit=crop',
];

export const InstagramMockup = () => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
      {/* Phone Mockup */}
      <div className="mx-auto w-full max-w-sm">
        <div className="overflow-hidden rounded-3xl border-8 border-muted bg-background shadow-2xl">
          {/* Instagram Post */}
          <div className="bg-background">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border/50 p-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/50"></div>
              <div className="flex-1">
                <p className="text-sm font-semibold">paez.of</p>
                <p className="text-xs text-muted-foreground">Music Artist</p>
              </div>
            </div>

            {/* Image */}
            <div className="aspect-square w-full bg-muted">
              <img
                src={igPost}
                alt="PÁEZ Instagram Post"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Actions */}
            <div className="space-y-2 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Heart className="h-6 w-6 transition-all hover:scale-110 hover:text-destructive" />
                  <MessageCircle className="h-6 w-6 transition-all hover:scale-110" />
                  <Send className="h-6 w-6 transition-all hover:scale-110" />
                </div>
                <Bookmark className="h-6 w-6 transition-all hover:scale-110" />
              </div>
              <p className="text-xs">
                <span className="font-semibold">2,847 likes</span>
              </p>
              <p className="text-xs">
                <span className="font-semibold">paez.of</span> Nueva música próximamente...
                🔥
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-1">
          {instagramPhotos.map((photo, index) => (
            <div key={index} className="aspect-square overflow-hidden bg-muted">
              <img
                src={photo}
                alt={`Instagram Photo ${index + 1}`}
                className="h-full w-full object-cover transition-all hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
