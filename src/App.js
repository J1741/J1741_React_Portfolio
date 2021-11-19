import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
