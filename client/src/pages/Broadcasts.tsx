import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Radio, Heart, MessageCircle, Share2, Send } from "lucide-react";

export default function Broadcasts() {
  const [, navigate] = useLocation();

  const broadcasts = [
    {
      id: 1,
      author: "Dr. Joseph Birundu",
      time: "2 hours ago",
      message: "Residents of Kegati Ward — our water project broke ground today. This is your promise being kept.",
      views: 4821,
      reactions: 312,
      type: "Live",
    },
    {
      id: 2,
      author: "Dr. Joseph Birundu",
      time: "Yesterday",
      message: "Town hall meeting: Nyaribari Social Hall, Saturday 10AM. Every ward leader must attend.",
      views: 3102,
      reactions: 198,
      type: "Announcement",
    },
    {
      id: 3,
      author: "Dr. Joseph Birundu",
      time: "2 days ago",
      message: "Thank you for 18,000 confirmed supporters. We are winning together.",
      views: 6740,
      reactions: 589,
      type: "Update",
    },
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
            <button onClick={() => navigate("/dashboard")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Command Center
            </button>
            <button onClick={() => navigate("/map")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Live Map
            </button>
            <button onClick={() => navigate("/broadcasts")} className="text-sm font-semibold text-accent">
              Broadcasts
            </button>
            <button onClick={() => navigate("/voters")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Intelligence DB
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
            <span className="text-xs font-mono text-accent">LIVE BROADCAST CHANNEL</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Broadcasts</h1>
          <p className="text-muted-foreground">Instant message delivery to all 18,340 confirmed supporters</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            {/* Compose Area */}
            <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow mb-8">
              <h3 className="font-semibold mb-4">New Broadcast</h3>
              <textarea
                placeholder="Share an update with your supporters..."
                className="w-full bg-background/50 border border-border/30 rounded-lg p-4 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 resize-none"
                rows={4}
              ></textarea>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-accent/10 rounded transition text-muted-foreground hover:text-foreground">
                    📷
                  </button>
                  <button className="p-2 hover:bg-accent/10 rounded transition text-muted-foreground hover:text-foreground">
                    🎥
                  </button>
                  <button className="p-2 hover:bg-accent/10 rounded transition text-muted-foreground hover:text-foreground">
                    📎
                  </button>
                </div>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Send className="w-4 h-4 mr-2" />
                  Broadcast Now
                </Button>
              </div>
            </div>

            {/* Broadcasts Feed */}
            <div className="space-y-6">
              {broadcasts.map((broadcast) => (
                <div key={broadcast.id} className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow hover-lift">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                        JB
                      </div>
                      <div>
                        <div className="font-semibold">{broadcast.author}</div>
                        <div className="text-xs text-muted-foreground">{broadcast.time}</div>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-accent/10 text-accent">
                      {broadcast.type}
                    </span>
                  </div>

                  {/* Message */}
                  <p className="text-foreground mb-4">{broadcast.message}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 py-4 border-t border-b border-border/30 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <span className="font-mono">{broadcast.views.toLocaleString()}</span>
                      <span>views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-mono">{broadcast.reactions}</span>
                      <span>reactions</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-chart-1 transition group">
                      <Heart className="w-4 h-4 group-hover:fill-current" />
                      <span className="text-sm">React</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">Comment</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition">
                      <Share2 className="w-4 h-4" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Broadcast Stats */}
            <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
              <h3 className="font-semibold mb-4">Broadcast Statistics</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Total Reach</div>
                  <div className="font-mono text-2xl font-bold text-accent">18,340</div>
                  <div className="text-xs text-muted-foreground">supporters</div>
                </div>
                <div className="border-t border-border/30 pt-4">
                  <div className="text-sm text-muted-foreground mb-1">Avg. Engagement</div>
                  <div className="font-mono text-2xl font-bold text-chart-1">4.2%</div>
                  <div className="text-xs text-muted-foreground">reactions per broadcast</div>
                </div>
                <div className="border-t border-border/30 pt-4">
                  <div className="text-sm text-muted-foreground mb-1">Delivery Time</div>
                  <div className="font-mono text-lg font-bold text-accent">60 seconds</div>
                  <div className="text-xs text-muted-foreground">to all supporters</div>
                </div>
              </div>
            </div>

            {/* Broadcast Tips */}
            <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
              <h3 className="font-semibold mb-4">Broadcasting Tips</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Keep messages under 280 characters for SMS compatibility</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Use visuals to increase engagement by 3x</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Schedule broadcasts during peak hours (6-9 PM)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Include clear calls-to-action</span>
                </li>
              </ul>
            </div>

            {/* Recent Activity */}
            <div className="p-6 rounded-lg border border-border/30 bg-card/50 card-glow">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-chart-1 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-foreground">2,340 new supporters joined</div>
                    <div className="text-xs text-muted-foreground">Today</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-foreground">Broadcast sent to all wards</div>
                    <div className="text-xs text-muted-foreground">2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-chart-1 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <div className="text-foreground">4,821 views on latest update</div>
                    <div className="text-xs text-muted-foreground">2 hours ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
