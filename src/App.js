import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import FeeCalculator from './components/FeeCalculator/FeeCalculator';


function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Services/>
      <FeeCalculator/>
      <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
