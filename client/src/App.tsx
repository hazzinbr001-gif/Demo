import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import Broadcasts from "./pages/Broadcasts";
import Voters from "./pages/Voters";
import USSD from "./pages/USSD";
import PWA from "./pages/PWA";
import Posters from "./pages/Posters";
import Airtime from "./pages/Airtime";
import Requests from "./pages/Requests";
import Manifesto from "./pages/Manifesto";
import Agents from "./pages/Agents";
import Finance from "./pages/Finance";
import Election from "./pages/Election";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/map"} component={Map} />
      <Route path={"/broadcasts"} component={Broadcasts} />
      <Route path={"/voters"} component={Voters} />
      <Route path={"/ussd"} component={USSD} />
      <Route path={"/pwa"} component={PWA} />
      <Route path={"/posters"} component={Posters} />
      <Route path={"/airtime"} component={Airtime} />
      <Route path={"/requests"} component={Requests} />
      <Route path={"/manifesto"} component={Manifesto} />
      <Route path={"/agents"} component={Agents} />
      <Route path={"/finance"} component={Finance} />
      <Route path={"/election"} component={Election} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
