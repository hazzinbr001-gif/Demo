import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Download, Bell, Smartphone, Zap, Lock, Share2 } from "lucide-react";

export default function PWA() {
  const [, navigate] = useLocation();

  const features = [
    { icon: "📱", title: "Install Directly", desc: "No App Store. One tap to home screen." },
    { icon: "⚡", title: "Lightning Fast", desc: "Works offline. Instant load times." },
    { icon: "🔔", title: "Push Notifications", desc: "Real-time alerts for every update." },
    { icon: "📊", title: "Personal Dashboard", desc: "Ward, referrals, rewards, all in one place." },
    { icon: "🔒", title: "Secure & Private", desc: "End-to-end encrypted. Your data is yours." },
    { icon: "🎯", title: "Campaign Content", desc: "Manifestos, speeches, rally info." },
  ];

  const stats = [
    { label: "Active Users", value: "3.2M", change: "+18% this week" },
    { label: "Daily Active", value: "1.8M", change: "+12% this week" },
    { label: "Avg. Session", value: "14.3m", change: "Per user" },
    { label: "Offline Usage", value: "42%", change: "Of all sessions" },
  ];

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
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => navigate("/dashboard")} className="text-muted-foreground hover:text-foreground transition">
              Dashboard
            </button>
            <button onClick={() => navigate("/ussd")} className="text-muted-foreground hover:text-foreground transition">
              USSD Platform
            </button>
            <button onClick={() => navigate("/pwa")} className="font-semibold text-accent">
              PWA App
            </button>
            <button onClick={() => navigate("/posters")} className="text-muted-foreground hover:text-foreground transition">
              Poster Engine
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
            <span className="text-xs font-mono text-accent">PWA MOBILE APP — ONE APP. EVERY DEVICE.</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">PWA Mobile App</h1>
          <p className="text-muted-foreground">No App Store. No downloads. No updates. Just install and go.</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
              <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className="font-mono text-2xl font-bold text-accent">{stat.value}</div>
              <div className="text-xs text-chart-1 mt-1">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">App Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow hover-lift">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Guide */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="text-xl font-bold mb-6">How to Install (iOS)</h3>
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">1</span>
                <span>Open Safari and visit the campaign website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">2</span>
                <span>Tap the Share button (↑)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">3</span>
                <span>Select "Add to Home Screen"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">4</span>
                <span>Tap "Add" in the top right</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">5</span>
                <span>App appears on home screen instantly</span>
              </li>
            </ol>
          </div>

          <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="text-xl font-bold mb-6">How to Install (Android)</h3>
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">1</span>
                <span>Open Chrome and visit the campaign website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">2</span>
                <span>Tap the menu (⋮) in the top right</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">3</span>
                <span>Select "Install app"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">4</span>
                <span>Tap "Install"</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">5</span>
                <span>App appears on home screen instantly</span>
              </li>
            </ol>
          </div>
        </div>

        {/* App Screens */}
        <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
          <h3 className="text-xl font-bold mb-6">App Experience</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-background/50 border border-border/30">
              <div className="text-center mb-3">
                <div className="w-16 h-32 mx-auto bg-gradient-to-b from-accent/20 to-background/50 rounded-lg border border-accent/30 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-center">Personal Dashboard</div>
              <div className="text-xs text-muted-foreground text-center mt-1">Your ward, referrals, rewards</div>
            </div>

            <div className="p-4 rounded-lg bg-background/50 border border-border/30">
              <div className="text-center mb-3">
                <div className="w-16 h-32 mx-auto bg-gradient-to-b from-accent/20 to-background/50 rounded-lg border border-accent/30 flex items-center justify-center">
                  <span className="text-2xl">📢</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-center">Live Broadcasts</div>
              <div className="text-xs text-muted-foreground text-center mt-1">Instant push notifications</div>
            </div>

            <div className="p-4 rounded-lg bg-background/50 border border-border/30">
              <div className="text-center mb-3">
                <div className="w-16 h-32 mx-auto bg-gradient-to-b from-accent/20 to-background/50 rounded-lg border border-accent/30 flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-center">Manifesto</div>
              <div className="text-xs text-muted-foreground text-center mt-1">Policy positions & speeches</div>
            </div>

            <div className="p-4 rounded-lg bg-background/50 border border-border/30">
              <div className="text-center mb-3">
                <div className="w-16 h-32 mx-auto bg-gradient-to-b from-accent/20 to-background/50 rounded-lg border border-accent/30 flex items-center justify-center">
                  <span className="text-2xl">🎉</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-center">Rewards</div>
              <div className="text-xs text-muted-foreground text-center mt-1">Airtime, bonuses, recognition</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
          <h2 className="text-2xl font-bold mb-4">Ready to Install?</h2>
          <p className="text-muted-foreground mb-6">
            The WinMoja PWA works on any smartphone—iOS or Android. No App Store approval needed. No storage limits. No forced updates. Just pure, fast campaign engagement.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Download className="w-4 h-4 mr-2" />
            Get Installation Link
          </Button>
        </div>
      </div>
    </div>
  );
}
