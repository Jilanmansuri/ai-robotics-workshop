import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkshopDetails from './components/WorkshopDetails';
import LearningOutcomes from './components/LearningOutcomes';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col justify-between transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <WorkshopDetails />
          <LearningOutcomes />
          <FAQ />
          <RegistrationForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
