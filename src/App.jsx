import { Art } from './components/Art/Art';
import { Color } from './components/Color/Color';
import { Contact } from './components/Contact/Contact';
import { Design } from './components/Design/Design';
import { Home } from './components/Home/Home';  
import { Interior } from './components/Interior/Interior';
import { Overview } from './components/Overview/Overview';


function App() {
  return (
    <div className="App">
        <Home/>
        <Art/>
        <Interior/>
        <Overview/>
        <Color/>
        <Design/>
        <Contact/>
    </div>
  )
}

export default App
