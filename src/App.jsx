import Header from "./components/Header";
import BookConsultationForm from "./components/BookConsultationForm";
import CTASection from "./components/CTASection";
import Engagement from "./components/Engagement";
import EngagementComparison from "./components/Engagementcomparison ";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import HowItWorks from "./components/Howitworks";
import OnboardingProcess from "./components/Onboardingprocess ";
import ProofSection from "./components/ProofSection";
import TrustedByMarquee from "./components/Trustedbymarquee";
import Hero from "./components/Hero";
import "./app.css";
import ScaleTeam from "./components/ScaleTeam";

const App = () => {
  return (
    <div className="App w-full  mx-auto">
      <Header />
      <Hero />
      <TrustedByMarquee />
      <Engagement />
      <HowItWorks />
      <EngagementComparison />
      <OnboardingProcess />
      <ScaleTeam />
      <ProofSection />
      <FaqSection />
      <CTASection />
      <BookConsultationForm />
      <Footer />
    </div>
  );
};

export default App;
