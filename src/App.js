import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact'
import Header from './components/Header';
import Footer from './components/Footer';

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
