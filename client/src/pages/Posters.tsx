import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Share2, Download, Zap, Trophy, QrCode } from "lucide-react";

export default function Posters() {
  const [, navigate] = useLocation();

  const posterTemplates = [
    { id: 1, title: "Rally Announcement", icon: "📢", views: "340K", shares: "28K", conversions: "12.4%" },
    { id: 2, title: "Voting Day Reminder", icon: "🗳️", views: "520K", shares: "45K", conversions: "18.2%" },
    { id: 3, title: "Policy Highlight", icon: "📋", views: "210K", shares: "18K", conversions: "9.8%" },
    { id: 4, title: "General Awareness", icon: "🎯", views: "180K", shares: "14K", conversions: "8.1%" },
  ];

  const referralRewards = [
    { action: "Share poster (tracked click)", reward: "KSh 10 airtime", users: "2.1M" },
    { action: "Referral registers as supporter", reward: "KSh 20 airtime", users: "1.8M" },
    { action: "Referral attends rally", reward: "KSh 30 airtime", users: "340K" },
    { action: "10 referrals milestone", reward: "KSh 200 bonus airtime", users: "89K" },
    { action: "Top referrer of the month", reward: "Special recognition + KSh 500", users: "12" },
  ];

  const topReferrers = [
    { rank: 1, name: "Samuel Kerongo", ward: "Kegati", referrals: 247, earnings: "KSh 6,240", status: "🔥 Hot" },
    { rank: 2, name: "Mary Nyaboke", ward: "Nyanchwa", referrals: 198, earnings: "KSh 4,960", status: "🔥 Hot" },
    { rank: 3, name: "Eric Otieno", ward: "Borabu", referrals: 156, earnings: "KSh 3,920", status: "📈 Rising" },
    { rank: 4, name: "Grace Kipchoge", ward: "Gesusu", referrals: 134, earnings: "KSh 3,360", status: "📈 Rising" },
    { rank: 5, name: "David Mwangi", ward: "Nyaribari", referrals: 98, earnings: "KSh 2,460", status: "⭐ Active" },
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
            <button onClick={() => navigate("/pwa")} className="text-muted-foreground hover:text-foreground transition">
              PWA App
            </button>
            <button onClick={() => navigate("/posters")} className="font-semibold text-accent">
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
            <span className="text-xs font-mono text-accent">VIRAL POSTER ENGINE — TURN SUPPORTERS INTO AGENTS</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Poster Engine</h1>
          <p className="text-muted-foreground">Every supporter becomes a campaign agent. Auto-generated posters with unique QR codes and airtime rewards.</p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Total Posters Generated</div>
            <div className="font-mono text-2xl font-bold text-accent">3.2M</div>
            <div className="text-xs text-chart-1 mt-1">+18K daily</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Total Shares</div>
            <div className="font-mono text-2xl font-bold text-chart-1">18.4M</div>
            <div className="text-xs text-chart-1 mt-1">Tracked clicks</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Airtime Distributed</div>
            <div className="font-mono text-2xl font-bold text-accent">KSh 92.3M</div>
            <div className="text-xs text-chart-1 mt-1">To referrers</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Avg. Conversion Rate</div>
            <div className="font-mono text-2xl font-bold text-chart-1">14.1%</div>
            <div className="text-xs text-chart-1 mt-1">QR scans → registrations</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Poster Templates */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Poster Templates</h2>
            <div className="space-y-4">
              {posterTemplates.map((template) => (
                <div key={template.id} className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{template.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{template.title}</h3>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <div className="text-muted-foreground">Views</div>
                          <div className="font-mono font-bold text-accent">{template.views}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Shares</div>
                          <div className="font-mono font-bold text-chart-1">{template.shares}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Conversion</div>
                          <div className="font-mono font-bold text-accent">{template.conversions}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline" className="border-border/30">
                        <QrCode className="w-3 h-3" />
                      </Button>
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
                <span>Supporter logs into app</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">2</span>
                <span>Selects poster template</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">3</span>
                <span>Poster auto-generates with their QR code</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">4</span>
                <span>Shares on WhatsApp, Facebook, SMS</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">5</span>
                <span>When someone scans QR → registrations tracked</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">6</span>
                <span>Referrer earns airtime instantly</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Referral Rewards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Referral Rewards System</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30 bg-background/50">
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Action</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Reward</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Active Users</th>
                </tr>
              </thead>
              <tbody>
                {referralRewards.map((item, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-accent/5 transition">
                    <td className="py-4 px-6">{item.action}</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 rounded-full bg-accent/20 text-accent font-semibold text-sm">
                        {item.reward}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-accent">{item.users}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Referrers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Referrers This Month</h2>
          <div className="space-y-3">
            {topReferrers.map((referrer) => (
              <div key={referrer.rank} className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow hover-lift">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                      {referrer.rank}
                    </div>
                    <div>
                      <div className="font-semibold">{referrer.name}</div>
                      <div className="text-sm text-muted-foreground">{referrer.ward} Ward</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold text-chart-1">{referrer.referrals} referrals</div>
                    <div className="text-sm text-muted-foreground">{referrer.earnings}</div>
                    <div className="text-xs text-accent mt-1">{referrer.status}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
          <h2 className="text-2xl font-bold mb-4">Turn Every Supporter Into a Campaign Agent</h2>
          <p className="text-muted-foreground mb-6">
            The Poster Engine transforms passive supporters into active campaign agents. With auto-generated posters, unique QR codes, and instant airtime rewards, every share becomes a tracked, rewarded action. It's viral by design.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Zap className="w-4 h-4 mr-2" />
            Launch Poster Campaign
          </Button>
        </div>
      </div>
    </div>
  );
}
