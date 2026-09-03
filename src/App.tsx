import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Work from "./pages/Work.tsx";
import Offers from "./pages/Offers.tsx";
import About from "./pages/About.tsx";
import DataAnalytics from "./pages/DataAnalytics.tsx";
import AIImplementation from "./pages/AIImplementation.tsx";
import ProductDevelopment from "./pages/ProductDevelopment.tsx";
import FractionalCTO from "./pages/FractionalCTO.tsx";
import CongressionalTradesFund from "./pages/CongressionalTradesFund.tsx";
import DynastyWarRoom from "./pages/DynastyWarRoom.tsx";
import GlobalMartechTransformation from "./pages/GlobalMartechTransformation.tsx";
import RealTimeContentPersonalization from "./pages/RealTimeContentPersonalization.tsx";
import ProspectingAgent from "./pages/ProspectingAgent.tsx";
import RealEstateDataAndAIPlatform from "./pages/RealEstateDataAndAIPlatform.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import DataDeletion from "./pages/DataDeletion.tsx";
import NotFound from "./pages/NotFound.tsx";


import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />

          {/* Services */}
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/ai-implementation" element={<AIImplementation />} />
          <Route path="/product-development" element={<ProductDevelopment />} />
          <Route path="/fractional-cto" element={<FractionalCTO />} />

          {/* Work detail pages */}
          <Route path="/work/global-martech-transformation" element={<GlobalMartechTransformation />} />
          <Route path="/work/real-time-content-personalization" element={<RealTimeContentPersonalization />} />
          <Route path="/work/prospecting-agent" element={<ProspectingAgent />} />
          <Route path="/work/real-estate-data-and-ai-platform" element={<RealEstateDataAndAIPlatform />} />

          {/* Labs detail pages */}
          <Route path="/labs/congressional-trades-fund" element={<CongressionalTradesFund />} />
          <Route path="/labs/dynasty-war-room" element={<DynastyWarRoom />} />

          {/* Redirects */}
          <Route path="/case-studies" element={<Navigate to="/work" replace />} />
          <Route
            path="/case-studies/real-estate-data-and-ai-platform"
            element={<Navigate to="/work/real-estate-data-and-ai-platform" replace />}
          />
          <Route
            path="/case-studies/multifamily-data-platform"
            element={<Navigate to="/work/real-estate-data-and-ai-platform" replace />}
          />
          <Route
            path="/work/congressional-trades-fund"
            element={<Navigate to="/labs/congressional-trades-fund" replace />}
          />
          <Route path="/labs" element={<Navigate to="/product-development" replace />} />
          <Route path="/labs/dynasty-cap-manager" element={<Navigate to="/labs/dynasty-war-room" replace />} />

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
