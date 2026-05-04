import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Users, Search, Filter, Download } from "lucide-react";
import { useState } from "react";

export default function Voters() {
  const [, navigate] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const voters = [
    { id: "KE-234***", name: "Grace Nyanchwa", ward: "Kegati", support: "Confirmed", phone: "0712***456", lastContact: "May 1, 2026" },
    { id: "KE-891***", name: "Peter Omari", ward: "Nyanchwa", support: "Confirmed", phone: "0713***789", lastContact: "Apr 30, 2026" },
    { id: "KE-445***", name: "Alice Bosibori", ward: "Borabu", support: "Undecided", phone: "0714***012", lastContact: "Apr 29, 2026" },
    { id: "KE-673***", name: "James Mwangi", ward: "Gesusu", support: "Confirmed", phone: "0715***345", lastContact: "Apr 28, 2026" },
    { id: "KE-128***", name: "Faith Kemunto", ward: "Nyaribari", support: "Confirmed", phone: "0716***678", lastContact: "Apr 27, 2026" },
    { id: "KE-554***", name: "David Onyiego", ward: "Mwembe", support: "Opposition", phone: "0717***901", lastContact: "Apr 26, 2026" },
    { id: "KE-112***", name: "Mary Kipchoge", ward: "Manga", support: "Confirmed", phone: "0718***234", lastContact: "Apr 25, 2026" },
    { id: "KE-889***", name: "Samuel Kiplagat", ward: "Suneka", support: "Undecided", phone: "0719***567", lastContact: "Apr 24, 2026" },
  ];

  const getSupportColor = (support: string) => {
    switch (support) {
      case "Confirmed":
        return "bg-chart-1/20 text-chart-1";
      case "Undecided":
        return "bg-accent/20 text-accent";
      case "Opposition":
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
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate("/dashboard")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Command Center
            </button>
            <button onClick={() => navigate("/map")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Live Map
            </button>
            <button onClick={() => navigate("/broadcasts")} className="text-sm text-muted-foreground hover:text-foreground transition">
              Broadcasts
            </button>
            <button onClick={() => navigate("/voters")} className="text-sm font-semibold text-accent">
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
            <span className="text-xs font-mono text-accent">VOTER INTELLIGENCE DATABASE</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Voter Database</h1>
          <p className="text-muted-foreground">Complete constituent management and tracking system</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Total Voters</div>
            <div className="font-mono text-2xl font-bold text-accent">42,850</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Confirmed</div>
            <div className="font-mono text-2xl font-bold text-chart-1">18,340</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Undecided</div>
            <div className="font-mono text-2xl font-bold text-accent">15,200</div>
          </div>
          <div className="p-4 rounded-lg border border-border/30 bg-card/50 card-glow">
            <div className="text-sm text-muted-foreground mb-1">Opposition</div>
            <div className="font-mono text-2xl font-bold text-destructive">9,310</div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, ID, or ward..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background/50 border border-border/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
            />
          </div>
          <Button variant="outline" className="border-border/30 text-foreground hover:bg-accent/10">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="border-border/30 text-foreground hover:bg-accent/10">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Table */}
        <div className="rounded-lg border border-border/30 bg-card/50 card-glow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/30 bg-background/50">
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Name</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">ID</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Ward</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Support Status</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Phone</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Last Contact</th>
                  <th className="text-left py-4 px-6 text-muted-foreground font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {voters.map((voter, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-accent/5 transition">
                    <td className="py-4 px-6 font-semibold">{voter.name}</td>
                    <td className="py-4 px-6 font-mono text-xs text-muted-foreground">{voter.id}</td>
                    <td className="py-4 px-6">{voter.ward}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSupportColor(voter.support)}`}>
                        {voter.support}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">{voter.phone}</td>
                    <td className="py-4 px-6 text-muted-foreground text-xs">{voter.lastContact}</td>
                    <td className="py-4 px-6">
                      <button className="text-accent hover:text-accent/80 transition text-xs font-semibold">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-semibold">1-8</span> of <span className="font-semibold">42,850</span> voters
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-border/30 text-foreground hover:bg-accent/10" disabled>
              Previous
            </Button>
            <Button variant="outline" className="border-border/30 text-foreground hover:bg-accent/10">
              Next
            </Button>
          </div>
        </div>

        {/* Info Panel */}
        <div className="mt-12 p-8 rounded-lg border border-border/30 bg-card/50 card-glow">
          <h2 className="text-2xl font-bold mb-4">Database Management</h2>
          <p className="text-muted-foreground mb-6">
            The Voter Intelligence Database contains complete information on all registered voters in Nyaribari Chache constituency. 
            Track support status, manage contact history, and monitor engagement across all 12 wards.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Import New Voters
            </Button>
            <Button variant="outline" className="border-accent/30 text-foreground hover:bg-accent/10">
              Generate Report
            </Button>
            <Button variant="outline" className="border-accent/30 text-foreground hover:bg-accent/10">
              Bulk Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
