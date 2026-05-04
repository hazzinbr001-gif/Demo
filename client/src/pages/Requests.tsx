import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { CheckCircle, Clock, AlertCircle, TrendingUp } from "lucide-react";

export default function Requests() {
  const [, navigate] = useLocation();

  const requestTypes = [
    { type: "Bursary", icon: "🎓", pending: 340, approved: 1240, fulfilled: 1180, avgTime: "4.2 days" },
    { type: "Medical", icon: "🏥", pending: 120, approved: 580, fulfilled: 560, avgTime: "2.8 days" },
    { type: "Business Support", icon: "💼", pending: 85, approved: 320, fulfilled: 310, avgTime: "6.1 days" },
    { type: "Infrastructure", icon: "🏗️", pending: 45, approved: 180, fulfilled: 175, avgTime: "14.3 days" },
  ];

  const recentRequests = [
    { id: "REQ-2026-18340", name: "Grace Nyanchwa", type: "Bursary", amount: "KSh 8,500", status: "Approved", date: "May 1, 2026", ward: "Kegati" },
    { id: "REQ-2026-18339", name: "Peter Omari", type: "Medical", amount: "KSh 12,000", status: "Fulfilled", date: "Apr 30, 2026", ward: "Nyanchwa" },
    { id: "REQ-2026-18338", name: "Alice Bosibori", type: "Business", amount: "KSh 15,000", status: "Under Review", date: "Apr 29, 2026", ward: "Borabu" },
    { id: "REQ-2026-18337", name: "James Mwangi", type: "Bursary", amount: "KSh 7,200", status: "Approved", date: "Apr 28, 2026", ward: "Gesusu" },
    { id: "REQ-2026-18336", name: "Faith Kemunto", type: "Medical", amount: "KSh 18,500", status: "Fulfilled", date: "Apr 27, 2026", ward: "Nyaribari" },
  ];

  const stats = [
    { label: "Total Requests", value: "3,840", change: "+340 this month" },
    { label: "Approval Rate", value: "94.2%", change: "Industry leading" },
    { label: "Avg. Processing Time", value: "5.8 days", change: "-2.1 days vs last month" },
    { label: "Total Amount Disbursed", value: "KSh 28.4M", change: "Verified & tracked" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-chart-1/20 text-chart-1";
      case "Fulfilled":
        return "bg-accent/20 text-accent";
      case "Under Review":
        return "bg-accent/20 text-accent";
      case "Pending":
        return "bg-destructive/20 text-destructive";
      default:
        return "bg-muted/20 text-muted-foreground";
    }
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
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => navigate("/dashboard")} className="text-muted-foreground hover:text-foreground transition">
              Dashboard
            </button>
            <button onClick={() => navigate("/airtime")} className="text-muted-foreground hover:text-foreground transition">
              Airtime Rewards
            </button>
            <button onClick={() => navigate("/requests")} className="font-semibold text-accent">
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
            <span className="text-xs font-mono text-accent">REQUEST & PETITION MANAGEMENT — NEVER LOSE A CONSTITUENT</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Request Management</h1>
          <p className="text-muted-foreground">Track every constituent request. Never lose one. Never be accused of ignoring someone you actually helped.</p>
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

        {/* Request Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Request Types & Status</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {requestTypes.map((req, i) => (
              <div key={i} className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-3xl mb-2">{req.icon}</div>
                    <h3 className="font-semibold text-lg">{req.type}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Avg. Processing</div>
                    <div className="font-mono font-bold text-accent">{req.avgTime}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Pending</span>
                    <span className="font-mono font-bold text-destructive">{req.pending}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Approved</span>
                    <span className="font-mono font-bold text-accent">{req.approved}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Fulfilled</span>
                    <span className="font-mono font-bold text-chart-1">{req.fulfilled}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Requests */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recent Requests</h2>
          <div className="overflow-x-auto rounded-lg border border-border/30 bg-card/50 card-glow">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30 bg-background/50">
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Request ID</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Name</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Type</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Amount</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Status</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((req, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-accent/5 transition">
                    <td className="py-4 px-6 font-mono text-xs text-muted-foreground">{req.id}</td>
                    <td className="py-4 px-6 font-semibold">{req.name}</td>
                    <td className="py-4 px-6">{req.type}</td>
                    <td className="py-4 px-6 font-mono font-bold">{req.amount}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(req.status)}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground text-xs">{req.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How It Works */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="text-xl font-bold mb-6">Request Lifecycle</h3>
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">1</span>
                <span><strong>Submission:</strong> Constituent submits request (bursary, medical, business)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">2</span>
                <span><strong>Unique ID:</strong> Instant reference number issued via SMS</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">3</span>
                <span><strong>Review:</strong> Campaign team reviews and decides within 3-7 days</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">4</span>
                <span><strong>Notification:</strong> Automatic SMS at every status change</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">5</span>
                <span><strong>Fulfillment:</strong> Approved requests processed and disbursed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold flex-shrink-0">6</span>
                <span><strong>Proof:</strong> Full history exportable for transparency</span>
              </li>
            </ol>
          </div>

          <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="text-xl font-bold mb-6">Key Features</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-chart-1 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Fraud Prevention</div>
                  <div className="text-sm text-muted-foreground">Same ID cannot submit duplicate requests</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Automatic Notifications</div>
                  <div className="text-sm text-muted-foreground">SMS sent at every status change</div>
                </div>
              </div>
              <div className="flex gap-3">
                <TrendingUp className="w-5 h-5 text-chart-1 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Full Audit Trail</div>
                  <div className="text-sm text-muted-foreground">Every interaction logged and exportable</div>
                </div>
              </div>
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Transparency Proof</div>
                  <div className="text-sm text-muted-foreground">Show exactly who you helped and when</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
          <h2 className="text-2xl font-bold mb-4">Never Lose a Constituent Request Again</h2>
          <p className="text-muted-foreground mb-6">
            Every request tracked. Every status change communicated. Every fulfilled promise documented. The Request Management system is your proof that you care about your constituents and follow through on your promises.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            View All Requests
          </Button>
        </div>
      </div>
    </div>
  );
}
