import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
