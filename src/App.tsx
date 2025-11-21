import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import PracticeArea from "./pages/PracticeArea";
import OurTeam from "./pages/OurTeam";
import Insights from "./pages/Insights";
import NewsPage from "./pages/NewsPage";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/expertise" element={<PracticeArea />} />
            <Route path="/practice-area" element={<PracticeArea />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news-updates" element={<NewsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/news/:slug" element={<News />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
