"use client";

export function GeometryDiagram() {
  return (
    <svg
      viewBox="0 0 500 400"
      className="w-full max-w-md text-muted/40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {/* Frame outline */}
      {/* Head tube */}
      <line x1="355" y1="75" x2="330" y2="245" strokeWidth="2" className="text-muted/50" />
      {/* Top tube */}
      <line x1="355" y1="75" x2="195" y2="90" strokeWidth="2" className="text-muted/50" />
      {/* Down tube */}
      <line x1="330" y1="120" x2="220" y2="280" strokeWidth="2" className="text-muted/50" />
      {/* Seat tube */}
      <line x1="195" y1="90" x2="220" y2="280" strokeWidth="2" className="text-muted/50" />
      {/* Chainstay */}
      <line x1="220" y1="280" x2="115" y2="290" strokeWidth="2" className="text-muted/50" />
      {/* Seatstay */}
      <line x1="195" y1="115" x2="115" y2="290" strokeWidth="2" className="text-muted/50" />

      {/* Front wheel */}
      <circle cx="370" cy="290" r="85" strokeWidth="1" className="text-muted/25" />
      <circle cx="370" cy="290" r="2" fill="currentColor" />
      {/* Rear wheel */}
      <circle cx="115" cy="290" r="85" strokeWidth="1" className="text-muted/25" />
      <circle cx="115" cy="290" r="2" fill="currentColor" />

      {/* Fork */}
      <line x1="330" y1="245" x2="370" y2="290" strokeWidth="2" className="text-muted/50" />

      {/* BB point */}
      <circle cx="220" cy="280" r="4" fill="currentColor" className="text-accent/60" />

      {/* Measurement labels */}
      {/* A - Seat Tube */}
      <circle cx="195" cy="90" r="10" fill="none" className="text-accent/80" strokeWidth="1.5" />
      <text x="195" y="94" textAnchor="middle" className="text-accent fill-current" fontSize="10" fontWeight="bold">A</text>

      {/* B - Top Tube */}
      <circle cx="275" cy="75" r="10" fill="none" className="text-accent/80" strokeWidth="1.5" />
      <text x="275" y="79" textAnchor="middle" className="text-accent fill-current" fontSize="10" fontWeight="bold">B</text>

      {/* C - Head Tube */}
      <circle cx="355" cy="75" r="10" fill="none" className="text-accent/80" strokeWidth="1.5" />
      <text x="355" y="79" textAnchor="middle" className="text-accent fill-current" fontSize="10" fontWeight="bold">C</text>

      {/* D - Head Angle */}
      <circle cx="385" cy="245" r="10" fill="none" className="text-accent/80" strokeWidth="1.5" />
      <text x="385" y="249" textAnchor="middle" className="text-accent fill-current" fontSize="10" fontWeight="bold">D</text>

      {/* E - Seat Angle */}
      <circle cx="205" cy="185" r="10" fill="none" className="text-accent/80" strokeWidth="1.5" />
      <text x="205" y="189" textAnchor="middle" className="text-accent fill-current" fontSize="10" fontWeight="bold">E</text>

      {/* F - Chainstay */}
      <circle cx="167" cy="292" r="10" fill="none" className="text-accent/80" strokeWidth="1.5" />
      <text x="167" y="296" textAnchor="middle" className="text-accent fill-current" fontSize="10" fontWeight="bold">F</text>

      {/* G - BB Height */}
      <circle cx="220" cy="320" r="10" fill="none" className="text-accent/80" strokeWidth="1.5" />
      <text x="220" y="324" textAnchor="middle" className="text-accent fill-current" fontSize="10" fontWeight="bold">G</text>

      {/* Dimension lines */}
      {/* Reach */}
      <line x1="220" y1="42" x2="355" y2="42" strokeDasharray="3,3" className="text-accent/40" />
      <text x="288" y="37" textAnchor="middle" className="text-accent/70 fill-current" fontSize="9">REACH</text>

      {/* Stack */}
      <line x1="420" y1="75" x2="420" y2="280" strokeDasharray="3,3" className="text-accent/40" />
      <text x="445" y="178" textAnchor="middle" className="text-accent/70 fill-current" fontSize="9" transform="rotate(90, 445, 178)">STACK</text>

      {/* Wheelbase */}
      <line x1="115" y1="388" x2="370" y2="388" strokeDasharray="3,3" className="text-accent/40" />
      <text x="242" y="383" textAnchor="middle" className="text-accent/70 fill-current" fontSize="9">WHEELBASE</text>

      {/* Ground line */}
      <line x1="20" y1="375" x2="460" y2="375" strokeWidth="0.5" className="text-muted/20" />
    </svg>
  );
}
