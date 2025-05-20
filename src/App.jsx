import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  // return (
  //   <div className="flex flex-col min-h-screen">
  //     <Navbar />
  //     <Hero />
  //     <main className="flex-grow container mx-auto px-4 py-8">
  //       <CardList />
  //     </main>
  //     <Footer />
  //   </div>
  // );

  return(
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <Hero/>
      <main className="flex-grow container mx-auto px- py-8">
        <Card></Card>
        <CardList/>
      </main>
      <Footer/>
    </div>

  )

}

export default App;