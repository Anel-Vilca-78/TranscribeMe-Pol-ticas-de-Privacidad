import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
