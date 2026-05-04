import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Smartphone, Radio, Phone, MessageSquare } from "lucide-react";

export default function USSD() {
  const [, navigate] = useLocation();

  const ussdCodes = [
    { code: "*123#", action: "Register as Supporter", network: "Safaricom", users: "2.3M" },
    { code: "*456#", action: "Check Request Status", network: "Airtel", users: "1.8M" },
    { code: "*789#", action: "Get Campaign Updates", network: "Telkom", users: "890K" },
    { code: "*321#", action: "Claim Airtime Reward", network: "All Networks", users: "4.1M" },
  ];

  const networkStats = [
    { name: "Safaricom", subscribers: "34.2M", penetration: "68%", ussdUsers: "2.3M" },
    { name: "Airtel", subscribers: "18.7M", penetration: "37%", ussdUsers: "1.8M" },
    { name: "Telkom", subscribers: "8.4M", penetration: "17%", ussdUsers: "890K" },
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
            <button onClick={() => navigate("/ussd")} className="font-semibold text-accent">
              USSD Platform
            </button>
            <button onClick={() => navigate("/pwa")} className="text-muted-foreground hover:text-foreground transition">
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
            <span className="text-xs font-mono text-accent">USSD PLATFORM — FEATURE PHONE ACCESS</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">USSD Platform</h1>
          <p className="text-muted-foreground">Reach every voter — even on the oldest Kabambe phone. No internet required.</p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Total USSD Users</div>
            <div className="font-mono text-2xl font-bold text-accent">5.1M</div>
            <div className="text-xs text-muted-foreground mt-1">Active registrations</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Daily Transactions</div>
            <div className="font-mono text-2xl font-bold text-chart-1">340K</div>
            <div className="text-xs text-muted-foreground mt-1">Avg. daily</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Network Coverage</div>
            <div className="font-mono text-2xl font-bold text-accent">99.8%</div>
            <div className="text-xs text-muted-foreground mt-1">All major networks</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Avg. Response Time</div>
            <div className="font-mono text-2xl font-bold text-chart-1">2.3s</div>
            <div className="text-xs text-muted-foreground mt-1">Per transaction</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* USSD Codes */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Active USSD Codes</h2>
            <div className="space-y-4">
              {ussdCodes.map((item, i) => (
                <div key={i} className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="font-mono text-2xl font-bold text-accent mb-2">{item.code}</div>
                      <div className="text-lg font-semibold">{item.action}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{item.network}</div>
                      <div className="font-mono text-lg font-bold text-chart-1">{item.users} users</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Phone className="w-3 h-3 mr-1" />
                      Test Code
                    </Button>
                    <Button size="sm" variant="outline" className="border-border/30 text-foreground hover:bg-accent/10">
                      View Analytics
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Network Coverage */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
              <h3 className="font-semibold mb-4">Network Coverage</h3>
              <div className="space-y-4">
                {networkStats.map((network, i) => (
                  <div key={i} className="pb-4 border-b border-border/30 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-sm">{network.name}</div>
                      <div className="text-xs font-mono text-accent">{network.ussdUsers}</div>
                    </div>
                    <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full bg-chart-1"
                        style={{ width: `${(parseInt(network.ussdUsers) / 5100000) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground">{network.subscribers} subscribers • {network.penetration} market share</div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
              <h3 className="font-semibold mb-4">How It Works</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">1.</span>
                  <span>Voter dials *123# on any phone</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">2.</span>
                  <span>Menu appears instantly (no internet)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">3.</span>
                  <span>Select action (register, check status, etc.)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">4.</span>
                  <span>Data captured automatically</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">5.</span>
                  <span>Confirmation SMS sent instantly</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Integration Info */}
        <div className="mt-12 p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
          <h2 className="text-2xl font-bold mb-4">Powered by Africa's Talking</h2>
          <p className="text-muted-foreground mb-6">
            WinMoja USSD integrates with Africa's Talking API, providing reliable, affordable access to Safaricom, Airtel, and Telkom networks across Kenya. Works on every phone—from the latest smartphone to basic Kabambe devices.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              View API Docs
            </Button>
            <Button variant="outline" className="border-accent/30 text-foreground hover:bg-accent/10">
              Integration Guide
            </Button>
            <Button variant="outline" className="border-accent/30 text-foreground hover:bg-accent/10">
              Network Status
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
