
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StrategyCall from "./pages/StrategyCall";
import SuccessPage from "./pages/SuccessPage";
import WebinarPage from "./pages/WebinarPage";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Developer Navigation - Only visible during development */}
        <Navigation developerMode={true} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/strategy-call" element={<StrategyCall />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/webinar" element={<WebinarPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
