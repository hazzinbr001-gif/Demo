import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { MapPin, BarChart3, AlertCircle, Zap } from "lucide-react";

export default function Election() {
  const [, navigate] = useLocation();

  const pollingStations = [
    { station: "Kegati Primary School", ward: "Kegati", agent: "Samuel Kerongo", status: "✓ Active", votes: "340/400", lastUpdate: "2 min ago" },
    { station: "Nyanchwa Secondary", ward: "Nyanchwa", agent: "Mary Nyaboke", status: "✓ Active", votes: "285/350", lastUpdate: "1 min ago" },
    { station: "Borabu Community Hall", ward: "Borabu", agent: "Eric Otieno", status: "✓ Active", votes: "210/280", lastUpdate: "3 min ago" },
    { station: "Gesusu Market", ward: "Gesusu", agent: "Grace Kipchoge", status: "⚠ Delayed", votes: "156/220", lastUpdate: "8 min ago" },
    { station: "Nyaribari Health Center", ward: "Nyaribari", agent: "David Mwangi", status: "✓ Active", votes: "198/300", lastUpdate: "1 min ago" },
  ];

  const stats = [
    { label: "Polling Stations", value: "47", change: "All active" },
    { label: "Total Votes Cast", value: "8,340", change: "Real-time count" },
    { label: "Avg. Turnout", value: "72.4%", change: "By ward" },
    { label: "Issues Reported", value: "2", change: "All resolved" },
  ];

  const wardResults = [
    { ward: "Kegati", votes: 1240, percentage: 28, agents: 18 },
    { ward: "Nyanchwa", votes: 1080, percentage: 24, agents: 15 },
    { ward: "Borabu", votes: 890, percentage: 20, agents: 14 },
    { ward: "Gesusu", votes: 680, percentage: 15, agents: 12 },
    { ward: "Nyaribari", votes: 450, percentage: 13, agents: 11 },
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
            <button onClick={() => navigate("/agents")} className="text-muted-foreground hover:text-foreground transition">
              Agents
            </button>
            <button onClick={() => navigate("/finance")} className="text-muted-foreground hover:text-foreground transition">
              Finance
            </button>
            <button onClick={() => navigate("/election")} className="font-semibold text-accent">
              Election Day
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
            <span className="text-xs font-mono text-accent">ELECTION DAY AUTOMATION — LIVE RESULTS IN REAL-TIME</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Election Day Command Center</h1>
          <p className="text-muted-foreground">Live vote counting. Real-time agent coordination. Instant issue resolution. Know your results before IEBC announces them.</p>
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
          {/* Polling Stations */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Live Polling Station Status</h2>
            <div className="space-y-3">
              {pollingStations.map((station, i) => (
                <div key={i} className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow hover-lift">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{station.station}</h3>
                      <div className="text-sm text-muted-foreground">{station.ward} Ward • Agent: {station.agent}</div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-semibold ${
                      station.status.includes("Active") 
                        ? "bg-chart-1/20 text-chart-1" 
                        : "bg-destructive/20 text-destructive"
                    }`}>
                      {station.status}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Votes Counted</span>
                        <span className="font-mono font-bold text-accent">{station.votes}</span>
                      </div>
                      <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent"
                          style={{ width: `${(parseInt(station.votes.split('/')[0]) / parseInt(station.votes.split('/')[1])) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground ml-4">{station.lastUpdate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ward Results */}
          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="font-semibold mb-4">Results by Ward</h3>
            <div className="space-y-4">
              {wardResults.map((ward, i) => (
                <div key={i} className="pb-4 border-b border-border/30 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-sm">{ward.ward}</div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-accent">{ward.votes}</div>
                      <div className="text-xs text-muted-foreground">{ward.agents} agents</div>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-chart-1"
                      style={{ width: `${ward.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{ward.percentage}% of total</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
            <MapPin className="w-8 h-8 text-accent mb-3" />
            <h3 className="text-xl font-bold mb-4">Live Agent Coordination</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Assign agents to polling stations</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Real-time GPS tracking of all agents</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Instant SMS check-ins throughout day</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Alert system for any issues</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Send instructions to agents instantly</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
            <BarChart3 className="w-8 h-8 text-accent mb-3" />
            <h3 className="text-xl font-bold mb-4">Live Vote Counting</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Agents submit vote counts via SMS/app</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Votes aggregated in real-time</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Live results dashboard updates every minute</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Know results before IEBC announces</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Export full audit trail</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How It Works */}
        <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow mb-12">
          <h3 className="text-xl font-bold mb-6">Election Day Workflow</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent mx-auto mb-3">
                1
              </div>
              <h4 className="font-semibold mb-2">Pre-Election</h4>
              <p className="text-sm text-muted-foreground">Assign agents to polling stations. Brief them on procedures.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent mx-auto mb-3">
                2
              </div>
              <h4 className="font-semibold mb-2">Morning Check-in</h4>
              <p className="text-sm text-muted-foreground">Agents confirm arrival at polling stations via SMS.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent mx-auto mb-3">
                3
              </div>
              <h4 className="font-semibold mb-2">Live Counting</h4>
              <p className="text-sm text-muted-foreground">Agents submit vote counts every hour. Real-time aggregation.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent mx-auto mb-3">
                4
              </div>
              <h4 className="font-semibold mb-2">Final Results</h4>
              <p className="text-sm text-muted-foreground">Know your results before IEBC announces. Full transparency.</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <Zap className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Instant Alerts</h3>
            <p className="text-sm text-muted-foreground">Any issues at polling stations? Get instant SMS alerts. Resolve immediately.</p>
          </div>

          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <AlertCircle className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Full Transparency</h3>
            <p className="text-sm text-muted-foreground">Every vote counted. Every agent tracked. Full audit trail. No disputes.</p>
          </div>

          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <BarChart3 className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Competitive Edge</h3>
            <p className="text-sm text-muted-foreground">Know your results first. Plan your next moves before opponents know theirs.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
          <h2 className="text-2xl font-bold mb-4">Control Election Day Like Never Before</h2>
          <p className="text-muted-foreground mb-6">
            From agent coordination to live vote counting, the Election Day Command Center gives you complete control and visibility. Know your results in real-time. No surprises.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            View Election Day Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
