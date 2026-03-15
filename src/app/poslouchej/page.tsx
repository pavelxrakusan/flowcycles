export const metadata = {
  title: "Něco k poslechu | Flowcycles",
  description: "Playlist z bike studia. Hudba, která hraje, když stavíme kola.",
};

export default function SpotifyPage() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <p className="text-accent text-sm font-semibold uppercase tracking-[0.25em] mb-4">
          Něco k poslechu
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-[0.95] mb-6">
          Brnkněte mi
        </h1>
        <p className="text-muted text-lg leading-relaxed mb-12">
          Jsem hudební nadšenec — v bike studiu poslouchám nejradši tyhle pecky.
          Snad se vám zalíbí!
        </p>

        {/* Spotify Playlist Embed */}
        <div className="space-y-8">
          <div className="bg-surface border border-border p-1">
            <iframe
              style={{ borderRadius: 0 }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
              width="100%"
              height="552"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            />
          </div>

          {/* Pivot Podcast */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-tight mb-4">
              Pivot Podcast
            </h2>
            <p className="text-muted text-sm mb-4">
              Příběhy ze zákulisí Pivot Cycles — rozhovory s jezdci, inženýry a
              lidmi, kteří stojí za těmi nejlepšími koly na světě.
            </p>
            <div className="bg-surface border border-border p-1">
              <iframe
                style={{ borderRadius: 0 }}
                src="https://open.spotify.com/embed/show/4gZCGnDPRYPqjQyBvMFcar?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Pivot Podcast"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
