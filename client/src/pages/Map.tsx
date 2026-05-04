import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { BarChart3, Map as MapIcon, Radio, Users } from "lucide-react";

export default function Map() {
  const [, navigate] = useLocation();

  const wards = [
    { name: "Kegati", support: 88, supporters: 3100, time: "2 min ago", status: "strong" },
    { name: "Nyanchwa", support: 84, supporters: 2700, time: "5 min ago", status: "strong" },
    { name: "Borabu", support: 85, supporters: 2400, time: "1 min ago", status: "strong" },
    { name: "Gesusu", support: 70, supporters: 2100, time: "12 min ago", status: "warning" },
    { name: "Nyaribari", support: 74, supporters: 1850, time: "8 min ago", status: "warning" },
    { name: "Mwembe", support: 72, supporters: 1600, time: "20 min ago", status: "warning" },
    { name: "Manga", support: 60, supporters: 1200, time: "31 min ago", status: "warning" },
    { name: "Suneka", support: 50, supporters: 1050, time: "45 min ago", status: "cold" },
    { name: "Nyanturago", support: 44, supporters: 980, time: "1 hr ago", status: "cold" },
    { name: "Getare", support: 41, supporters: 820, time: "2 hrs ago", status: "cold" },
    { name: "Daraja Mbili", support: 60, supporters: 900, time: "3 hrs ago", status: "warning" },
    { name: "Bogiakumu", support: 30, supporters: 540, time: "4 hrs ago", status: "cold" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "strong":
        return "border-chart-1 bg-chart-1/10";
      case "warning":
        return "border-accent bg-accent/10";
      case "cold":
        return "border-destructive/30 bg-destructive/5";
      default:
        return "border-border/30 bg-card/50";
    }
  };

  const getStatusBadgeColor = (support: number) => {
    if (support >= 80) return "text-chart-1";
    if (support >= 60) return "text-accent";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/30 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => navigate("/")} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-mono font-bold text-accent-foreground">
              W
            </div>
            <span className="font-bold text-lg">WinMoja</span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate("/dashboard")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Command Center
            </button>
            <button onClick={() => navigate("/map")} className="text-sm font-semibold text-accent">
              Live Map
            </button>
            <button onClick={() => navigate("/broadcasts")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Broadcasts
            </button>
            <button onClick={() => navigate("/voters")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Intelligence DB
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 mb-4">
            <div className="w-2 h-2 bg-chart-1 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-accent">LIVE MAP — NYARIBARI CHACHE</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Supporter Intelligence Map</h1>
          <p className="text-muted-foreground">Real-time ward-level support tracking across 12 wards</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Total Supporters</div>
            <div className="font-mono text-2xl font-bold text-accent">19,240</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Strong Wards</div>
            <div className="font-mono text-2xl font-bold text-chart-1">6 / 12</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Needs Attention</div>
            <div className="font-mono text-2xl font-bold text-accent">6 wards</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Active Agents</div>
            <div className="font-mono text-2xl font-bold text-chart-1">156</div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex gap-6 mb-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-chart-1"></div>
            <span className="text-muted-foreground">Strong (6)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <span className="text-muted-foreground">Needs Work (4)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/50"></div>
            <span className="text-muted-foreground">Cold Zone (2)</span>
          </div>
        </div>

        {/* Ward Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wards.map((ward, i) => (
            <div
              key={i}
              className={`p-4 rounded-lg border hover-lift cursor-pointer transition ${getStatusColor(ward.status)} card-glow`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold">{ward.name}</h3>
                  <p className="text-xs text-muted-foreground">{ward.supporters.toLocaleString()} supporters</p>
                </div>
                <div className={`font-mono text-lg font-bold ${getStatusBadgeColor(ward.support)}`}>
                  {ward.support}%
                </div>
              </div>
              
              {/* Support bar */}
              <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden mb-3">
                <div
                  className={`h-full transition-all ${
                    ward.support >= 80 ? "bg-chart-1" :
                    ward.support >= 60 ? "bg-accent" :
                    "bg-destructive/50"
                  }`}
                  style={{ width: `${ward.support}%` }}
                ></div>
              </div>
              
              <div className="text-xs text-muted-foreground">{ward.time}</div>
            </div>
          ))}
        </div>

        {/* Action Panel */}
        <div className="mt-12 p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
          <h2 className="text-2xl font-bold mb-4">Cold Zone Strategy</h2>
          <p className="text-muted-foreground mb-6">
            Suneka and Bogiakumu are currently cold zones with low support. Immediate ground presence and targeted messaging recommended.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Deploy Agents to Cold Zones
            </Button>
            <Button variant="outline" className="border-accent/30 text-foreground hover:bg-accent/10">
              View Detailed Analytics
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
