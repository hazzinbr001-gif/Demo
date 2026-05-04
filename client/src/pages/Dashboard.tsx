import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { BarChart3, Map, Radio, Users, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function Dashboard() {
  const [, navigate] = useLocation();

  const supportersByWard = [
    { name: "Kegati", value: 3100 },
    { name: "Nyanchwa", value: 2700 },
    { name: "Borabu", value: 2400 },
    { name: "Gesusu", value: 2100 },
    { name: "Nyaribari", value: 1850 },
    { name: "Mwembe", value: 1600 },
  ];

  const voterBreakdown = [
    { name: "Confirmed", value: 18340, color: "oklch(0.8 0.2 130)" },
    { name: "Undecided", value: 15200, color: "oklch(0.65 0.25 195)" },
    { name: "Opposition", value: 9310, color: "oklch(0.6 0.25 15)" },
  ];

  const requests = [
    { name: "Grace Nyanchwa", type: "Bursary", status: "Approved", date: "May 1, 2026" },
    { name: "Peter Omari", type: "Medical", status: "Fulfilled", date: "Apr 30, 2026" },
    { name: "Alice Bosibori", type: "Business", status: "Pending", date: "Apr 29, 2026" },
    { name: "James Mwangi", type: "Bursary", status: "Under Review", date: "Apr 28, 2026" },
  ];

  const referrers = [
    { name: "Samuel Kerongo", ward: "Kegati", reward: "KSh 1,640", refs: 47 },
    { name: "Mary Nyaboke", ward: "Nyanchwa", reward: "KSh 1,320", refs: 38 },
    { name: "Eric Otieno", ward: "Borabu", reward: "KSh 1,060", refs: 31 },
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
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate("/dashboard")} className="text-sm font-semibold text-accent">
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
          <div className="text-right">
            <div className="text-xs text-muted-foreground">2027 General Election</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 mb-4">
            <div className="w-2 h-2 bg-chart-1 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-accent">LIVE CAMPAIGN INTELLIGENCE</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Command Center</h1>
          <p className="text-muted-foreground">Dr. Joseph Mogendi Birundu — Nyaribari Chache Constituency</p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Registered Voters", value: "42,850", change: "+2.4%", icon: Users },
            { label: "Confirmed Supporters", value: "18,340", change: "+340 today", icon: TrendingUp },
            { label: "Polling Stations", value: "87", change: "All tracked", icon: BarChart3 },
            { label: "Agents Deployed", value: "203", change: "Active now", icon: AlertCircle },
          ].map((kpi, i) => (
            <div key={i} className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">{kpi.label}</div>
                  <div className="font-mono text-3xl font-bold text-accent">{kpi.value}</div>
                </div>
                <kpi.icon className="w-6 h-6 text-accent/50" />
              </div>
              <div className="text-xs text-chart-1 font-semibold">{kpi.change}</div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Supporters by Ward */}
          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-accent" />
              Supporters by Ward
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={supportersByWard}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,217,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(224,224,224,0.5)" style={{ fontSize: "12px" }} />
                <YAxis stroke="rgba(224,224,224,0.5)" style={{ fontSize: "12px" }} />
                <Tooltip contentStyle={{ backgroundColor: "rgba(12,20,40,0.9)", border: "1px solid rgba(0,217,255,0.3)" }} />
                <Bar dataKey="value" fill="oklch(0.65 0.25 195)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Voter Breakdown */}
          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              Voter Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={voterBreakdown} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
                  {voterBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "rgba(12,20,40,0.9)", border: "1px solid rgba(0,217,255,0.3)" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Requests */}
        <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow mb-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-accent" />
            Recent Constituent Requests
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Name</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Type</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Status</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-accent/5 transition">
                    <td className="py-3 px-4">{req.name}</td>
                    <td className="py-3 px-4">{req.type}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        req.status === "Approved" ? "bg-chart-1/20 text-chart-1" :
                        req.status === "Fulfilled" ? "bg-chart-1/20 text-chart-1" :
                        req.status === "Pending" ? "bg-accent/20 text-accent" :
                        "bg-muted/20 text-muted-foreground"
                      }`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{req.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Election Countdown */}
          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              Election Day Countdown
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Days", value: "463" },
                { label: "Hours", value: "19" },
                { label: "Minutes", value: "03" },
                { label: "Seconds", value: "58" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="font-mono text-2xl font-bold text-accent mb-1">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">August 9, 2027</div>
          </div>

          {/* Top Referrers */}
          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              Top Referrers
            </h3>
            <div className="space-y-3">
              {referrers.map((ref, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded border border-border/30 bg-background/50 hover:bg-accent/5 transition">
                  <div>
                    <div className="font-semibold text-sm">#{i + 1} {ref.name}</div>
                    <div className="text-xs text-muted-foreground">{ref.ward}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm font-bold text-chart-1">{ref.reward}</div>
                    <div className="text-xs text-muted-foreground">{ref.refs} refs</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
