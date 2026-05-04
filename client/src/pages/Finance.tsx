import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { TrendingUp, PieChart, Lock } from "lucide-react";

export default function Finance() {
  const [, navigate] = useLocation();

  const incomeItems = [
    { source: "Pledges from supporters", amount: "KSh 4,200,000", count: "340 pledges", date: "This month" },
    { source: "Donations", amount: "KSh 2,100,000", count: "28 donors", date: "This month" },
    { source: "Personal campaign funds", amount: "KSh 1,500,000", count: "Initial allocation", date: "Start of campaign" },
  ];

  const expenditureItems = [
    { category: "Airtime Rewards", amount: "KSh 920,000", percentage: 18, status: "On budget" },
    { category: "Rally Events", amount: "KSh 1,240,000", percentage: 24, status: "On budget" },
    { category: "Printing & Materials", amount: "KSh 680,000", percentage: 13, status: "On budget" },
    { category: "Transport", amount: "KSh 540,000", percentage: 11, status: "On budget" },
    { category: "Staff & Agents", amount: "KSh 890,000", percentage: 17, status: "On budget" },
    { category: "Digital Advertising", amount: "KSh 420,000", percentage: 8, status: "On budget" },
    { category: "Other", amount: "KSh 330,000", percentage: 9, status: "On budget" },
  ];

  const pledges = [
    { pledger: "John Kipchoge", amount: "KSh 500,000", status: "Received", date: "May 1, 2026" },
    { pledger: "Mary Nyambura", amount: "KSh 300,000", status: "Received", date: "Apr 28, 2026" },
    { pledger: "Samuel Mwangi", amount: "KSh 250,000", status: "Pending", date: "Due May 10" },
    { pledger: "Grace Kiplagat", amount: "KSh 200,000", status: "Received", date: "Apr 25, 2026" },
    { pledger: "David Otieno", amount: "KSh 150,000", status: "Pending", date: "Due May 15" },
  ];

  const stats = [
    { label: "Total Income", value: "KSh 7,800,000", change: "+12% this month" },
    { label: "Total Expenditure", value: "KSh 5,020,000", change: "+8% this month" },
    { label: "Cash Balance", value: "KSh 2,780,000", change: "Available" },
    { label: "Budget Utilization", value: "64.4%", change: "Of total budget" },
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
            <button onClick={() => navigate("/finance")} className="font-semibold text-accent">
              Finance Tracker
            </button>
            <button onClick={() => navigate("/election")} className="text-muted-foreground hover:text-foreground transition">
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
            <span className="text-xs font-mono text-accent">CAMPAIGN FINANCE TRACKER — COMPLETE TRANSPARENCY</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Finance Tracker</h1>
          <p className="text-muted-foreground">Log every shilling. Track every expense. Know your financial position at all times. Completely private.</p>
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
          {/* Income */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Income</h2>
            <div className="space-y-4 mb-8">
              {incomeItems.map((item, i) => (
                <div key={i} className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{item.source}</div>
                      <div className="text-sm text-muted-foreground">{item.count}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-lg font-bold text-chart-1">{item.amount}</div>
                      <div className="text-xs text-muted-foreground">{item.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Expenditure */}
            <h2 className="text-2xl font-bold mb-6">Expenditure</h2>
            <div className="space-y-3">
              {expenditureItems.map((item, i) => (
                <div key={i} className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold">{item.category}</div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-accent">{item.amount}</div>
                      <div className="text-xs text-muted-foreground">{item.status}</div>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pledges */}
          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="font-semibold mb-4">Pledge Status</h3>
            <div className="space-y-3">
              {pledges.map((pledge, i) => (
                <div key={i} className="pb-3 border-b border-border/30 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-semibold text-sm">{pledge.pledger}</div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      pledge.status === "Received" 
                        ? "bg-chart-1/20 text-chart-1" 
                        : "bg-accent/20 text-accent"
                    }`}>
                      {pledge.status}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">{pledge.amount}</div>
                  <div className="text-xs text-muted-foreground mt-1">{pledge.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <TrendingUp className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Income Tracking</h3>
            <p className="text-sm text-muted-foreground">Log all pledges, donations, and personal campaign funds. Track who promised what and when received.</p>
          </div>

          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <PieChart className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Expense Breakdown</h3>
            <p className="text-sm text-muted-foreground">Categorize all spending. See exactly where every shilling goes. Compare to budget.</p>
          </div>

          <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
            <Lock className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Complete Privacy</h3>
            <p className="text-sm text-muted-foreground">Only accessible to authorized campaign finance team. Encrypted. Full audit trail.</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow mb-12">
          <h3 className="text-xl font-bold mb-6">How It Works</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Income Management</h4>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">1</span>
                  <span>Log pledge from supporter</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">2</span>
                  <span>Track when payment received</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">3</span>
                  <span>See outstanding pledges</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">4</span>
                  <span>Generate pledge report</span>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Expense Management</h4>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">1</span>
                  <span>Log expense with category</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">2</span>
                  <span>Attach receipt/proof</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">3</span>
                  <span>Compare to budget</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">4</span>
                  <span>Export audit-ready report</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
          <h2 className="text-2xl font-bold mb-4">Know Your Financial Position at All Times</h2>
          <p className="text-muted-foreground mb-6">
            Complete transparency. Every shilling logged. Every expense tracked. Always know your cash balance, budget utilization, and financial health.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            View Full Financial Report
          </Button>
        </div>
      </div>
    </div>
  );
}
