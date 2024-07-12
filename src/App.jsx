import './styles/all.scss'
import Menu from './components/Menu'
import Header from './components/Header'
import About from "./components/About.jsx";
import Works from "./components/Works.jsx"
import Footer from "./components/Footer.jsx"
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx"
function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <Header />
        <About/>
        <Services/>
        <Works/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
