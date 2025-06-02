
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StrategyCall from "./pages/StrategyCall";
import SuccessPage from "./pages/SuccessPage";
import WebinarPage from "./pages/WebinarPage";
import EliteAccelerator from "./pages/EliteAccelerator";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Developer Navigation - Hidden for production */}
        <Navigation developerMode={false} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/strategy-call" element={<StrategyCall />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/webinar" element={<WebinarPage />} />
          <Route path="/elite-accelerator" element={<EliteAccelerator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
