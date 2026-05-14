import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Work from "./pages/Work.tsx";
import Labs from "./pages/Labs.tsx";
import About from "./pages/About.tsx";
import CongressionalTradesFund from "./pages/CongressionalTradesFund.tsx";
import DynastyWarRoom from "./pages/DynastyWarRoom.tsx";
import GlobalMartechTransformation from "./pages/GlobalMartechTransformation.tsx";
import RealTimeContentPersonalization from "./pages/RealTimeContentPersonalization.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/global-martech-transformation" element={<GlobalMartechTransformation />} />
          <Route path="/work/real-time-content-personalization" element={<RealTimeContentPersonalization />} />
          <Route path="/work/congressional-trades-fund" element={<CongressionalTradesFund />} />
          <Route path="/labs/congressional-trades-fund" element={<CongressionalTradesFund />} />
          <Route path="/labs/dynasty-war-room" element={<DynastyWarRoom />} />
          <Route path="/labs/dynasty-cap-manager" element={<DynastyWarRoom />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
