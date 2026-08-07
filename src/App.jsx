import './App.scss';
import {
  About,
  CtaSection,
  Footer,
  Header,
  HeroSection,
  LocationSection,
  ReviewsSection,
  ServicesSection,
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
  } = dataOdontologo;
  return (
    <div className='app'>
      <Header data={header} />
      <HeroSection data={hero} />
      <ServicesSection data={services} />
      <About data={about} />
      <ReviewsSection data={reviews_section} />
      <LocationSection data={location} />
      <CtaSection data={cta_section} />
      <Footer data={footer} />
      <WhatsAppButton data={whatsAppButton} />
    </div>
  );
}

export default App;
