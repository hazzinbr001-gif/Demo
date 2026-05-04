import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Zap, TrendingUp, Clock, Shield } from "lucide-react";

export default function Airtime() {
  const [, navigate] = useLocation();

  const rewardTriggers = [
    { trigger: "Registration", amount: "KSh 50", frequency: "One-time", network: "All networks" },
    { trigger: "Rally attendance", amount: "KSh 100", frequency: "Per rally", network: "All networks" },
    { trigger: "Referral registration", amount: "KSh 20", frequency: "Per referral", network: "All networks" },
    { trigger: "Poster share (tracked)", amount: "KSh 10", frequency: "Per share", network: "All networks" },
    { trigger: "Daily check-in", amount: "KSh 5", frequency: "Daily", network: "All networks" },
    { trigger: "Election morning bonus", amount: "KSh 200", frequency: "One-time", network: "All networks" },
  ];

  const networkPartners = [
    { name: "Safaricom", subscribers: "34.2M", coverage: "99.8%", status: "✓ Active" },
    { name: "Airtel", subscribers: "18.7M", coverage: "99.5%", status: "✓ Active" },
    { name: "Telkom", subscribers: "8.4M", coverage: "98.2%", status: "✓ Active" },
  ];

  const stats = [
    { label: "Total Airtime Distributed", value: "KSh 92.3M", change: "+14% this month" },
    { label: "Avg. Per Supporter", value: "KSh 1,240", change: "Lifetime rewards" },
    { label: "Daily Distribution", value: "KSh 2.1M", change: "+8% daily" },
    { label: "Network Coverage", value: "99.8%", change: "All 3 networks" },
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
            <button onClick={() => navigate("/airtime")} className="font-semibold text-accent">
              Airtime Rewards
            </button>
            <button onClick={() => navigate("/requests")} className="text-muted-foreground hover:text-foreground transition">
              Requests
            </button>
            <button onClick={() => navigate("/manifesto")} className="text-muted-foreground hover:text-foreground transition">
              Manifesto
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
            <span className="text-xs font-mono text-accent">AIRTIME REWARDS — THE MOST POWERFUL ENGAGEMENT TOOL</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Airtime Rewards System</h1>
          <p className="text-muted-foreground">Automated. Instant. Works on every network. The most powerful voter engagement tool in the Kenyan market.</p>
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

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Reward Triggers */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Automated Reward Triggers</h2>
            <div className="space-y-3">
              {rewardTriggers.map((item, i) => (
                <div key={i} className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow hover-lift">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{item.trigger}</div>
                      <div className="text-sm text-muted-foreground">{item.frequency}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-lg font-bold text-accent">{item.amount}</div>
                      <div className="text-xs text-muted-foreground">{item.network}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="font-semibold mb-4">How It Works</h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent font-bold">1</span>
                <span>Supporter completes action (register, attend, share)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">2</span>
                <span>System detects action in real-time</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">3</span>
                <span>Airtime triggered automatically</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">4</span>
                <span>Sent to supporter's phone (60 seconds)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">5</span>
                <span>Confirmation SMS with thank you message</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">6</span>
                <span>Reward logged in supporter's history</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Network Partners */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Network Partners</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {networkPartners.map((network, i) => (
              <div key={i} className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{network.name}</h3>
                    <div className="text-sm text-muted-foreground">{network.subscribers} subscribers</div>
                  </div>
                  <div className="text-2xl">{network.status === "✓ Active" ? "✓" : "○"}</div>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Network Coverage</div>
                    <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                      <div className="h-full bg-chart-1" style={{ width: network.coverage }}></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{network.coverage}</div>
                  </div>
                </div>
                <div className="mt-4 text-sm font-semibold text-accent">{network.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <Zap className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Instant Delivery</h3>
            <p className="text-sm text-muted-foreground">Airtime sent within 60 seconds of action completion. Supporters feel the reward immediately.</p>
          </div>

          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <Shield className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Fraud Prevention</h3>
            <p className="text-sm text-muted-foreground">Each supporter can only register once. Duplicate attempts blocked. Full audit trail maintained.</p>
          </div>

          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <TrendingUp className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Budget Control</h3>
            <p className="text-sm text-muted-foreground">Set daily spending limits. Campaign controls exactly how much airtime is distributed.</p>
          </div>
        </div>

        {/* Powered By */}
        <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
          <h2 className="text-2xl font-bold mb-4">Powered by Africa's Talking Airtime API</h2>
          <p className="text-muted-foreground mb-6">
            WinMoja integrates with Africa's Talking's proven airtime distribution API, which powers airtime rewards across East Africa. Reliable, affordable, and trusted by thousands of campaigns and businesses.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              View API Documentation
            </Button>
            <Button variant="outline" className="border-accent/30 text-foreground hover:bg-accent/10">
              Pricing & Rates
            </Button>
            <Button variant="outline" className="border-accent/30 text-foreground hover:bg-accent/10">
              Integration Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
