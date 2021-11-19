import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AboutMe /> */}
      {/* <Contact /> */}
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
