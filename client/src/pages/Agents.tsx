import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Users, MapPin, CheckCircle, Clock } from "lucide-react";

export default function Agents() {
  const [, navigate] = useLocation();

  const wardTeams = [
    { ward: "Kegati", agents: 18, active: 16, tasks: 34, completed: 28, avgRating: "4.8/5" },
    { ward: "Nyanchwa", agents: 15, active: 14, tasks: 28, completed: 24, avgRating: "4.7/5" },
    { ward: "Borabu", agents: 14, active: 12, tasks: 26, completed: 22, avgRating: "4.6/5" },
    { ward: "Gesusu", agents: 12, active: 10, tasks: 22, completed: 18, avgRating: "4.5/5" },
    { ward: "Nyaribari", agents: 11, active: 9, tasks: 20, completed: 16, avgRating: "4.4/5" },
    { ward: "Mwembe", agents: 10, active: 8, tasks: 18, completed: 14, avgRating: "4.3/5" },
  ];

  const recentActivities = [
    { agent: "Samuel Kerongo", ward: "Kegati", action: "Completed rally attendance tracking", time: "2 hours ago", status: "✓" },
    { agent: "Mary Nyaboke", ward: "Nyanchwa", action: "Registered 12 new supporters", time: "1 hour ago", status: "✓" },
    { agent: "Eric Otieno", ward: "Borabu", action: "Submitted voter feedback report", time: "45 min ago", status: "✓" },
    { agent: "Grace Kipchoge", ward: "Gesusu", action: "Coordinated ward meeting", time: "30 min ago", status: "✓" },
    { agent: "David Mwangi", ward: "Nyaribari", action: "Distributed campaign materials", time: "15 min ago", status: "✓" },
  ];

  const stats = [
    { label: "Total Agents", value: "203", change: "+18 this month" },
    { label: "Active Now", value: "187", change: "92% active" },
    { label: "Tasks Assigned", value: "1,240", change: "+340 this week" },
    { label: "Completion Rate", value: "89.3%", change: "+2.1% vs last week" },
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
            <button onClick={() => navigate("/agents")} className="font-semibold text-accent">
              Agent Coordinator
            </button>
            <button onClick={() => navigate("/finance")} className="text-muted-foreground hover:text-foreground transition">
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
            <span className="text-xs font-mono text-accent">AGENT COORDINATOR — MANAGE YOUR ENTIRE CAMPAIGN TEAM</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Agent Coordinator</h1>
          <p className="text-muted-foreground">Register, manage, and coordinate your entire campaign team by ward. Real-time visibility into who's doing what.</p>
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

        {/* Ward Teams */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ward Teams</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {wardTeams.map((team, i) => (
              <div key={i} className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{team.ward} Ward</h3>
                    <div className="text-sm text-muted-foreground">{team.agents} agents registered</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-lg font-bold text-accent">{team.active}/{team.agents}</div>
                    <div className="text-xs text-muted-foreground">Active now</div>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Tasks Completed</span>
                      <span className="font-mono text-accent">{team.completed}/{team.tasks}</span>
                    </div>
                    <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-chart-1"
                        style={{ width: `${(team.completed / team.tasks) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Team Rating</span>
                    <span className="text-accent font-semibold">{team.avgRating}</span>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  View Team
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recent Agent Activities</h2>
          <div className="space-y-3">
            {recentActivities.map((activity, i) => (
              <div key={i} className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow hover-lift">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent flex-shrink-0">
                      {activity.agent.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{activity.agent}</div>
                      <div className="text-sm text-muted-foreground">{activity.action}</div>
                      <div className="text-xs text-muted-foreground mt-1">{activity.ward} • {activity.time}</div>
                    </div>
                  </div>
                  <div className="text-chart-1 text-xl">{activity.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="text-xl font-bold mb-6">Agent Management</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Register agents by ward with contact info</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Assign tasks with deadlines</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Track task completion in real-time</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Rate agent performance</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Send instant SMS notifications</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>View agent check-ins on live map</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
            <h3 className="text-xl font-bold mb-6">Election Day Coordination</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Assign agents to polling stations</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Real-time agent check-ins throughout day</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Receive vote counts from each station</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Live map shows all polling station activity</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Instant alerts for any issues</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold">✓</span>
                <span>Aggregate results in real-time</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
          <h2 className="text-2xl font-bold mb-4">Coordinate Your Entire Campaign Team</h2>
          <p className="text-muted-foreground mb-6">
            From registration to election day, the Agent Coordinator gives you complete visibility and control over your campaign team. Know exactly who's doing what, when, and where.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Register New Agent
          </Button>
        </div>
      </div>
    </div>
  );
}
