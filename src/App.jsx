import './styles/all.scss'
import Menu from './components/Menu'
import Header from './components/Header'
import About from "./components/About.jsx";
import Works from "./components/Works.jsx"
import Footer from "./components/Footer.jsx"
function App() {
  return (
    <>
      <div className="App">
        <Menu />
        <Header />
        <About/>
        <Works/>
          <Footer/>
      </div>
    </>
  )
}

export default App
