import { Play, Volume2, Settings } from 'lucide-react';
import videoThumbnail from '@/assets/postervideo.jpg';

export const VideoPlayer = () => {
  return (
    <div className="group relative w-full max-w-4xl overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
      {/* Video Thumbnail */}
      <div className="relative aspect-video w-full">
        <img
          src={videoThumbnail}
          alt="Con Tus Maletas Music Video"
          className="h-full w-full object-cover"
          loading="lazy"
        />

        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all group-hover:bg-black/50">
          <button
            className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary bg-background/10 backdrop-blur-sm transition-all hover:scale-110 hover:border-primary/80 hover:bg-primary/20"
            onClick={() => window.open('https://www.youtube.com/watch?v=4tchniGGPAg', '_blank')}
            aria-label="Play video"
          >
            <Play className="h-8 w-8 fill-primary text-primary" />
          </button>
        </div>

        {/* Video Controls Overlay (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center gap-4">
            <button className="transition-all hover:scale-110 hover:text-primary">
              <Play className="h-5 w-5" />
            </button>
            <div className="h-1 flex-1 rounded-full bg-border/50">
              <div className="h-full w-1/3 rounded-full bg-primary"></div>
            </div>
            <button className="transition-all hover:scale-110 hover:text-primary">
              <Volume2 className="h-5 w-5" />
            </button>
            <button className="transition-all hover:scale-110 hover:text-primary">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
