import Contact from './components/Contact';
import TheGallery from './components/TheGallery';
import TheFeatures from './components/TheFeatures';
import PageWrapper from './components/PageWrapper';
import TheTechInAction from './components/TheTechInAction';

function App() {
  const api = process.env.REACT_APP_MAP_API_KEY;
  return (
    <PageWrapper>
      <TheFeatures />
      <TheGallery />
      <TheTechInAction />
      <Contact />
    </PageWrapper>
  );
}

export default App;
