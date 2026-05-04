import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, BarChart3, Map, Radio, Users } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/30 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-mono font-bold text-accent-foreground">
              W
            </div>
            <span className="font-bold text-lg">WinMoja</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate("/dashboard")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Command Center
            </button>
            <button onClick={() => navigate("/map")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Live Map
            </button>
            <button onClick={() => navigate("/broadcasts")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Broadcasts
            </button>
            <button onClick={() => navigate("/voters")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Intelligence DB
            </button>
          </div>
          <Button onClick={() => navigate("/dashboard")} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Request Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent"></div>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-accent"/>
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            {/* Live indicator */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
              <div className="w-2 h-2 bg-chart-1 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-accent">Live: Kenya 2027 Election Ready</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">The Political</span>
              <br />
              <span className="text-accent">Super-App</span>
              <br />
              <span className="text-foreground">That Wins Elections.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Precision, intelligence, and automation — deployed at the ward level, trusted at the national level. Stop guessing. Start winning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                onClick={() => navigate("/dashboard")}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
              >
                Access Command Center
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent/30 text-foreground hover:bg-accent/10"
              >
                View Full Platform
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div>
                <div className="font-mono text-3xl font-bold text-accent mb-2">290</div>
                <div className="text-sm text-muted-foreground">Constituencies Ready</div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-accent mb-2">1</div>
                <div className="text-sm text-muted-foreground">Unified Platform</div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-chart-1 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Live Intelligence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16">Platform Capabilities</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, title: "Command Center", desc: "Live campaign intelligence dashboard" },
              { icon: Map, title: "Live Map", desc: "Real-time supporter tracking by ward" },
              { icon: Radio, title: "Broadcasts", desc: "Instant message delivery to all supporters" },
              { icon: Users, title: "Voter Database", desc: "Complete constituent management system" },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border/30 bg-card/50 hover-lift card-glow group"
              >
                <feature.icon className="w-8 h-8 text-accent mb-4 group-hover:text-chart-1 transition" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 border-t border-border/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16">Investment Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "KSh 150,000", features: ["Voter Database", "USSD Platform", "Request Tracker", "Basic Analytics"] },
              { name: "Standard", price: "KSh 300,000", features: ["Everything in Starter", "PWA App", "Broadcast Channel", "Manifesto Engine"] },
              { name: "Premium", price: "KSh 500,000", features: ["Everything in Standard", "Viral Poster Engine", "Airtime Rewards", "Election Day Automation"], highlight: true },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`p-8 rounded-lg border ${
                  pkg.highlight
                    ? "border-accent bg-accent/10 card-glow"
                    : "border-border/30 bg-card/50 hover-lift"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="font-mono text-3xl text-accent mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={pkg.highlight ? "default" : "outline"}>
                  {pkg.highlight ? "Deploy Now" : "Select Plan"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-12 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold mb-4">WinMoja</div>
              <p className="text-sm text-muted-foreground">The political super-app that wins elections.</p>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Product</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => navigate("/dashboard")} className="hover:text-foreground transition">Dashboard</button></li>
                <li><button onClick={() => navigate("/map")} className="hover:text-foreground transition">Live Map</button></li>
                <li><button onClick={() => navigate("/broadcasts")} className="hover:text-foreground transition">Broadcasts</button></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Company</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">About</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition">Privacy</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Contact</div>
              <p className="text-sm text-muted-foreground">Atandi Brian</p>
              <p className="text-sm text-muted-foreground">0112973866</p>
              <p className="text-sm text-muted-foreground">brianhazzin816@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-border/30 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 WinMoja. All rights reserved. Kenya 2027 Election Platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
