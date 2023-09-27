import Contact from './components/Contact';
import TheGallery from './components/TheGallery';
import TheFeatures from './components/TheFeatures';
import PageWrapper from './components/PageWrapper';
import TheTechInAction from './components/TheTechInAction';

function App() {
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
