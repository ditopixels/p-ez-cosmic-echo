import { Play, Music } from 'lucide-react';
import albumCover from '@/assets/album-cover.jpg';

const tracks = [
  { number: 1, title: 'CON TUS MALETAS', artist: 'Páez' },
  { number: 2, title: 'TR3S SEMANAS', artist: 'Páez' },
  { number: 3, title: 'CICATRICES', artist: 'Páez' },
];

export const MusicPlayer = () => {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
      {/* Album Header */}
      <div className="flex items-center gap-4 border-b border-border/50 bg-card/30 p-4">
        <img
          src={albumCover}
          alt="Corazón Ceniza Album Cover"
          className="h-16 w-16 rounded object-cover"
        />
        <div className="flex-1">
          <h4 className="text-sm font-bold tracking-wide text-foreground">CORAZÓN CENIZA</h4>
          <p className="text-xs text-muted-foreground">EP • 2024</p>
        </div>
        <Music className="h-5 w-5 text-primary" />
      </div>

      {/* Tracklist */}
      <div className="p-2">
        {tracks.map((track) => (
          <button
            key={track.number}
            className="group flex w-full items-center gap-4 rounded-md p-3 transition-all hover:bg-muted/50"
            onClick={() => console.log(`Playing: ${track.title}`)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 transition-all group-hover:border-primary group-hover:bg-primary/10">
              <Play className="h-4 w-4 fill-current text-foreground transition-colors group-hover:text-primary" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold tracking-wide">{track.title}</p>
              <p className="text-xs text-muted-foreground">{track.artist}</p>
            </div>
            <span className="text-xs text-muted-foreground">{track.number}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
