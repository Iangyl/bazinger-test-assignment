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
    </PageWrapper>
  );
}

export default App;
