import Contact from './components/Contact';
import TheBanner from './components/TheBanner';
import TheGallery from './components/TheGallery';
import TheFeatures from './components/TheFeatures';
import PageWrapper from './components/PageWrapper';
import TheTechInAction from './components/TheTechInAction';
import ModalProvider from './components/ModalProvider/ModalProvider';

function App() {
  return (
    <ModalProvider>
      <PageWrapper>
        <TheBanner />
        <TheFeatures />
        <TheGallery />
        <TheTechInAction />
        <Contact />
      </PageWrapper>
    </ModalProvider>
  );
}

export default App;
