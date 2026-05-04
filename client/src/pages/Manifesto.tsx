import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Share2, Download, TrendingUp } from "lucide-react";

export default function Manifesto() {
  const [, navigate] = useLocation();

  const policyAreas = [
    { icon: "🎓", title: "Education", pledges: 8, status: "In Progress", completion: 62 },
    { icon: "🏥", title: "Healthcare", pledges: 6, status: "In Progress", completion: 58 },
    { icon: "🛣️", title: "Infrastructure", pledges: 5, status: "In Progress", completion: 45 },
    { icon: "💧", title: "Water & Sanitation", pledges: 4, status: "In Progress", completion: 71 },
    { icon: "👨‍💼", title: "Youth Employment", pledges: 7, status: "In Progress", completion: 38 },
    { icon: "🔒", title: "Security", pledges: 3, status: "In Progress", completion: 52 },
  ];

  const pledges = [
    { id: 1, category: "Education", pledge: "Build 5 new primary schools in underserved areas", status: "In Progress", progress: 60, target: "By June 2027" },
    { id: 2, category: "Healthcare", pledge: "Establish health clinics in all 12 wards", status: "In Progress", progress: 50, target: "By March 2027" },
    { id: 3, category: "Water", pledge: "Provide clean water to 10,000 households", status: "In Progress", progress: 75, target: "By August 2027" },
    { id: 4, category: "Youth", pledge: "Create 500 youth employment opportunities", status: "In Progress", progress: 35, target: "By December 2026" },
    { id: 5, category: "Infrastructure", pledge: "Rehabilitate 20km of rural roads", status: "In Progress", progress: 40, target: "By September 2027" },
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
            <button onClick={() => navigate("/airtime")} className="text-muted-foreground hover:text-foreground transition">
              Airtime
            </button>
            <button onClick={() => navigate("/requests")} className="text-muted-foreground hover:text-foreground transition">
              Requests
            </button>
            <button onClick={() => navigate("/manifesto")} className="font-semibold text-accent">
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
            <span className="text-xs font-mono text-accent">MANIFESTO & POLICY ENGINE — LIVE PROMISE TRACKER</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Manifesto & Policy Engine</h1>
          <p className="text-muted-foreground">Your manifesto is not a PDF. It's a living, shareable, trackable platform. Show exactly which promises you're keeping.</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Total Pledges</div>
            <div className="font-mono text-2xl font-bold text-accent">33</div>
            <div className="text-xs text-chart-1 mt-1">Across 6 policy areas</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">In Progress</div>
            <div className="font-mono text-2xl font-bold text-chart-1">28</div>
            <div className="text-xs text-chart-1 mt-1">Actively being delivered</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Completed</div>
            <div className="font-mono text-2xl font-bold text-accent">5</div>
            <div className="text-xs text-chart-1 mt-1">Fulfilled promises</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Avg. Progress</div>
            <div className="font-mono text-2xl font-bold text-chart-1">54.3%</div>
            <div className="text-xs text-chart-1 mt-1">Overall manifesto</div>
          </div>
        </div>

        {/* Policy Areas */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Policy Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {policyAreas.map((area, i) => (
              <div key={i} className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow hover-lift">
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{area.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{area.pledges} pledges</span>
                    <span className="text-accent font-semibold">{area.completion}%</span>
                  </div>
                  <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent"
                      style={{ width: `${area.completion}%` }}
                    ></div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full border-border/30 text-foreground hover:bg-accent/10">
                  View Pledges
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Pledge Tracker */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Live Promise Tracker</h2>
          <div className="space-y-4">
            {pledges.map((pledge) => (
              <div key={pledge.id} className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block px-2 py-1 rounded text-xs font-semibold bg-accent/10 text-accent mb-2">
                      {pledge.category}
                    </div>
                    <h3 className="font-semibold text-lg">{pledge.pledge}</h3>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-2xl font-bold text-accent">{pledge.progress}%</div>
                    <div className="text-xs text-muted-foreground">{pledge.target}</div>
                  </div>
                </div>
                <div className="w-full h-3 bg-background/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-chart-1"
                    style={{ width: `${pledge.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <Share2 className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Shareable Policy Cards</h3>
            <p className="text-sm text-muted-foreground">Each policy point is a branded image card. Supporters share on WhatsApp, Facebook, Twitter. Trackable.</p>
          </div>

          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <TrendingUp className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Progress Tracking</h3>
            <p className="text-sm text-muted-foreground">Show exactly what % of each promise is complete. Update in real-time. Supporters see your progress.</p>
          </div>

          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <Download className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Post-Election Proof</h3>
            <p className="text-sm text-muted-foreground">After election, show which pledges were fulfilled. Proof of delivery for your next campaign.</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow mb-12">
          <h3 className="text-xl font-bold mb-6">How It Works</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Before Election</h4>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">1</span>
                  <span>Upload manifesto — broken into simple sections</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">2</span>
                  <span>Each policy point becomes a shareable card</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">3</span>
                  <span>Supporters share on social media</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">4</span>
                  <span>Shares tracked and counted</span>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-4">After Election (Proof)</h4>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">1</span>
                  <span>Update progress on each pledge</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">2</span>
                  <span>Add photos, videos, proof of delivery</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">3</span>
                  <span>Show supporters exactly what was done</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">4</span>
                  <span>Build trust for next election cycle</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
          <h2 className="text-2xl font-bold mb-4">Your Manifesto is a Promise. Make it Trackable.</h2>
          <p className="text-muted-foreground mb-6">
            Stop hiding your manifesto in a PDF nobody reads. Make it shareable. Make it trackable. Make it proof that you deliver on your promises.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Upload Manifesto
          </Button>
        </div>
      </div>
    </div>
  );
}
