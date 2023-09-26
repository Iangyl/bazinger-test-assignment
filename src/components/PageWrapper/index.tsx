import { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

const PageWrapper = ({ children }: { children?: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default PageWrapper;
