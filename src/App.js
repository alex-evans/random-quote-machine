import React from 'react';
import './App.css';
import Header from "./components/hearder";
import Footer from "./components/footer";
import QuoteBox from "./components/quote_box";

function App() {
  return (
    <div>
      <Header />
      <QuoteBox />
      <Footer />
    </div>
  );
}

export default App;
