import 'bootstrap/dist/css/bootstrap.css';
import {Navbar}  from './Components/Navbar'
import Footer from './Components/Footer'
import Poke from './Components/Principal'
function App() {
  return (
    <>
    <header>
        <Navbar />
    </header>

    <main>
      <Poke/>
    </main>
    <footer>
        <Footer />
    </footer>
    
    </>
  )
}

export default App
