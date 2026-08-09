import './App.scss';
import {
  About,
  CoverageSection,
  CtaSection,
  Footer,
  Header,
  HeroSection,
  LocationSection,
  ReviewsSection,
  ServicesSection,
  TeamSection,
} from './components/layout';
import { WhatsAppButton } from './components/ui';
import { dataOdontologo } from './data/dataOdontologo';

function App() {
  const {
    header,
    hero,
    services,
    reviews_section,
    about,
    location,
    cta_section,
    footer,
    whatsAppButton,
    teamSection,
    coverageSection,
  } = dataOdontologo;
  return (
    <div className='app'>
      <Header data={header} />
      <HeroSection data={hero} />
      <ServicesSection data={services} />
      <About data={about} />
      <ReviewsSection data={reviews_section} />
      <TeamSection data={teamSection} />
      <CoverageSection data={coverageSection} />
      <LocationSection data={location} />
      <CtaSection data={cta_section} />
      <Footer data={footer} />
      <WhatsAppButton data={whatsAppButton} />
    </div>
  );
}

export default App;
