import './App.css';
import Contact from './components/Contact';
import Ruff from './assets/mr-ruff.jpeg'
import Blue from './assets/blue.jpeg'
import Spike from './assets/spike.jpeg'
import Chloe from './assets/chloe.jpeg'

function App() {
  return (
    <div className="contacts">
            <Contact 
                img={Ruff}
                name="Mr. Ruff"
                phone="(212) 555-1234"
                email="mr.ruff@doghouse.com"
            />
            <Contact 
                img={Blue}
                name="Blue"
                phone="(212) 555-2345"
                email="blue@me.com"
            />
            <Contact 
                img={Spike}
                name="Spike"
                phone="(212) 555-4567"
                email="spikethedog@email.com"
            />
            <Contact 
                img={Chloe}
                name="Chloe"
                phone="(0800) DOG QUEEN"
                email="queendog@kibble.com"
            />
        </div>
  );
}

export default App;
